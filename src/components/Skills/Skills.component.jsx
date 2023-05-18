import "./Skills.styles.css";
import { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { AnimationsContext } from "../../context/animations.context";

const Skills = () => {
  const { setSkillsIsRendered } = useContext(AnimationsContext);

  useEffect(() => {
    setTimeout(() => setSkillsIsRendered(true), 500);
  }, [setSkillsIsRendered]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="skills">
      <div className="section-title">Umiejęctności</div>
      <div className="skills-container">
        <span className="skill html">HTML</span>
        <span className="skill css">CSS</span>
        <span className="skill sass">SASS</span>
        <span className="skill javascript">JS</span>
        <span className="skill typescript">TS</span>
        <span className="skill react">React</span>
        <span className="skill redux">Redux</span>
        <span className="skill">Git</span>
        <span className="skill">Webpack</span>
      </div>
    </motion.div>
  );
};

export default Skills;
