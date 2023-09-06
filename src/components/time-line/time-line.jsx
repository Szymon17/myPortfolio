import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import DATA from "./TIME-LINE_DATA.json";
import "./time-line.css";

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

  useEffect(() => {
    const changeItemsSizeToFitPage = () => {
      let tmpItemWidth = 300;
      let tmpDistanceBetweenItems = 50;
      let maxLoopCount = 100;

      const calculateItemsRation = () => (timelineRef.current.offsetWidth - padding) / (tmpItemWidth + tmpDistanceBetweenItems);

      let itemsRatio = calculateItemsRation();
      console.log(itemsRatio);
      if (timelineRef.current.offsetWidth > 350) {
        if (itemsRatio - Math.floor(itemsRatio) >= 0.6) {
          while (itemsRatio - Math.floor(itemsRatio) >= 0.6 && itemsRatio - Math.floor(itemsRatio) < 0.9 && maxLoopCount > 0) {
            tmpItemWidth -= 5;
            tmpDistanceBetweenItems -= 6;
            itemsRatio = calculateItemsRation();
            maxLoopCount--;
          }
        } else {
          while (itemsRatio - Math.floor(itemsRatio) < 0.6 && maxLoopCount > 0) {
            tmpItemWidth += 5;
            tmpDistanceBetweenItems += 6;
            itemsRatio = calculateItemsRation();
            maxLoopCount--;

            console.log("wykonano");
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
    };
  }, []);

  useEffect(() => {
    const changeDragSize = () => {
      const { width } = timelineRef.current.getBoundingClientRect();
      const offSetWidth = contentRef.current.scrollWidth;
      const newOffset = offSetWidth - width;

      console.log(newOffset, offSetWidth);
      setOffset(newOffset);
      setDragField(offSetWidth);
    };
    changeDragSize();

    console.log(padding);
  }, [itemWidth]);

  return (
    <motion.section style={{ padding: padding }} initial="hidden" whileInView="show" ref={timelineRef} className="timeLine shadow">
      <div
        ref={dragFieldRef}
        className="timeLine__dragField"
        style={{
          left: `-${offset + padding}px`,
          width: `${dragFieldWidth}px`,
        }}
      ></div>
      <motion.div key={offset} ref={contentRef} dragConstraints={dragFieldRef} drag="x" className="timeLine__container">
        <motion.ul variants={animations.list} className="timeLine__list">
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
    </motion.section>
  );
};

export default TimeLine;
