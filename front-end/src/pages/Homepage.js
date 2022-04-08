import React from 'react'
import useFetch from '../hooks/useFetch'

import { useEffect, useState } from 'react'
import { SeachHeader } from './SearchHeader';

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

    <div id="homepage" className='flex-box align-center vertical paddingT-m section-pad'>
      <section >
        <div className='section1-bg'></div>

        <div className='overlap non-selectable'>

          <p className='center_text font-l fontColor-b  margin-top text-nowrap'>{response && response.banner.title}</p>
          <p className='center_text font-m fontColor-b-opaque no-margin'>{response && response.banner.description}</p>

          <div className={`search_header box-l ${darkTheme ? "search_header-colorD" : "search_header-colorL"}`}>

            <div className='flex-box align-center gap-s padding-toggle_buttons'>
              <div onClick={() => handleFlightClick("Flight")} className=
                {
                  `button-small clickable 
                ${searchMode === 'Flight'
                    ? `${darkTheme ? 'glow-solid-D' : 'glow-solid-L'}`
                    : `${darkTheme ? 'glow-D' : 'glow-L'}`}

                ${darkTheme ? 'button_border-D' : 'button_border-L'}
                `
                }>
                <img className='icon-flight-s' src={root + (response && response.banner.button_flight.icon.url)}></img>
                <p >{response && response.banner.button_flight.title}</p>
              </div>

              <div onClick={() => handleFlightClick("Hotel")} className=
                {
                  `button-small clickable 
                ${searchMode === 'Hotel'
                    ? `${darkTheme ? 'glow-solid-D' : 'glow-solid-L'}`
                    : `${darkTheme ? 'glow-D' : 'glow-L'}`}

                ${darkTheme ? 'button_border-D' : 'button_border-L'}
                `
                }>
                <img className='icon-hotel-s' src={root + (response && response.banner.button_hotel.icon.url)}></img>
                <p >{response && response.banner.button_hotel.title}</p>
              </div>
            </div>


            <div className={`search_sub box-m text-nowrap
                    ${darkTheme ? "search_sub-colorD" : "search_sub-colorL"}
                    `}>

              <SeachHeader functions={[appTheme, setAppTheme, searchMode, setSearchMode]} />

            </div>

            <div className='flex-box horizontal flex-center gap_bottom paddingT-m bottom_box marginL-3'>

              <label className='karla-regular font-ms align-vertically radio_box'>
                <input className="align-vertically" type="checkbox"></input>Direct flight
              </label>



              <div className={`clickable flex-box horizontal align_items-end button-medium button_search karla-bold`}>
                <img className='icon-search paddingR-xs' src={root + (response && response.banner.button_search.icon.url)}></img>
                <p className=''>Search</p>
              </div>

            </div>

          </div>
        </div>
      </section>


      <section>
        <div className='flex-box vertical flex-center gap-ms text-center align-center box-about paddingT-l'>
          <p className='roboto-medium font-m'>About Us</p>
          <p className='karla-regular font-ms'>{response && response.about.description1}</p>
          <p className='karla-regular font-ms paddingT-s'>{response && response.about.description2}</p>
        </div>
        <div className='flex-box horizontal flex-center paddingT-m gap-m'>
          <img src={root + (response && response.about.icon1.formats.thumbnail.url)}></img>
          <img src={root + (response && response.about.icon2.formats.thumbnail.url)}></img>
          <img src={root + (response && response.about.icon3.formats.thumbnail.url)}></img>
        </div>
      </section>



    </div>
  )
}
