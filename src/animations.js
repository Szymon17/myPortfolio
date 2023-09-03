import { createContext, useState } from "react";

const initialAnimationsState = {
  emoji: {
    animation: { rotate: [0, 20, -10, 20, -10, 0], transition: { repeat: Infinity, duration: 0.7, repeatDelay: 10 } },
    end: false,
  },

  text: {
    animation: { opacity: [0, 1], transition: { duration: 1 } },
    end: false,
  },

  name: {
    animation: { opacity: [0, 0, 1], y: [-300, 0], transition: { duration: 0.5 } },
    end: false,
  },
};

export const AnimationsContext = createContext({
  animations: initialAnimationsState,
  setAnimations: () => null,
});

export const AnimationsProvider = ({ children }) => {
  const [animations, setAnimations] = useState(initialAnimationsState);

  const completeAnimation = animationName => {
    const newAnimationsState = { ...animations };
    newAnimationsState[animationName].end = true;

    setAnimations(newAnimationsState);
  };

  return <AnimationsContext.Provider value={{ animations, completeAnimation }}>{children}</AnimationsContext.Provider>;
};
