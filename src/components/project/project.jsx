import "./project.css";
import { useState } from "react";
import { motion } from "framer-motion";

const animations = {
  project: {
    show: { opacity: 1, transition: { delay: 0.4, delayChildren: 0.7, staggerChildren: 0.4 } },
    hidden: { opacity: 0 },
  },

  title: position => {
    const hiddenX = position === "right" ? -300 : 300;

    return {
      hidden: { opacity: 0, x: hiddenX },
      show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    };
  },
};

const Project = ({ data, index }) => {
  const [position] = useState(index % 2 === 0 ? "left" : "right");
  const { name, description, technologies, imgUrl } = data;

  return (
    <motion.div variants={animations.project} initial="hidden" whileInView="show" className={`project ${position === "right" ? "right" : "left"}`}>
      <img className="project__image" src={imgUrl} alt="project" />
      <motion.h3 variants={animations.title(position)} className="project__title">
        {name}
      </motion.h3>
      <motion.h4 className="project__description">{description}</motion.h4>
    </motion.div>
  );
};

export default Project;
