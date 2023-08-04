import React, { useState, useEffect, useMemo } from "react";
import { toTop as scrollToPageTop } from "../../utils/scroll";
import "./style.scss";
import { useThemeContext } from "../ThemeSwitcher/ThemeSwitcher";
import { FiChevronsUp } from "react-icons/fi";
const ScrollTop = (props) => {
  const [shouldShowScrollTopArrow, setShouldShowScrollTopArrow] =
    useState(false);
  const { theme } = useThemeContext();
  const { colorPrimary } = theme;
  const hideArrowClass = useMemo(
    () => (shouldShowScrollTopArrow ? "" : "hide"),
    [shouldShowScrollTopArrow]
  );
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);
  const handleScroll = () => {
    const boundingRect = ((document || {}).documentElement || {})
      .getBoundingClientRect;
    if (boundingRect) {
      if (document.documentElement.getBoundingClientRect().top * -1 > 100)
        setShouldShowScrollTopArrow(true);
      else setShouldShowScrollTopArrow(false);
    }
  };
  return (
    <div className="scroll-top" onClick={scrollToPageTop}>
      <div
        className={`arrow ${hideArrowClass}`}
        style={{ color: colorPrimary }}
      >
        <FiChevronsUp size={'2rem'} href={"#"}/>
        <div className="to-top">To Top</div>
      </div>
    </div>
  );
};

export default ScrollTop;
