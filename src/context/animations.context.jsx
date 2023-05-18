import { createContext, useState } from "react";

export const AnimationsContext = createContext({
  headerIsRendered: false,
  setHeaderIsRendered: () => null,
  aboutMeIsRendered: false,
  setAboutMeIsRendered: () => null,
  projectsIsRendered: false,
  setProjectsIsRendered: () => null,
  skillsIsRendered: false,
  setSkillsIsRendered: () => null,
});

export const AnimationsProvider = ({ children }) => {
  const [headerIsRendered, setHeaderIsRendered] = useState(false);
  const [aboutMeIsRendered, setAboutMeIsRendered] = useState(false);
  const [projectsIsRendered, setProjectsIsRendered] = useState(false);
  const [skillsIsRendered, setSkillsIsRendered] = useState(false);

  const value = {
    headerIsRendered,
    setHeaderIsRendered,
    aboutMeIsRendered,
    setAboutMeIsRendered,
    skillsIsRendered,
    setSkillsIsRendered,
    projectsIsRendered,
    setProjectsIsRendered,
  };

  return <AnimationsContext.Provider value={value}>{children}</AnimationsContext.Provider>;
};
