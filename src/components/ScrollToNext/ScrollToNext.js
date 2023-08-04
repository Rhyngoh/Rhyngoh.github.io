import React from "react";
import { toElement as scrollToElement } from "./../../utils/scroll";

import "./style.scss";
import { useThemeContext } from "../ThemeSwitcher/ThemeSwitcher";
import { FiChevronDown } from "react-icons/fi";

const ScrollToNext = (props) => {
  const { pageSelector } = props;
  const { theme } = useThemeContext();
  const { colorPrimary } = theme;
  const scrollToNext = () => {
    const nextPage = document.querySelector(pageSelector);
    scrollToElement(nextPage);
  };
  return (
    <div className="scroll-to-next" onClick={scrollToNext}>
      <div className="arrow bounce" style={{ color: colorPrimary }}>
        <div className="scroll-text">Click Me</div>
        <FiChevronDown size={"2rem"} href={"#"} />
      </div>
    </div>
  );
};

export default ScrollToNext;
