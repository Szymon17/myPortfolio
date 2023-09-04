import Project from "../project/project";
import PROJECTS_DATA from "./PROJECTS_DATA.json";
import "./projects.css";

const Projects = () => {
  const { projects } = PROJECTS_DATA;

  return (
    <section className="projects shadow">
      <h2 className="projects__title">Projekty</h2>
      <ul className="projects__list">
        {projects.map((data, index) => (
          <li key={index}>
            <Project data={data} index={index} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;