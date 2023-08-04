import React from "react";
import { toElement as scrollToElement } from "../../utils/scroll";
import "./style.scss";
import { useThemeContext } from "../ThemeSwitcher/ThemeSwitcher";
import { FiChevronUp } from "react-icons/fi";

const ScrollToPrevious = ({ pageSelector }) => {
  const { theme } = useThemeContext();
  const { colorPrimary } = theme;
  const scrollToPrevious = () => {
    const nextPage = document.querySelector(pageSelector);
    scrollToElement(nextPage);
  };
  return (
    <div className="scroll-to-previous" onClick={scrollToPrevious}>
      <div className="arrow bounce" style={{ color: colorPrimary }}>
        <FiChevronUp size={"2rem"} href={"#"} />
        <div className="scroll-text">Click Me</div>
      </div>
    </div>
  );
};

export default ScrollToPrevious;
