import "./about.css";
import { motion } from "framer-motion";

const section = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6 } },
};

const About = () => {
  return (
    <motion.section id="About" variants={section} initial="hidden" whileInView="show" className="about shadow">
      <motion.h2 variants={item} className="about__title">
        O mnie
      </motion.h2>
      <motion.p variants={item} className="about__text">
        Jestem młodą osobą, która posiada pasję programowania. Mimo braku doświadczenia zawodowego mogę pochwalić się takimi cechami jak zawziętość,
        chęć podejmowania nowych wyzwań czy chęć do pracy w zespole. W przyszłości widzę siebie jako dobrego web developera, dlatego stale poszerzam
        swoje umiejętności, które dają mi coraz większą pewność siebie.
      </motion.p>
    </motion.section>
  );
};

export default About;
