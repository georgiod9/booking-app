import React from "react";
import useFetch from '../hooks/useFetch'
import { useEffect, useState } from 'react'

export function SeachHeader(props) {
    const [darkTheme, setDarkTheme] = useState(true)
    const [appTheme, setAppTheme, searchMode, setSearchMode] = props.functions;


    useEffect(() => {
        if (appTheme === "light") {
            setDarkTheme(false)
        }
        else if (appTheme === "dark") {
            setDarkTheme(true)
        }
    })

    useEffect(() => {
        { data && console.log("data: ", data.banner) }
        {
            data &&
                setResponse(data)
                &&
                console.log("response: ", response.banner)
        }

    })

    const root = "http://localhost:1337"
    const { loading, error, data } = useFetch('http://localhost:1337/homepage')
    const [response, setResponse] = useState(data)


    return (
        <div>
            {searchMode === 'Flight' ?
                <div className='flex-box flex-center flex-wrap align_items-center horizontal paddingT-s gap-s  '>

                    <div className='flex-box horizontal gap-s align_items-center'>

                        <div className='flex-box vertical align-start gap-s '>
                            <p className={`
                          align-text karla-regular font-s paddingL-xs
                          ${darkTheme ? 'font-white' : 'font-gray'}
                          `}>Origin</p>
                            <div className={`button-list flex-box horizontal gap-s align_items-center
                                    ${darkTheme ? 'button-dark' : 'button-light'}
                                    `}>
                                <p className='karla-bold font-list'>Beirut, Lebanon</p>
                                <img className='icon-dropdown' src={root + (response && response.banner.list_departure.icon.url)}></img>
                            </div>
                        </div>

                      
                            <img className='icon-flight ' src={root + (response && response.banner.icon_flight.url)}></img>
                        


                        <div className={`flex-box vertical align-start gap-s`}>

                            <p className={`
                        align-text karla-regular font-s paddingL-xs
                        ${darkTheme ? 'font-white' : 'font-gray'}
                        `}>Destination</p>

                            <div className={`button-list flex-box horizontal gap-s align_items-center
                                  ${darkTheme ? 'button-dark' : 'button-light'}
                                  `}>
                                <p className='karla-bold font-list'>Paris, France</p>
                                <img className='icon-dropdown' src={root + (response && response.banner.list_departure.icon.url)}></img>
                            </div>
                        </div>

                    </div>


                    <div className='line-separator'></div>

                    <div className="flex-box horizontal gap-s align_items-center">
                        <div className='flex-box vertical align-start gap-s '>

                            <p className={`
                        align-text karla-regular font-s paddingL-xs
                        ${darkTheme ? 'font-white' : 'font-gray'}
                        `}>Check in</p>

                            <div className={`button-list flex-box horizontal align_items-center gap-s
                                    ${darkTheme ? 'button-dark' : 'button-light'}
                                    `}>
                                <p className='karla-bold font-list'>3,Mar,2022</p>
                                <img className='icon-dropdown' src={root + (response && response.banner.button_checkout.icon.url)}></img>
                            </div>
                        </div>


                       
                            <img className='icon-date' src={root + (response && response.banner.icon_date.url)}></img>
                        

                        <div className='flex-box vertical align-start gap-s '>

                            <p className={`
                        align-text karla-regular font-s paddingL-xs
                        ${darkTheme ? 'font-white' : 'font-gray'}
                        `}>Check out</p>

                            <div className={`button-list flex-box horizontal gap-s align_items-center
                                    ${darkTheme ? 'button-dark' : 'button-light'}
                                    `}>
                                <p className='karla-bold font-list'>23,Apr,2022</p>
                                <img className='icon-dropdown ' src={root + (response && response.banner.button_checkout.icon.url)}></img>
                            </div>
                        </div>
                    </div>


                </div>
                :
                <div></div>
            }
        </div>
    )

}