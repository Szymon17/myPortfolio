import "./Project.styles.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const variants = {
  turnOff: {
    opacity: 0,
  },
  turnOn: {
    opacity: 1,
  },
  darker: {
    opacity: 0.1,
  },
  grow: {
    width: window.innerWidth > 900 ? "700px" : "100%",
    opacity: 1,
  },
  normalWidth: {
    width: window.innerWidth > 900 ? "550px" : "100%",
    opacity: 1,
  },
};

const Project = ({ imgUrl, title, children, hostLink, githubLink, technologies, right, handler = () => null }) => {
  const [isHover, setIsHoverState] = useState(false);
  const [projectIsRender, setProjectIsRender] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setProjectIsRender(true);
      handler();
    }, 500);
  }, [handler, setProjectIsRender]);

  const setAnimationForProject = () => {
    if (projectIsRender && isHover) return "grow";
    else if (projectIsRender && !isHover) return "normalWidth";
    else if (!projectIsRender) return "turnOn";
  };

  return (
    <div className={`${right ? "project right" : "project"}`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={setAnimationForProject}
        variants={variants}
        whileHover={() => setIsHoverState(true)}
        onHoverEnd={() => setIsHoverState(false)}
        className="project-body"
      >
        <motion.img animate={isHover ? "turnOn" : "darker"} variants={variants} className="project-background" src={imgUrl} />
        <div className="project-header">
          <motion.p animate={isHover ? "turnOff" : "turnOn"} variants={variants} className="project-title">
            {title}
          </motion.p>
          {typeof technologies === "object" && (
            <div className="technologies">
              {technologies.map((technology, index) => (
                <span className={`technologies-skill ${technology.toLowerCase()}`} key={index}>
                  {technology}
                </span>
              ))}
            </div>
          )}
        </div>
        <motion.p animate={isHover ? "turnOff" : "turnOn"} variants={variants} className="project-text">
          {children}
        </motion.p>
        {hostLink ||
          (githubLink && (
            <motion.div animate={isHover ? "turnOn" : "turnOff"} variants={variants} className={`buttons-container`}>
              {githubLink && (
                <a className="githublink" target="_blank" rel="noreferrer" href={githubLink}>
                  Github
                </a>
              )}
              {hostLink && (
                <a className="hostinglink" target="_blank" rel="noreferrer" href={hostLink}>
                  Hosting
                </a>
              )}
            </motion.div>
          ))}
      </motion.div>
    </div>
  );
};

export default Project;
