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

    <div id="homepage" className='flex-box align-center vertical paddingT-m section-pad'>
      <section >
        <div className='section1-bg'></div>

        <div className='overlap non-selectable'>

          <p className='center_text font-l fontColor-b  paddingT-l margin-top text-nowrap'>{response && response.banner.title}</p>
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

              {searchMode === 'Flight' ?
                <div className='flex-box flex-evenly align_items-end horizontal paddingT-s '>

                  <div className='flex-box vertical align-start gap-s '>

                    <p className={`
                          align-text karla-regular font-s 
                          ${darkTheme ? 'font-white' : 'font-gray'}
                          `}>Origin</p>

                    <div className='button-list flex-box horizontal gap-s'>
                      <p className='karla-bold font-ms'>Beirut, Lebanon</p>
                      <img className='icon-dropdown paddingT-xs' src={root + (response && response.banner.list_departure.icon.url)}></img>
                    </div>
                  </div>

                  <div className='flex-box vertical align_items-center align_content-end '>
                    <img className='icon-s' src={root + (response && response.banner.icon_flight.url)}></img>
                  </div>


                  <div className='flex-box vertical align-start gap-s '>

                    <p className={`
                        align-text karla-regular font-s 
                        ${darkTheme ? 'font-white' : 'font-gray'}
                        `}>Destination</p>

                    <div className='button-list flex-box horizontal gap-s'>
                      <p className='karla-bold font-ms'>Paris, France</p>
                      <img className='icon-dropdown paddingT-xs' src={root + (response && response.banner.list_departure.icon.url)}></img>
                    </div>
                  </div>


                  <div className='line-separator'></div>

                  <div className='flex-box vertical align-start gap-s '>

                    <p className={`
                        align-text karla-regular font-s 
                        ${darkTheme ? 'font-white' : 'font-gray'}
                        `}>Check in</p>

                    <div className='button-list flex-box horizontal gap-s'>
                      <p className='karla-bold font-ms'>3,Mar,2022</p>
                      <img className='icon-dropdown paddingT-xs' src={root + (response && response.banner.button_checkout.icon.url)}></img>
                    </div>
                  </div>


                  <div className='flex-box vertical align_items-center align_content-end  '>
                    <img className='icon-s' src={root + (response && response.banner.icon_date.url)}></img>
                  </div>

                  <div className='flex-box vertical align-start gap-s '>

                    <p className={`
                        align-text karla-regular font-s 
                        ${darkTheme ? 'font-white' : 'font-gray'}
                        `}>Check out</p>

                    <div className='button-list flex-box horizontal gap-s'>
                      <p className='karla-bold font-ms'>23,Apr,2022</p>
                      <img className='icon-dropdown paddingT-xs' src={root + (response && response.banner.button_checkout.icon.url)}></img>
                    </div>
                  </div>



                </div>
                :
                <div></div>
              }



            </div>

            <div className='flex-box horizontal flex-center gap_bottom paddingT-m'>

              <label className='karla-regular font-ms align-vertically'>
                <input className="align-vertically" type="checkbox"></input>Direct flight
              </label>



              <div className={`clickable flex-box horizontal align_items-end button-small button_search karla-bold`}>
                <img className='icon-search paddingR-xs' src={root + (response && response.banner.button_search.icon.url)}></img>
                <p className=''>Search</p>
              </div>

            </div>





          </div>
        </div>

      </section>





    </div>
  )
}
