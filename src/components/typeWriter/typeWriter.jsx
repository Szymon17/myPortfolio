import "./typeWriter.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const cursorAnimation = { opacity: [0, 0.7, 0.7, 0], transition: { duration: 0.4, repeat: 20, repeatDelay: 0.3 } };

const TypeWriter = ({ children }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    if (text.length !== children.length) setTimeout(() => setText(text + children[text.length]), 100);
  }, [text, children]);

  return (
    <span>
      <span>{text}</span>
      <motion.span className="cursor" animate={cursorAnimation}>
        |
      </motion.span>
    </span>
  );
};

export default TypeWriter;
