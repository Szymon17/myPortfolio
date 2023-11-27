import PROJECTS_DATA from "./PROJECTS_DATA.json";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import "./projects.css";

const variants = {
  notVisible: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

const Projects = () => {
  const { projects } = PROJECTS_DATA;

  return (
    <section id="Projects" className="projects shadow">
      <h2 className="projects__title">Projekty</h2>
      <ul className="projects__list">
        {projects.map(({ name, description, githubLink, hostingLink }) => (
          <motion.li whileHover="visible" initial="notVisible" className="project" key={name}>
            <motion.div variants={variants} className="project__text">
              <h1 className="project__title">{name}</h1>
              <h2 className="project__description">{description}</h2>
              <div className="project__links">
                <a className="project__link" target="__blank" href={githubLink}>
                  <FontAwesomeIcon icon={faCode} />
                </a>
                {hostingLink && (
                  <a className="project__link" target="__blank" href={hostingLink}>
                    <FontAwesomeIcon icon={faUpRightFromSquare} />
                  </a>
                )}
              </div>
            </motion.div>
            <img className="project__img" src={`/assets/projectsImages/${name}.png`} alt="Img" />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
