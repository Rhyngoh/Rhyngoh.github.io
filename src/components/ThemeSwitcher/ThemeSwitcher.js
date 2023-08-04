import React, { useState, useEffect, createContext, useContext } from "react";
import { getThemes } from "./themes";

// class ThemeSwitcher extends Component {
export const ThemeContext = createContext({});
export const useThemeContext = () => useContext(ThemeContext);

export const ThemeContextProvider = (props) => {
  const { children } = props;
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const allThemes = getThemes();
    const firstTimeThemes = allThemes.filter(
      (filteredTheme) => filteredTheme.firstTime === true
    );
    setTheme(
      firstTimeThemes[Math.floor(Math.random() * firstTimeThemes.length)]
    );
  }, []);

  const getRandomTheme = () => {
    // const currentTheme = theme;
    const allThemes = getThemes();
    const themesWithoutCurrentTheme = allThemes.filter(
      (filteredTheme) => filteredTheme.name !== theme.name
    );
    const randomThemeIndex = Math.floor(
      Math.random() * themesWithoutCurrentTheme.length
    );
    return themesWithoutCurrentTheme[randomThemeIndex];
  };

  const switchTheme = () => {
    const randomTheme = getRandomTheme();
    setTheme(randomTheme);
  };
  if (!theme) return null;
  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      <div className="theme-switcher">
        <style jsx="true">
          {`
            body {
              background-color: ${theme.bgPrimary};
              body,
              h1,
              h2,
              h3,
              h4,
              h5,
              h6,
              p,
              ol,
              ul {
                color: ${theme.textPrimary};
              }
            }
          `}
        </style>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
