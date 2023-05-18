import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AnimationsProvider } from "./context/animations.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AnimationsProvider>
      <App />
    </AnimationsProvider>
  </React.StrictMode>
);

reportWebVitals();
