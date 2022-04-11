import React from "react";
import useFetch from '../hooks/useFetch'
import { useEffect, useState } from 'react'

export function SpecialOffers(props) {
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
        <div className={`flex-box vertical flex-center align_items-center paddingT-m margins-section non-selectable
                        ${darkTheme ? 'offers_bg-D' : 'offers_bg-L'} `}>
            <p className='roboto-regular font-title'>Special Offers</p>

            <div className={`center_text paddingT-s paddingB-m
                            ${darkTheme ? 'offers_bg-D' : 'offers_bg-L'}
                            `}>
                <h4 className={`display-inline paddingR-s
                                ${darkTheme ? 'font-white' : 'font-gray'}
                                `}>Flights From</h4>
                <div className={`display-inline button-list 
                                 ${darkTheme ? 'button-dark' : 'button-light'}
                                `}>
                    <h3 className='display-inline blue'>Lebanon</h3>
                    <img className='display-inline paddingL-xs' src={root + (response && response.special_offers.button_location.icon.url)}></img>
                </div>

                <div className=" flex-box horizontal flex-center align_items-center paddingT-m paddingB-m">
                    <img className="marginR-1 clickable glow"
                        src={root + (response && (
                            darkTheme
                                ? response.special_offers.button_left[0].url
                                : response.special_offers.button_left[1].url))}></img>

                    <div className={`card-offers display-inline
                                    ${darkTheme ? 'card_offers_border-D' : 'card_offers_border-L'}
                                    `}>
                        <div className="display-block">

                        </div>
                    </div>

                    <div className={`card-offers display-inline marginL-2
                                     ${darkTheme ? 'card_offers_border-D' : 'card_offers_border-L'}
                                    `}>
                        <div className="display-block">

                        </div>
                    </div>

                    <div className={`card-offers display-inline marginL-2
                                     ${darkTheme ? 'card_offers_border-D' : 'card_offers_border-L'}
                                    `}>
                        <div className="display-block">

                        </div>
                    </div>

                    <img className="marginL-1 clickable glow"
                        src={root + (response && (
                            darkTheme
                                ? response.special_offers.button_right[0].url
                                : response.special_offers.button_right[1].url))}></img>
                </div>

                <div className={`button-generic border-blue center_text clickable center_v paddings-button
                                ${darkTheme ? 'glow-solid-D glow-L' : 'glow-solid-L glow-D'}
                                `}>
                    <h3 className="blue  text-nowrap">View All</h3>
                </div>
            </div>

        </div>
    )

}