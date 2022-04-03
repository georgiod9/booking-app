import { BrowserRouter as Router, renderMatches, Route, Routes } from 'react-router-dom'
import React from 'react';
import Homepage from './pages/Homepage';
import Header from './components/Header';

import { useEffect, useState } from 'react'
import { theme } from './components/Header'

import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./Themes.js"

import { useContext } from 'react';



import { useDarkMode } from './useDarkMode';
import Toggle from './Toggle'

export const ThemeContext = React.createContext()

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

function App() {
  console.log("*************************")
  const [darkTheme, setDarkTheme] = React.useState(true)
  const [appTheme, setAppTheme] = useState('light');

  //control theme mode
  useEffect(() => {
    if (appTheme === "light") {
      setDarkTheme(false)
    }
    else if (appTheme === "dark") {
      setDarkTheme(true)
    }
  })


  console.log("APPjs Theme: ", appTheme)
  console.log("APPjs darkTheme: ", darkTheme)

  const themeStyles = {
    backgroundColor: darkTheme ? '#333' : '#CCC',
    color: darkTheme ?  '#CCC'  : '#333',
    padding: '2rem',
    margin: '2rem'
  }
  



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
    <div className="App" style={themeStyles} >
      <Router>
     
          <Header functions={[appTheme, setAppTheme]}/>

          <Routes>
            <Route exact path="/" element={<Homepage functions={[appTheme, setAppTheme]}/>} />
          </Routes>

   

      </Router>
      </div>




  );
}

export default App;
