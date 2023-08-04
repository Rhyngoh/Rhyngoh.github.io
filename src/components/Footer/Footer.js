import React from "react";
import "./style.scss";
import { useThemeContext } from "../ThemeSwitcher/ThemeSwitcher";
const Footer = (props) => {
  const { theme } = useThemeContext();
  const { colorPrimary, textPrimary } = theme;
  return (
    <footer>
      <div className="content-grid">
        <div style={{ color: textPrimary }}>
          Made by{" "}
          <a
            href="https://github.com/rhyngoh"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: colorPrimary }}
          >
            Ryan Ngoh 2023
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
