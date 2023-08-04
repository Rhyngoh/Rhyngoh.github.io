import React from 'react';
import './style.scss';
import { useThemeContext } from '../../components/ThemeSwitcher/ThemeSwitcher';
import ScrollToNext from '../../components/ScrollToNext/ScrollToNext';
const AboutPage = (props) => {
  const { theme } = useThemeContext();
  const {
    colorPrimary,
    colorHighlight,
    bgPrimary,
    textPrimary,
  } = theme;

  return (
    <div className="about-page" style={{ backgroundColor: bgPrimary }}>
      <style jsx="true">
        {`
          .highlight {
            background-color: ${colorHighlight};
          }
          ::selection {
            background-color: ${colorHighlight};
          }
        `}
      </style>
      <div className="content-grid">
        <h1 style={{ color: colorPrimary }}>About</h1>
        <div className="about-wrapper">
          <div className="about-content" style={{ color: textPrimary }}>
            <p>
              I love coding and everything <span className="highlight">JavaScript</span>.
            </p>
            <p>
              I constantly seek challenges and excited to learn emerging technologies.
            </p>
            <p>
              I am a <span className="highlight">Fullstack Developer</span> focused on the Front-end with experience building applications using React, MongoDB, Express, and Node.js. I have experience with various technologies such as AWS, Firebase, Google Maps API, Solidity, ASP.NET.
            </p>
            <p>
              Outside of coding, I enjoy <span className="highlight">Board Games</span>, <span className="highlight">Escape Rooms</span>, and <span className="highlight">Baking</span> desserts! 
            </p>
          </div>
        </div>
      </div>
      <ScrollToNext pageSelector=".portfolio-page" />
    </div>
  );
};

export default AboutPage;
