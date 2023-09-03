import "./Skills.styles.css";
import htmlImage from "../../assets/technologyLogos/html.png";
import cssImage from "../../assets/technologyLogos/css.png";
import jsImage from "../../assets/technologyLogos/js.png";
import sassImage from "../../assets/technologyLogos/sass.png";
import tsImage from "../../assets/technologyLogos/ts.png";
import reactImage from "../../assets/technologyLogos/react.png";
import reduxImage from "../../assets/technologyLogos/redux.png";
import gitImage from "../../assets/technologyLogos/git.png";
import webpackImage from "../../assets/technologyLogos/webpack.png";
import graphQl from "../../assets/technologyLogos/grapgql.png";
import nodeJS from "../../assets/technologyLogos/nodejs.png";

const Skills = () => {
  return (
    <div className="skills">
      <div className="section-title">Umiejętności</div>
      <div className="skills-container">
        <span className="skill html">
          <img src={htmlImage} alt="" />
        </span>
        <span className="skill css">
          <img src={cssImage} alt="tech" />
        </span>
        <span className="skill javascript">
          <img src={jsImage} alt="tech" />
        </span>
        <span className="skill sass">
          <img src={sassImage} alt="tech" />
        </span>
        <span className="skill typescript">
          <img src={tsImage} alt="tech" />
        </span>
        <span className="skill react">
          <img src={reactImage} alt="tech" />
        </span>
        <span className="skill redux">
          <img src={reduxImage} alt="tech" />
        </span>
        <span className="skill">
          <img src={webpackImage} alt="tech" />
        </span>
        <span className="skill">
          <img src={gitImage} alt="tech" />
        </span>
        <span className="skill">
          <img src={graphQl} alt="tech" />
        </span>
        <span className="skill">
          <img src={nodeJS} alt="tech" />
        </span>
      </div>
    </div>
  );
};

export default Skills;
