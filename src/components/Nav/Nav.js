import React, { useState, useEffect, useRef, useMemo } from "react";
import { toElement as scrollToElement } from "../../utils/scroll";
import rhino from "./../../images/rhino.png";
import "./style.scss";
import { useThemeContext } from "../ThemeSwitcher/ThemeSwitcher";

const Nav = (props) => {
  const { theme, switchTheme } = useThemeContext();
  const { navAlpha, colorPrimary, bgPrimary } = theme;
  const [isSticky, setSticky] = useState(false);
  const nav = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);
  const handleScroll = () => {
    if (window.scrollY > nav?.current?.offsetTop) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  const scrollToPage = (pageSelector) => {
    const nextPage = document.querySelector(pageSelector);
    scrollToElement(nextPage);
  };
  const stickyClass = useMemo(() => {
    return isSticky ? "sticky" : "";
  }, [isSticky]);
  const stickyStyles = useMemo(() => {
    return isSticky
      ? { backgroundColor: navAlpha, color: colorPrimary }
      : { backgroundColor: bgPrimary, color: colorPrimary };
  }, [isSticky, theme]);

  return (
    <nav className={stickyClass} ref={nav} style={stickyStyles}>
      <div className="magic-wand bounce-xy" onClick={switchTheme}>
        <img src={rhino} alt="rhino icon" />
        <div className="magic-text">Color Me</div>
      </div>
      <style jsx="true">
        {`
          .menu__item:hover {
            border-bottom: 2px solid ${colorPrimary};
          }
        `}
      </style>
      <div className="menu">
        <div
          className="menu__item active"
          onClick={(e) => scrollToPage(".about-page")}
        >
          About
        </div>
        <div
          className="menu__item"
          onClick={(e) => scrollToPage(".portfolio-page")}
        >
          Portfolio
        </div>
        <div
          className="menu__item"
          onClick={(e) => scrollToPage(".project-page")}
        >
          Projects
        </div>
      </div>
    </nav>
  );
};

export default Nav;
