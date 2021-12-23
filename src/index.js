import React from "react";
import ReactDOM from "react-dom";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "./index.css";
import App from "./App";
import { ThemeSwitcherProvider } from "react-css-theme-switcher";

const themes = {
  light: "/light.css",
  dark: "/dark.css",
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeSwitcherProvider defaultTheme="light" themeMap={themes}>
      <App />
    </ThemeSwitcherProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
