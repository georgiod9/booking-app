import { BrowserRouter as Router, renderMatches, Route, Routes } from 'react-router-dom'
import React from 'react';
import Homepage from './pages/Homepage';
import Header from './components/Header';
import { useEffect, useState } from 'react'
import styled from "styled-components";

export const ThemeContext = React.createContext()

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

function App() {
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

  const themeStyles = {
    backgroundColor: darkTheme ? '#1B1F2E' : 'white',
    color: darkTheme ?  '#CCC'  : '#333',
  }
  

  //adaptive resolution
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
