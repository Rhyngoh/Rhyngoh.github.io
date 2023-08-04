import React from "react";
import "./style.scss";
import { useThemeContext } from "../ThemeSwitcher/ThemeSwitcher";
const PortfolioItem = (props) => {
  const { theme } = useThemeContext();
  const { colorPrimary, textAlternate } = theme;

  if (props.render) return props.render;
  return (
    <div
      className="portfolio-item"
      style={{ backgroundColor: colorPrimary, color: textAlternate }}
    >
      <div className="portfolio-item__title">Ryan Ngoh</div>

      <div className="portfolio-item__desc">
        Coding with a touch of board games and baking.
      </div>
      <div className="portfolio-item__icon">
        <i className="fab fa-js" />
        <i className="fab fa-react" />
        <i className="fab fa-html5" />
      </div>
      <div className="portfolio-item__links">
        <a href="#">Code</a>
        <a href="#">Blog</a>
      </div>
    </div>
  );
};

export default PortfolioItem;
