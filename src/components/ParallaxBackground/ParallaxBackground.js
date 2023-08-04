import React from 'react';
import { useThemeContext } from '../ThemeSwitcher/ThemeSwitcher';
import './style.scss';

const ParallaxBackground = (props) => {
  const { theme } = useThemeContext();
  const { colorPrimary } = theme;

  return (
    <div className="parallax" style={{ color: colorPrimary }}>
      <div id="stars1" />
      <div id="stars2" />
      <div id="stars3" />
    </div>
  );
};

export default ParallaxBackground;
