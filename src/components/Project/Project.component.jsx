import "./Project.styles.css";
import { motion } from "framer-motion";
import { useEffect } from "react";

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
};

const Project = ({ imgUrl, title, children, hostLink, githubLink, technologies, right, handler = () => null }) => {
  useEffect(() => {
    setTimeout(() => handler(), 500);
  }, [handler]);

  return (
    <motion.div variants={variants} initial={() => variants.offscreen(right)} whileInView="onscreen" className={right ? "project right" : "project"}>
      <img src={imgUrl} className="project__image" alt="" />
      <div className="project__description">
        <h1 className="project__title">{title}</h1>
        <div className="project__technologies">
          {technologies.map((technology, index) => (
            <span key={index} className={`project__technology ${technology.toLowerCase()}`}>
              {technology}
            </span>
          ))}
        </div>
        <div className="project__text">{children}</div>
        {(hostLink || githubLink) && (
          <div className="project__linksContainer">
            {githubLink && (
              <a href={githubLink} className="project__link githubLink" target="__blank">
                Github
              </a>
            )}
            {hostLink && (
              <a href={hostLink} className="project__link hostLink" target="__blank">
                Hosting
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Project;
