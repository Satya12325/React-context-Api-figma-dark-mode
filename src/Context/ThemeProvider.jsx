import React, { useState, createContext } from "react";

export const ThemeContext = createContext();

const themes = {
  dark: {
    color: "white",
    backgroundColor: "black",
  },
  light: {
    color: "black",
    backgroundColor: "white",
  },
};

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const themeData = themes;

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const value = [{ theme, themeData }, toggleTheme];

  return (
    <ThemeContext.Provider value={value}>
        {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
