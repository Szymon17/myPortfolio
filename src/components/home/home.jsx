import "./home.css";
import { useState } from "react";
import { motion } from "framer-motion";
import TypeWriter from "../typeWriter/typeWriter";
import Bubble from "../bubble/bubble";
import technologiesMap from "../../utils/technologies";

const animations = {
  emoji: { rotate: [0, 20, -10, 20, -10, 0], transition: { repeat: Infinity, duration: 0.7, repeatDelay: 10, delay: 2 } },
  baner: { opacity: [0, 1], transition: { duration: 0.3 } },
  name: { opacity: [0, 0, 1], y: [-300, 0], transition: { duration: 0.5, delay: 0.3 } },
};

const technologies = [
  { left: 5, top: 35, imgUrl: technologiesMap.get("html") },
  { left: 25, top: 15, imgUrl: technologiesMap.get("css") },
  { left: 45, top: 28, imgUrl: technologiesMap.get("sass") },
  { left: 70, top: 20, imgUrl: technologiesMap.get("js") },
  { left: 85, top: 35, imgUrl: technologiesMap.get("ts") },
  { left: 35, top: 80, imgUrl: technologiesMap.get("react") },
  { left: 15, top: 65, imgUrl: technologiesMap.get("redux") },
  { left: 60, top: 65, imgUrl: technologiesMap.get("graphql") },
  { left: 80, top: 85, imgUrl: technologiesMap.get("nodejs") },
];

const Home = ({ renderedHandler }) => {
  const [nameAnimationComplete, setNameAnimationState] = useState(false);
  const { baner, emoji, name } = animations;

  return (
    <div className="home">
      <motion.div animate={baner} className="home__welcomeBanner">
        <motion.span animate={emoji} className="home__welcomeBanner__emoji">
          👋
        </motion.span>
        <div className="home__welcomeBanner__text">
          <motion.h1 onAnimationComplete={() => setNameAnimationState(true)} animate={name} className="home__welcomeBanner__name">
            Cześć, jestem <span className="home__welcomeBanner__name-bold">Szymon</span>
          </motion.h1>
          <h3 className="home__welcomeBanner__profession">{nameAnimationComplete && <TypeWriter>Web Developer</TypeWriter>}</h3>
        </div>
      </motion.div>
      {nameAnimationComplete &&
        technologies.map((technology, index) => {
          const { left, top, imgUrl } = technology;
          const handler = technologies.length === index + 1 ? renderedHandler : () => null;

          return <Bubble left={left} top={top} imgUrl={imgUrl} index={index} handler={handler} key={index} />;
        })}
    </div>
  );
};

export default Home;
