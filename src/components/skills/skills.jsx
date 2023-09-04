import "./skills.css";
import { motion } from "framer-motion";
import technologies from "../../utils/technologies";

const animations = {
  section: {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.5, delay: 0.5 } },
  },

  list: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.7,
        staggerChildren: 0.1,
      },
    },
  },

  item: {
    hidden: { opacity: 0, y: 500 },
    show: { opacity: 1, y: 0 },
  },
};

const technologiesArray = Array(...technologies.values());

const Skills = () => {
  return (
    <motion.section variants={animations.section} initial="hidden" whileInView="show" className="skills">
      <h2 className="skills__title">Umiejętności</h2>
      <motion.ul variants={animations.list} className="skills__list">
        {technologiesArray.map((url, index) => (
          <motion.li variants={animations.item} className="skills__item" key={index}>
            <img className="skills__image" src={url} alt="skill" />
          </motion.li>
        ))}
      </motion.ul>
    </motion.section>
  );
};

export default Skills;
