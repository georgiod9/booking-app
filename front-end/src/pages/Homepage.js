import React from 'react'
import useFetch from '../hooks/useFetch'

import { useEffect, useState } from 'react'

export default function Homepage(props) {
  const [darkTheme, setDarkTheme] = useState(true)
  const [appTheme, setAppTheme] = props.functions;


  useEffect(() => {
    if (appTheme === "light") {
      setDarkTheme(false)
    }
    else if (appTheme === "dark") {
      setDarkTheme(true)
    }
  })


  const root = "http://localhost:1337"
  const { loading, error, data } = useFetch('http://localhost:1337/homepage')
  const [response, setResponse] = useState(data)
  const [searchMode, setSearchMode] = useState('Flight')

  useEffect(() => {
    { data && console.log("data: ", data.banner) }
    {
      data &&
      setResponse(data)
      &&
      console.log("response: ", response.banner)
    }

  })

  function handleFlightClick(value) {
    if (searchMode === 'Flight' && value == "Hotel") {
      setSearchMode('Hotel')
      console.log("Hotel Search Mode")
    }
    else if (searchMode === 'Hotel' && value == "Flight") {
      setSearchMode('Flight')
      console.log("Flight Search Mode")
    }
  }



  return (

    <div id="homepage" className='flex-box vertical paddingT-m section-pad'>
      <section >
        <div className='section1-bg'></div>

        <div className='overlap'>

          <p className='center_text font-l fontColor-b  paddingT-l margin-top text-nowrap'>{response && response.banner.title}</p>
          <p className='center_text font-m fontColor-b-opaque no-margin'>{response && response.banner.description}</p>

          <div className={`search_header box-l ${darkTheme ? "search_header-colorD" : "search_header-colorL"}`}>

            
            <div className='flex-box gap-s padding-toggle_buttons'>
              <div  onClick={() => handleFlightClick("Flight")} className=
              {
                `button-small clickable 
                ${searchMode === 'Flight' 
                ?`${darkTheme ?'glow-solid-D': 'glow-solid-L' }` 
                :`${darkTheme ? 'glow-D' : 'glow-L'}`}

                ${darkTheme ? 'button_border-D' : 'button_border-L'}
                `
                }>
                <img className='icon-s' src={root + (response && response.banner.button_flight.icon.url)}></img>
                <p >{response && response.banner.button_flight.title}</p>
              </div>

              <div onClick={() => handleFlightClick("Hotel")} className=
              {
                `button-small clickable 
                ${searchMode === 'Hotel' 
                ? `${darkTheme ?'glow-solid-D': 'glow-solid-L' }` 
                : `${darkTheme ? 'glow-D' : 'glow-L'}`}
                
                ${darkTheme ? 'button_border-D' : 'button_border-L'}
                `
                }>
                <img className='icon-hotel-s' src={root + (response && response.banner.button_hotel.icon.url)}></img>
                <p >{response && response.banner.button_hotel.title}</p>
              </div>
            </div>


            <div className={`search_sub box-m ${darkTheme ? "search_sub-colorD" : "search_sub-colorL"}`}></div>
          </div>
        </div>

      </section>





    </div>
  )
}
