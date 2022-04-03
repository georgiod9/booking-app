import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { useState } from 'react'
import {globals} from './Global'
import { toggleTheme } from '../App'

import { ThemeContext } from '../App'
import {fetchTheme} from '../utils/fetchTheme'

export var theme;


export default function Header(props) {
  const [darkTheme, setDarkTheme] = useState(false)

  const [appTheme, setAppTheme] = props.functions;

  useEffect(() => {
    
  }, []);

  
  console.log("PROPS: ", props.functions[0])
  console.log("header apptheme: ", appTheme)


  const handleThemeToggle = () => {
    props.setAppTheme("light")
  }

  const themeStyles = {
    backgroundColor: darkTheme ? '#333'  :  '#CCC',
    color: darkTheme ? '#CCC'  :  '#333',
    padding: '2rem',
    margin: '2rem'
  }

  console.log("HEADER darkTheme: ", darkTheme)
  //var light_mode = true;
  var [light_mode, setMode] = useState(true);
  
  
  var theme_button;
  const root = "http://localhost:1337"
  const { loading, error, data } = useFetch('http://localhost:1337/homepage')
 
  if (loading) return <p></p>
  if (error) return <p>Error...</p>

  var light_icon = root + data.header.icon_theme[1].url;
  var dark_icon = root + data.header.icon_theme[0].url;


  if (light_mode) {
    theme_button = root + data.header.icon_theme[0].url;

  } 

  function toggleTheme() {

    (appTheme === "light" ? setAppTheme("dark") : setAppTheme("light"))
    if (appTheme === "light") {
        setMode(false)
        setDarkTheme(true)
    }
    else if (appTheme === "dark") {
        setMode(true);
        setDarkTheme(false)
    }
    console.log("Light Mode: ", light_mode)

  }

  
  return (
    <div >
      <header className='site-header flex-box flex-direction spacing'>
        <div className='center_div'>
          <Link className='no-under-line paddingR-s' to="/">
            <img src={
              light_mode
              ? root + data.header.logo[0].url
              : root + data.header.logo[1].url
            }
            />
          </Link>
        </div>

        <div className='flex-box flex-direction center gap-sm wrapping'>
          <div className='center_div clickable'>
            <img
              className='center_noresize'
              onClick={toggleTheme}
              
              src= {
                light_mode 
                ? dark_icon 
                : light_icon
              }     
              />
                    
          </div>
          <div className='button button-light'>
            <p>{data.header.button_booking}</p>
          </div>
          <div className='button button-light'>
            <p>{data.header.button_about}</p>
          </div>
          <div className='button button-connect'>
            <p>{data.header.button_connect}</p>
          </div>
        </div>

      </header>
    

    </div>

  )
}


