import { createContext, useState } from "react";

export const AnimationsContext = createContext({
  headerIsRendered: false,
  setHeaderIsRendered: () => null,
  aboutMeIsRendered: false,
  setAboutMeIsRendered: () => null,
  projectsAreRendered: false,
  setProjectsAreRendered: () => null,
  skillsIsRendered: false,
  setSkillsIsRendered: () => null,
});

export const AnimationsProvider = ({ children }) => {
  const [headerIsRendered, setHeaderIsRendered] = useState(false);
  const [aboutMeIsRendered, setAboutMeIsRendered] = useState(false);
  const [projectsAreRendered, setProjectsAreRendered] = useState(false);
  const [skillsIsRendered, setSkillsIsRendered] = useState(false);

  const value = {
    headerIsRendered,
    setHeaderIsRendered,
    aboutMeIsRendered,
    setAboutMeIsRendered,
    skillsIsRendered,
    setSkillsIsRendered,
    projectsAreRendered,
    setProjectsAreRendered,
  };

  return <AnimationsContext.Provider value={value}>{children}</AnimationsContext.Provider>;
};
