import "./AboutMe.styles.css";
import Texts from "./texts.json";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import { AnimationsContext } from "../../context/animations.context";

const { shortText, longText } = Texts;

const AboutMe = () => {
  const { setAboutMeIsRendered } = useContext(AnimationsContext);
  const [longVersion, setLongVersionState] = useState(false);
  const [animationStart, setAnimationStartState] = useState(true);

  useEffect(() => {
    setTimeout(() => setAboutMeIsRendered(true), 500);
  }, [setAboutMeIsRendered]);

  const startTextAnimation = () => {
    if (animationStart) {
      setAnimationStartState(false);
      setTimeout(() => setAnimationStartState(true), 100);
    }
  };

  const switchTextVersion = () => {
    if (longVersion) {
      setLongVersionState(false);
      startTextAnimation();
    } else {
      setLongVersionState(true);
      startTextAnimation();
    }
  };

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="section-right about">
      <p className="section-title">O mnie</p>
      <div className="section-body">
        <AnimatePresence>
          {animationStart && (
            <motion.p animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="about-me-text">
              {longVersion ? longText : shortText}
            </motion.p>
          )}
        </AnimatePresence>
        <button className="button-letter" onClick={switchTextVersion}>
          {longVersion ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
        </button>
      </div>
    </motion.section>
  );
};

export default AboutMe;
