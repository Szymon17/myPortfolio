import "./project.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import technologiesMap from "../../utils/technologies";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const animations = {
  project: {
    show: { opacity: 1, transition: { delay: 0.4, delayChildren: 0.7, staggerChildren: 0.3 } },
    hidden: { opacity: 0 },
  },

  text: position => {
    const hiddenX = position === "right" ? -300 : 300;

    return {
      hidden: { opacity: 0, x: hiddenX },
      show: { opacity: 1, x: 0, transition: { duration: 0.2, type: "spring", damping: 10 } },
    };
  },

  technologies: {
    show: { transition: { staggerChildren: 0.2 } },
  },

  technology: {
    show: { opacity: 1 },
    hidden: { opacity: 0 },
  },

  links: {
    show: { transition: { staggerChildren: 0.2 } },
  },

  link: {
    show: { opacity: 1, size: 2 },
    hidden: { opacity: 0, size: 1.5 },
  },
};

const Project = ({ data, index }) => {
  const [isTechnologiesRendered, setTechnologiesAnimEnd] = useState(false);
  const [position] = useState(index % 2 === 0 ? "left" : "right");
  const { name, description, technologies, imgUrl, githubLink, hostingLink } = data;

  const technolgiesRenderHandler = index => {
    if (index === technologies.length - 1) setTechnologiesAnimEnd(!isTechnologiesRendered);
  };

  return (
    <motion.div variants={animations.project} initial="hidden" whileInView="show" className={`project ${position === "right" ? "right" : "left"}`}>
      <img className="project__image" src={imgUrl} alt="project" />
      <motion.h3 variants={animations.text(position)} className="project__title">
        {name}
      </motion.h3>
      <motion.h4 variants={animations.text(position)} className="project__description">
        {description}
      </motion.h4>
      <motion.ul variants={animations.technologies} className="project__technologies">
        {technologies.map((tech, index) => {
          const img = technologiesMap.get(tech);

          return (
            <motion.li
              variants={animations.technology}
              onAnimationComplete={() => technolgiesRenderHandler(index)}
              className="project__technologies__item"
              key={index}
            >
              <img className="project__technologies__image" src={img} alt="technology" />
            </motion.li>
          );
        })}
      </motion.ul>
      {isTechnologiesRendered && (
        <motion.div variants={animations.links} initial="hidden" whileInView="show" className="project__links">
          <motion.a variants={animations.link} target="__blank" href={githubLink}>
            <FontAwesomeIcon icon={faGithub} />
          </motion.a>
          {hostingLink && (
            <motion.a variants={animations.link} target="__blank" href={hostingLink}>
              <FontAwesomeIcon icon={faGlobe} />
            </motion.a>
          )}
        </motion.div>
      )}
    </motion.div>
  );
};

export default Project;
