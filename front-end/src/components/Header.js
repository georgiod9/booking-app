import React from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { useState } from 'react'
import {globals} from './Global'
export var theme;


export default function Header() {
 
  

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


  function  toggleTheme() {
    console.log("Light Mode: ", light_mode);
    console.log("ENV: ", process.env.REACT_APP_THEME)

    if (light_mode) {
      theme_button = root + data.header.icon_theme[1].url;
      console.log("light mode on");
      theme = true;
      setMode(false)
      this.theme = "light"

    } 
    else {
      theme_button = root + data.header.icon_theme[0].url;
      console.log("dark mode on");
      theme = false;
      setMode(true)
      this.theme = "dark"
     
    } 
    
  }
  
  return (
    <div>
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


