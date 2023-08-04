import React from "react";

import "./style.scss";
import { useThemeContext } from "../ThemeSwitcher/ThemeSwitcher";

const SocialIcons = (props, context) => {
  const { theme } = useThemeContext();
  console.log(theme);
  const { colorPrimary } = theme;
  // const {
  //   theme: { colorPrimary },
  // } = context;

  return (
    <div className="social-icons animate-icons">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/Rhyngoh/"
        style={{ color: colorPrimary }}
      >
        <i className="fab fa-github"></i>
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/ryan_ngoh"
        style={{ color: colorPrimary }}
      >
        <i className="fab fa-twitter"></i>
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/ryan-ngoh/"
        style={{ color: colorPrimary }}
      >
        <i className="fab fa-linkedin"></i>
      </a>
    </div>
  );
};

export default SocialIcons;
