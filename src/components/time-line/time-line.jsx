import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import DATA from "./TIME-LINE_DATA.json";
import "./time-line.css";

const TimeLine = () => {
  const { items } = DATA;
  const timelineRef = useRef();
  const dragFieldRef = useRef();
  const contentRef = useRef();

  const [offset, setOffset] = useState(0);
  const [dragFieldWidth, setDragField] = useState(0);
  const [itemWidth, setItemWidth] = useState(300);
  const [distanceBetweenItems, setItemDistance] = useState(50);

  useEffect(() => {
    const changeItemsSizeToFitPage = () => {
      let tmpItemWidth = itemWidth;
      let tmpDistanceBetweenItems = distanceBetweenItems;

      let itemsRatio = (timelineRef.current.offsetWidth - 40) / (tmpItemWidth + tmpDistanceBetweenItems);

      let maxLoopCount = 100;

      if (itemsRatio - Math.floor(itemsRatio) >= 0.5) {
        while (itemsRatio - Math.floor(itemsRatio) >= 0.5 && itemsRatio - Math.floor(itemsRatio) < 0.9 && maxLoopCount > 0) {
          tmpItemWidth -= 10;
          tmpDistanceBetweenItems -= 1;
          itemsRatio = (timelineRef.current.offsetWidth - 40) / (tmpItemWidth + tmpDistanceBetweenItems);
          maxLoopCount--;
        }
      } else {
        while (itemsRatio - Math.floor(itemsRatio) < 0.5 && maxLoopCount > 0) {
          tmpItemWidth += 10;
          tmpDistanceBetweenItems += 1;
          itemsRatio = (timelineRef.current.offsetWidth - 20) / (tmpItemWidth + tmpDistanceBetweenItems);
          maxLoopCount--;
        }
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

      setOffset(newOffset);
      setDragField(offSetWidth);
      console.log("cześć wykonałem zmianę offsetu na ", newOffset, offSetWidth, width);
    };
    changeDragSize();
  }, [itemWidth]);

  return (
    <section ref={timelineRef} className="timeLine shadow">
      <div
        ref={dragFieldRef}
        className="timeLine__dragField"
        style={{
          left: `-${offset}px`,
          width: `${dragFieldWidth}px`,
        }}
      ></div>
      {offset}
      <motion.div key={offset} ref={contentRef} dragConstraints={dragFieldRef} drag="x" className="timeLine__container">
        <div style={{ width: (items.length - 1) * (itemWidth + distanceBetweenItems) }} className="timeLine__line" />
        <ul className="timeLine__list">
          {items.map(({ date, text }, index) => (
            <li style={{ left: (itemWidth + distanceBetweenItems) * index }} key={index} className="timeLine__item">
              <div className="timeLine__circle" />
              <div className="timeLine__textContainer">
                <h4 className="timeLine__title">{date}</h4>
                <p className="timeLine__text">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default TimeLine;
