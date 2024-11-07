// src/ThemeContext.js
import React, { createContext, useState, useContext } from 'react';
import { ThemeProvider as StyledThemeProvider, createGlobalStyle } from 'styled-components';

const ThemeContext = createContext();

const lightTheme = {
  background: '#ffffff',
  text: '#333333',
  sidebarBg: '#f7f7f8',
  primary: '#6c63ff',
};

const darkTheme = {
  background: '#333333',
  text: '#f7f7f8',
  sidebarBg: '#444444',
  primary: '#6c63ff',
};

// Global styles based on theme
const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    font-family: 'Space Grotesk', sans-serif;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
`;

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <StyledThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
