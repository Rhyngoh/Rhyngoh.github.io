import React from 'react';
// import SocialIcons from '@components/SocialIcons';
// import Nav from '@components/Nav';
// import ScrollToNext from '@components/ScrollToNext';
// import BrowserNotes from '@components/BrowserNotes';
import SocialIcons from '../../components/SocialIcons/SocialIcons';
import Nav from '../../components/Nav/Nav';
import ScrollToNext from '../../components/ScrollToNext/ScrollToNext';
import BrowserNotes from '../../components/BrowserNotes/BrowserNotes';

import './style.scss';
import { useThemeContext } from '../../components/ThemeSwitcher/ThemeSwitcher';

const LandingPage = (props) => {
  const { theme } = useThemeContext();
  const { colorPrimary, bgPrimary } = theme;

  return (
    <div style={{ backgroundColor: bgPrimary }} className="landing-page">
      <Nav />
      <main style={{ color: colorPrimary }}>
        <BrowserNotes />
        <div className="intro-wrapper">
          <div className="intro-name">Hello, I'm Ryan!</div>
          <div className="tagline">
            Full Stack Dev | Creator | Board gamer | Baker
          </div>
          <SocialIcons />
        </div>
      </main>
      <ScrollToNext pageSelector=".about-page" />
    </div>
  );
};

export default LandingPage;
