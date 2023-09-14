import "./time-line.css";
import DATA from "./TIME-LINE_DATA.json";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointer } from "@fortawesome/free-solid-svg-icons";

const remindAnimationDuration = 2000;

const animations = {
  list: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.3,
      },
    },
  },

  item: {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.3 } },
  },

  text: {
    hidden: { opacity: 0, y: -300 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  },
  icon: {
    initial: { opacity: 1, x: 50, transition: { duration: 0.5 } },
    animate: { opacity: [1, 1, 1, 1, 0], x: [50, -50, 50, -50, -50], transition: { duration: remindAnimationDuration / 1000 } },
  },
};

const TimeLine = () => {
  const { items } = DATA;
  const timelineRef = useRef();
  const dragFieldRef = useRef();
  const contentRef = useRef();

  const [offset, setOffset] = useState(0);
  const [dragFieldWidth, setDragField] = useState(0);
  const [itemWidth, setItemWidth] = useState(300);
  const [padding, setPadding] = useState(30);
  const [distanceBetweenItems, setItemDistance] = useState(50);
  const [remindAboutDrag, setRemindAboutDragState] = useState(false);
  const [remindIntervalIndex, setRemindIntervalIndex] = useState(0);

  useEffect(() => {
    const calculateItemsRation = (ItemWidth, DistanceBetweenItems) =>
      (timelineRef.current.offsetWidth - padding) / (ItemWidth + DistanceBetweenItems);

    const changeItemsSizeToFitPage = () => {
      let tmpItemWidth = 300;
      let tmpDistanceBetweenItems = 50;
      let maxLoopCount = 100;

      let itemsRatio = calculateItemsRation(tmpItemWidth, tmpDistanceBetweenItems);

      if (timelineRef.current.offsetWidth > 350) {
        if (itemsRatio - Math.floor(itemsRatio) >= 0.6) {
          while (itemsRatio - Math.floor(itemsRatio) >= 0.6 && itemsRatio - Math.floor(itemsRatio) < 0.9 && maxLoopCount > 0) {
            tmpItemWidth -= 5;
            tmpDistanceBetweenItems -= 6;
            itemsRatio = calculateItemsRation(tmpItemWidth, tmpDistanceBetweenItems);
            maxLoopCount--;
          }
        } else {
          while (itemsRatio - Math.floor(itemsRatio) < 0.6 && maxLoopCount > 0) {
            tmpItemWidth += 5;
            tmpDistanceBetweenItems += 6;
            itemsRatio = calculateItemsRation(tmpItemWidth, tmpDistanceBetweenItems);
            maxLoopCount--;
          }
        }
        setPadding(30);
      } else {
        tmpItemWidth = timelineRef.current.offsetWidth - 20;
        setPadding(10);
      }

      setItemWidth(tmpItemWidth);
      setItemDistance(tmpDistanceBetweenItems);
    };

    if (!timelineRef.current || !contentRef.current) return;

    changeItemsSizeToFitPage();
    const observer = new ResizeObserver(changeItemsSizeToFitPage);
    observer.observe(document.body);

    return () => {
      observer.disconnect();
      clearInterval(remindIntervalIndex);
    };
  }, []);

  useEffect(() => {
    const changeDragSize = () => {
      const { width } = timelineRef.current.getBoundingClientRect();
      const offSetWidth = (items.length - 1) * (itemWidth + distanceBetweenItems) + itemWidth;
      const newOffset = offSetWidth - width;

      setOffset(newOffset);
      setDragField(offSetWidth);
    };
    changeDragSize();
  }, [itemWidth]);

  const remind = () => {
    clearInterval(remindIntervalIndex);

    const newInterval = setInterval(() => setRemindAboutDragState(true), 20000 + remindAnimationDuration);

    setRemindIntervalIndex(newInterval);
  };

  return (
    <motion.section
      onClick={remind}
      onViewportEnter={remind}
      onViewportLeave={() => clearInterval(remindIntervalIndex)}
      style={{ padding: `0 ${padding}px` }}
      initial="hidden"
      whileInView="show"
      ref={timelineRef}
      className="timeLine"
      id="Timeline"
    >
      <div ref={dragFieldRef} className="timeLine__dragField" style={{ left: `-${offset + padding}px`, width: `${dragFieldWidth}px` }}></div>
      <motion.div key={offset} ref={contentRef} dragConstraints={dragFieldRef} drag="x" className="timeLine__container">
        <motion.ul style={{ width: `${dragFieldWidth}px`, height: "100%" }} variants={animations.list} className="timeLine__list">
          {items.map(({ date, text }, index) => (
            <motion.li variants={animations.item} style={{ left: (itemWidth + distanceBetweenItems) * index }} key={index} className="timeLine__item">
              <motion.div variants={animations.text} style={{ width: itemWidth }} className="timeLine__textContainer">
                <h4 className="timeLine__title">{date}</h4>
                <p className="timeLine__text">{text}</p>
              </motion.div>
              <div className="timeLine__circle" />
            </motion.li>
          ))}
        </motion.ul>
        <div style={{ width: (items.length - 1) * (itemWidth + distanceBetweenItems) }} className="timeLine__line" />
      </motion.div>
      {remindAboutDrag && (
        <motion.span
          variants={animations.icon}
          onAnimationComplete={() => setRemindAboutDragState(false)}
          initial="initial"
          animate="animate"
          className="timeLine__icon"
        >
          <FontAwesomeIcon icon={faHandPointer} />
        </motion.span>
      )}
    </motion.section>
  );
};

export default TimeLine;
