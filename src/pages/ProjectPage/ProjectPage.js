import React from "react";
import ProjectItem from "./../../components/PortfolioItem/PortfolioItem";
import ScrollToPrevious from "./../../components/ScrollToPrevious";
import projectItems from "./project-items";
import { useThemeContext } from "../../components/ThemeSwitcher/ThemeSwitcher";
import "./style.scss";

const ProjectPage = (props) => {
  const { theme } = useThemeContext();
  const { colorPrimary, colorAlternate, textAlternate, bgPrimary } = theme;

  return (
    <div className="project-page" style={{ backgroundColor: bgPrimary }}>
      <div className="content-grid">
        <h1 style={{ color: colorPrimary }}>UT Coding Bootcamp Projects</h1>
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
          {projectItems.map((item, i) => (
            <ProjectItem render={item.render} key={i} />
          ))}
        </div>
      </div>
      <ScrollToPrevious pageSelector=".portfolio-page" />
    </div>
  );
};

export default ProjectPage;
