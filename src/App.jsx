import "./App.css";
import { useContext } from "react";
import { AnimationsContext } from "./context/animations.context";
import AboutMe from "./components/AboutMe/AboutMe.component";
import Header from "./components/Header/Header.component";
import Projects from "./components/Projects/Projects.component";
import CvLink from "./components/CvLink/CvLink.component";
import ContactMe from "./components/ContactMe/ContactMe.component";
import TopPanel from "./components/TopPanel/TopPanel.component";

function App() {
  const { headerIsRendered, aboutMeIsRendered, topPanelIsRendered, projectsAreRendered } = useContext(AnimationsContext);

  return (
    <div className="App">
      <div className="App-container">
        <Header />
        {headerIsRendered && <TopPanel />}
        {topPanelIsRendered && <AboutMe />}
        {aboutMeIsRendered && <Projects />}
        {projectsAreRendered && <ContactMe />}
      </div>
      <CvLink />
    </div>
  );
}

export default App;
