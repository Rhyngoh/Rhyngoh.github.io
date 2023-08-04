import React from "react";
// import LandingPage from '@pages/LandingPage';
// import AboutPage from '@pages/AboutPage';
// import PortfolioPage from '@pages/PortfolioPage';
// import ProjectPage from '@pages/ProjectPage';
// import ParallaxBackground from '@components/ParallaxBackground';
// import ScrollTop from '@components/ScrollTop';
// import Browser from '@components/Browser';
// import Footer from '@components/Footer';
import { ThemeContextProvider } from "./components/ThemeSwitcher/ThemeSwitcher";
import AboutPage from "./pages/AboutPage/AboutPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import Browser from "./components/Browser/Browser";
import ParallaxBackground from "./components/ParallaxBackground/ParallaxBackground";
import PortfolioPage from "./pages/PortfolioPage/PortfolioPage";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import ScrollTop from "./components/ScrollTop/ScrollTop";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="dev-landing-page">
      <ThemeContextProvider>
        <Browser except firefox>
          <ParallaxBackground />
        </Browser>
        <LandingPage />
        <AboutPage />
        <PortfolioPage />
        <ProjectPage />
        <ScrollTop />
        <Footer />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
