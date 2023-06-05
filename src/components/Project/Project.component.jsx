import "./Project.styles.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const breakPoint = 900;

const variants = {
  offscreen: rightSide => {
    if (window.innerWidth > 900) return { x: rightSide ? 500 : -500 };
    else return { x: rightSide ? 100 : -100 };
  },
  onscreen: {
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.5,
      duration: 0.9,
    },
  },
  grow: {
    width: window.innerWidth > breakPoint ? "700px" : "100%",
    opacity: 1,
  },
  normalWidth: {
    width: window.innerWidth > breakPoint ? "550px" : "100%",
    opacity: 1,
  },
  turnOff: {
    opacity: 0,
  },
  turnOn: {
    opacity: 1,
  },
  darker: {
    opacity: 0.1,
  },
};

const Project = ({ imgUrl, title, children, hostLink, githubLink, technologies, right, handler = () => null }) => {
  const [isHover, setIsHoverState] = useState(false);

  useEffect(() => {
    setTimeout(() => handler(), 500);
  }, [handler]);

  return (
    <div className={`${right ? "project right" : "project"}`}>
      <motion.div
        variants={variants}
        initial={() => variants.offscreen(right)}
        animate={isHover ? "grow" : "normalWidth"}
        whileInView="onscreen"
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
        <motion.div animate={isHover && window.innerHeight > breakPoint ? "turnOff" : "turnOn"} variants={variants} className="project-text">
          {children}
        </motion.div>
        {(githubLink || hostLink) && (
          <motion.div animate={isHover ? "turnOn" : "turnOff"} variants={variants} className={`buttons-container`}>
            {githubLink && (
              <a className="githublink" target="_blank" rel="noreferrer" href={githubLink}>
                Github
              </a>
            )}
            {hostLink && (
              <a className="hostlink" target="_blank" rel="noreferrer" href={hostLink}>
                Hosting
              </a>
            )}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Project;
