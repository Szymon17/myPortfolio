import "./App.css";
import { useContext } from "react";
import { AnimationsContext } from "./context/animations.context";
import AboutMe from "./components/AboutMe/AboutMe.component";
import Header from "./components/Header/Header.component";
import Skills from "./components/Skills/Skills.component";
import Projects from "./components/Projects/Projects.component";

function App() {
  const { headerIsRendered, aboutMeIsRendered, skillsIsRendered } = useContext(AnimationsContext);
  //spróbować ułożyć to gridem a jak nie to absolute na header
  return (
    <div className="App">
      <div className="App-container">
        <Header />
        {headerIsRendered && (
          <div className="top">
            <div className="top-left">
              <Skills />
            </div>
            <div className="top-right">
              <div className="top-image"></div>
            </div>
          </div>
        )}
        {skillsIsRendered && <AboutMe />}
        {aboutMeIsRendered && <Projects />}
      </div>
    </div>
  );
}

export default App;
