import "./Header.styles.css";
import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AnimationsContext } from "../../context/animations.context";
import TypeWriter from "../TypeWriter/TypeWriter.component";

const text = "Szymon Jabłoński";
const neonText = "Web developer";

const Header = () => {
  const [firstTextIsTyped, setFirstState] = useState(false);
  const [secondTextIsTyped, setSecondState] = useState(false);
  const { setHeaderIsRendered } = useContext(AnimationsContext);

  useEffect(() => {
    if (secondTextIsTyped) setTimeout(() => setHeaderIsRendered(true), 500);
  }, [secondTextIsTyped, setHeaderIsRendered]);

  const variants = {
    lightOff: {
      opacity: [1, 0.3, 0.3, 0.3, 0.3, 0.5, 0.3, 1],
      transition: { repeat: Infinity, duration: 0.4, delay: 7, repeatDelay: 15 },
    },

    cursor: {
      opacity: secondTextIsTyped ? [0, 1, 0] : 1,
      transition: { repeat: secondTextIsTyped ? 20 : 0, duration: 0.5, repeatDelay: 0.5 },
    },
  };

  return (
    <div className="Header">
      <div className="Header-text">
        <TypeWriter text={text} handler={() => setFirstState(true)} />
        {firstTextIsTyped && (
          <motion.span variants={variants} animate="lightOff">
            <TypeWriter text={neonText} handler={() => setSecondState(true)} cssClass="neon-text" />
          </motion.span>
        )}
      </div>
    </div>
  );
};

export default Header;
