import "./home.css";
import { useContext } from "react";
import { AnimationsContext } from "../../animations";
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

const Home = () => {
  const { animations, completeAnimation } = useContext(AnimationsContext);
  const { text, emoji, name } = animations;

  return (
    <div className="home">
      <motion.div animate={text.animation} onAnimationComplete={() => completeAnimation("text")} className="home__welcomeBanner">
        <motion.h1 animate={emoji.animation} className="home__welcomeBanner__emoji">
          👋
        </motion.h1>
        <div className="home__welcomeBanner__text">
          <motion.h2 animate={name.animation} className="home__welcomeBanner__name">
            Cześć, jestem <span className="home__welcomeBanner__name-bold">Szymon</span>
          </motion.h2>
          <h3 className="home__welcomeBanner__profession">Web Developer</h3>
        </div>
      </motion.div>
      <Bubble left={5} top={35} imgUrl={htmlImg} />
      <Bubble left={25} top={15} imgUrl={cssImg} />
      <Bubble left={45} top={28} imgUrl={sassImg} />
      <Bubble left={70} top={20} imgUrl={jsImg} />
      <Bubble left={85} top={35} imgUrl={tsImg} />
      <Bubble left={35} top={80} imgUrl={reactImg} />
      <Bubble left={15} top={65} imgUrl={reduxImg} />
      <Bubble left={60} top={65} imgUrl={grapgqlImg} />
      <Bubble left={80} top={85} imgUrl={nodejsImg} />
    </div>
  );
};

export default Home;
