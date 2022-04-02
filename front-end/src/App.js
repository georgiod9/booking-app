import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from 'react';
import Homepage from './pages/Homepage';
import Header from './components/Header';

import { useEffect, useState } from 'react'
import { theme } from './components/Header'

import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./Themes.js"

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

function App() {

  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };


  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth
  })
  React.useEffect(() => {
    function handleResize() {
      console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })

    }

    window.addEventListener('resize', handleResize)
    return _ => {
      window.removeEventListener('resize', handleResize)

    }
  })

  return (
    <ThemeProvider theme={  theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <Router>
          <div className="App"
             >
            <Header />
            <Routes>
              <Route exact path="/" element={<Homepage />} />
            </Routes>

          </div>
        </Router>
      </StyledApp>
    </ThemeProvider>

  );
}

export default App;
