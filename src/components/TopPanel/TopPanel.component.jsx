import "./TopPanel.styles.css";
import { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { AnimationsContext } from "../../context/animations.context";
import TopImg from "../../assets/bgImage.jpg";
import Skills from "../Skills/Skills.component";

const animationTime = 2;

const TopPanel = () => {
  const { setTopPanelIsRendered } = useContext(AnimationsContext);

  useEffect(() => {
    setTimeout(() => setTopPanelIsRendered(true), animationTime * 1000);
  });

  return (
    <div className="top">
      <motion.div
        initial={{ width: "100%", height: "100%" }}
        animate={{ width: 0 }}
        transition={{ duration: animationTime }}
        className="top__curtain"
      />
      <div className="top-left">
        <Skills />
      </div>

      <div className="top-right">
        <img src={TopImg} alt="img" className="top-image"></img>
      </div>
    </div>
  );
};

export default TopPanel;
