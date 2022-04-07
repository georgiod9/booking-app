import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { useState } from 'react'


export default function Header(props) {
  const [darkTheme, setDarkTheme] = useState(false)
  const [appTheme, setAppTheme] = props.functions;
  const [appState, setAppState] = useState('booking')

  var [light_mode, setMode] = useState(true);

  const root = "http://localhost:1337"
  const { loading, error, data } = useFetch('http://localhost:1337/homepage')

  if (loading) return <p></p>
  if (error) return <p>Error...</p>

  //set dark/light icons
  var light_icon = root + data.header.icon_theme[1].url;
  var dark_icon = root + data.header.icon_theme[0].url;



  //toggle theme when theme button is pressed
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

  function bookingHandler() {
    setAppState("booking")
  }

  function aboutHandler() {
    setAppState("about")
  }

  function nftsHandler() {
    setAppState("nfts")
  }

  function connectHandler() {
    setAppState("connect")
  }


  return (

    <header className={` ${darkTheme ? 'header_gradient-D' : 'header_gradient-L'} non-selectable site-header flex-box flex-direction spacing wrap `}>

      <Link
        onClick={bookingHandler}
        className='no-under-line paddingR-s ' to="/">
        <img src={
          light_mode
            ? root + data.header.logo[0].url
            : root + data.header.logo[1].url
        }
        />
      </Link>


      <div className='flex-box flex-direction  align_items-center center-vertically  gap-sm wrapping nowrap center_items '>
        <div className='center_div clickable'>
          <img
            className='center_image glow'
            onClick={toggleTheme}

            src={
              light_mode
                ? dark_icon
                : light_icon
            }
          />

        </div>
        <div onClick={bookingHandler} className={`button-header button-light karla-bold
                          ${appState === 'booking'
            ? `${darkTheme ? 'glow-solid-D' : 'glow-solid-L'}`
            : `${darkTheme ? 'glow-D' : 'glow-L'}`}
                          
                          `}>
          <p className=''>{data.header.button_booking}</p>
        </div>
        <div onClick={aboutHandler} className={`button-header button-light  karla-bold 
                           ${appState === 'about'
            ? `${darkTheme ? 'glow-solid-D' : 'glow-solid-L'}`
            : `${darkTheme ? 'glow-D' : 'glow-L'}`}
                           
                           `}>
          <p>{data.header.button_about}</p>
        </div>
        <div onClick={nftsHandler} className={`button-header button-light  karla-bold 
                          ${appState === 'nfts'
            ? `${darkTheme ? 'glow-solid-D' : 'glow-solid-L'}`
            : `${darkTheme ? 'glow-D' : 'glow-L'}`}
                          `}>
          <p>{data.header.button_nfts}</p>
        </div>
        <div onClick={connectHandler} className={`button-header button-connect karla-regular
                          `}>
          <p>{data.header.button_connect}</p>
        </div>
      </div>

    </header>




  )
}


