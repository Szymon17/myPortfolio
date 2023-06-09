import "./Skills.styles.css";

const Skills = () => {
  return (
    <div className="skills">
      <div className="section-title">Umiejętności</div>
      <div className="skills-container">
        <span className="skill html">HTML</span>
        <span className="skill css">CSS</span>
        <span className="skill sass">SASS</span>
        <span className="skill javascript">JS</span>
        <span className="skill typescript">TS</span>
        <span className="skill react">React</span>
        <span className="skill redux">Redux</span>
        <span className="skill">Git</span>
        <span className="skill">Webpack</span>
      </div>
    </div>
  );
};

export default Skills;
