import React from "react";
import portfolioItems from "./portfolio-items";
import PortfolioItem from "../../components/PortfolioItem/PortfolioItem";
import ScrollToNext from "../../components/ScrollToNext/ScrollToNext";
import { useThemeContext } from "../../components/ThemeSwitcher/ThemeSwitcher";
import "./style.scss";

const PortfolioPage = (props) => {
  const { theme } = useThemeContext();
  const { colorPrimary, colorAlternate, textAlternate, bgPrimary } = theme;

  return (
    <div className="portfolio-page" style={{ backgroundColor: bgPrimary }}>
      <div className="content-grid">
        <h1 style={{ color: colorPrimary }}>Portfolio</h1>
        <div className="portfolio-wrapper">
          <style jsx="true">
            {`
              .portfolio-item {
                background-color: ${colorPrimary};
                color: ${textAlternate};
              }
              .portfolio-item a {
                color: ${textAlternate};
              }
              .portfolio-item__links a:hover {
                border-bottom: 2px solid ${colorAlternate};
              }
            `}
          </style>
          {portfolioItems.map((item, i) => (
            <PortfolioItem render={item.render} key={i} />
          ))}
        </div>
      </div>
      <ScrollToNext pageSelector=".project-page" />
    </div>
  );
};

export default PortfolioPage;
