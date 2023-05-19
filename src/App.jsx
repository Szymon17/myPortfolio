import "./App.css";
import { useContext } from "react";
import { AnimationsContext } from "./context/animations.context";
import AboutMe from "./components/AboutMe/AboutMe.component";
import Header from "./components/Header/Header.component";
import Skills from "./components/Skills/Skills.component";
import Projects from "./components/Projects/Projects.component";
import CvLink from "./components/CvLink/CvLink.component";

function App() {
  const { headerIsRendered, aboutMeIsRendered, skillsIsRendered } = useContext(AnimationsContext);

  return (
    <div className="App">
      <div className="App-container">
        <div className="top">
          <div className="top-left">
            <Header />
            {headerIsRendered && <Skills />}
          </div>
          {headerIsRendered && (
            <div className="top-right">
              <div className="top-image"></div>
            </div>
          )}
        </div>

        {skillsIsRendered && <AboutMe />}
        {aboutMeIsRendered && <Projects />}
      </div>
      <CvLink />
    </div>
  );
}

export default App;
