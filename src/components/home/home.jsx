import "./home.css";
import { useState } from "react";
import { motion } from "framer-motion";
import Bubble from "../bubble/bubble";
import htmlImg from "../../assets/technologyLogos/html.png";
import cssImg from "../../assets/technologyLogos/css.png";
import sassImg from "../../assets/technologyLogos/sass.png";
import jsImg from "../../assets/technologyLogos/js.png";
import tsImg from "../../assets/technologyLogos/ts.png";
import reactImg from "../../assets/technologyLogos/react.png";
import reduxImg from "../../assets/technologyLogos/redux.png";
import grapgqlImg from "../../assets/technologyLogos/grapgql.png";
import nodejsImg from "../../assets/technologyLogos/nodejs.png";
import TypeWriter from "../typeWriter/typeWriter";

const animations = {
  emoji: { rotate: [0, 20, -10, 20, -10, 0], transition: { repeat: Infinity, duration: 0.7, repeatDelay: 10, delay: 2 } },
  baner: { opacity: [0, 1], transition: { duration: 0.3 } },
  name: { opacity: [0, 0, 1], y: [-300, 0], transition: { duration: 0.5, delay: 0.3 } },
};

const technologies = [
  { left: 5, top: 35, imgUrl: htmlImg },
  { left: 25, top: 15, imgUrl: cssImg },
  { left: 45, top: 28, imgUrl: sassImg },
  { left: 70, top: 20, imgUrl: jsImg },
  { left: 85, top: 35, imgUrl: tsImg },
  { left: 35, top: 80, imgUrl: reactImg },
  { left: 15, top: 65, imgUrl: reduxImg },
  { left: 60, top: 65, imgUrl: grapgqlImg },
  { left: 80, top: 85, imgUrl: nodejsImg },
];

const Home = ({ renderedHandler }) => {
  const [nameAnimationComplete, setNameAnimationState] = useState(false);
  const { baner, emoji, name } = animations;

  return (
    <div className="home">
      <motion.div animate={baner} className="home__welcomeBanner">
        <motion.h1 animate={emoji} className="home__welcomeBanner__emoji">
          👋
        </motion.h1>
        <div className="home__welcomeBanner__text">
          <motion.h2 onAnimationComplete={() => setNameAnimationState(true)} animate={name} className="home__welcomeBanner__name">
            Cześć, jestem <span className="home__welcomeBanner__name-bold">Szymon</span>
          </motion.h2>
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
