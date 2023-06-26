import "./Project.styles.css";
import { faCode, faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useEffect } from "react";

const variants = {
  offscreen: rightSide => {
    if (window.innerWidth > 900) return { x: rightSide ? -500 : 500, y: "-50%", opacity: 0 };
    else return { x: rightSide ? 100 : -100, y: "-50%", opacity: 0 };
  },
  image: {
    opacity: 0.4,
    transition: {
      delay: 0.2,
      duration: 0.4,
    },
  },
};

const Project = ({ imgUrl, title, children, hostLink, githubLink, technologies, right, handler = () => null }) => {
  useEffect(() => {
    setTimeout(() => handler(), 500);
  }, [handler]);

  return (
    <div className={right ? "project right" : "project"}>
      <motion.img variants={variants} initial={{ opacity: 0 }} whileInView="image" src={imgUrl} className="project__image" alt="" />
      <div className="project__description">
        <motion.h1 initial={{ x: right ? -300 : 300, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} className="project__title">
          {title}
        </motion.h1>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }} className="project__technologies">
          {technologies.map((technology, index) => (
            <span key={index} className={`project__technology ${technology.toLowerCase()}`}>
              {technology}
            </span>
          ))}
        </motion.div>
        <motion.div
          variants={variants}
          initial={variants.offscreen(right)}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="project__text"
        >
          {children}
        </motion.div>
        {(hostLink || githubLink) && (
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }} className="project__linksContainer">
            {githubLink && (
              <a href={githubLink} className="project__link githubLink" target="__blank">
                <FontAwesomeIcon icon={faCode} />
              </a>
            )}
            {hostLink && (
              <a href={hostLink} className="project__link hostLink" target="__blank">
                <FontAwesomeIcon icon={faUpRightFromSquare} />
              </a>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Project;
