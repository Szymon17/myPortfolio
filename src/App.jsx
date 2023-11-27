import "./App.css";
import { useState } from "react";
import Navigation from "./components/navigation/navigation";
import Home from "./components/home/home";
import About from "./components/about/about";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import TimeLine from "./components/time-line/time-line";
import Contact from "./components/contact/contact";

function App() {
  const [homeIsRendered, setHomeState] = useState(false);

  const homeRenderedHandler = () => setHomeState(true);

  return (
    <div className="App">
      <Navigation />
      <Home renderedHandler={homeRenderedHandler} />
      {homeIsRendered && (
        <>
          <About />
          <Skills />
          <Projects />
          <TimeLine />
          <Contact />
        </>
      )}
    </div>
  );
}

export default App;
