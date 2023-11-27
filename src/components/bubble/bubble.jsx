import "./bubble.css";
import { motion } from "framer-motion";

const animation = {
  initial: { top: 30, left: -100 },
  animate: (left, top, index) => {
    return { top: `${top}%`, left: `${left}%`, transition: { duration: 1.2, delay: 0.1 * index } };
  },
};

const Bubble = ({ left, top, index, imgUrl, handler, size = 6.25, rotate = 0 }) => {
  return (
    <motion.div
      initial={animation.initial}
      animate={() => animation.animate(left, top, index)}
      style={{ width: `${size}em`, height: `${size}em`, rotate: `${rotate}deg` }}
      className="bubble"
      onAnimationComplete={handler}
    >
      {imgUrl && <img className="bubble__img" src={imgUrl} alt="" />}
    </motion.div>
  );
};

export default Bubble;
