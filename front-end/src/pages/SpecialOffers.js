import React from "react";
import useFetch from '../hooks/useFetch'
import { useEffect, useState } from 'react'
import { Offers } from "../components/Offers";

export function SpecialOffers(props) {
    const [darkTheme, setDarkTheme] = useState(true)
    const [appTheme, setAppTheme, searchMode, setSearchMode] = props.functions;
    var [selector, setSelector] = useState(0)


    useEffect(() => {
        if (appTheme === "light") {
            setDarkTheme(false)
        }
        else if (appTheme === "dark") {
            setDarkTheme(true)
        }
    })

    useEffect(() => {
        { data && setResponse(data) }
    })




    const root = "http://localhost:1337"
    const { loading, error, data } = useFetch('http://localhost:1337/homepage')
    const [response, setResponse] = useState(data)
    const offers = (response && response.special_offers.special_offers)
    const array = (response && response.special_offers.special_offers)

    //left navigation button is clicked
    function handleLeftClick() {
        console.log("*******")
        if (selector > 0) selector--;
        setSelector(selector)
        console.log("SELECTOR: ", selector)
    }

    //right navigation button is clicked
    function handleRightClick() {
        console.log("*******")
        response && console.log("RGITH CLCI: ", offers.length)
        if (selector < (response && offers.length) - 3) {
            if (selector < 10) selector++;
            setSelector(selector)
            console.log("SELECTOR: ", selector)
        }


    }

    function handleViewOffers() {
        
    }

    function getOffers(element) {

        // response && console.log("OFFER: ", array[0])
        console.log("ARAY LENGTH: ", response && array.length)
        console.log("Selector: ", selector)
        if (selector < (response && array.length)) {

            return (
                <div className="flex-box horizontal relative">
                    <div className={`
                    card-offers display-inline marginL-2
                    ${darkTheme ? 'card_offers_border-D' : 'card_offers_border-L'}
                    `}>

                        <img className='offer_image' src={root + (response && array[selector].image.url)}></img>

                        <div className="relative paddingL-ms ">
                            <h5 className="font-gray text-left ">{response && array[selector].date}</h5>
                            <h6 className="text-left ">{response && array[selector].title}</h6>

                            <div className="flex-box horizontal align_items-baseline spacing gap-s paddingR-ms">
                                <div>
                                    <h5 className="display_inline font-gray text-left paddingT-s">from</h5>
                                    <h6 className="display_inline paddingL-ms ">{response && array[selector].price}$</h6>
                                </div>
                                <div className="display_inline font-book button-connect button-round paddingL-s ">
                                    Book Now
                                </div>
                            </div>
                        </div>

                    </div>



                    <div className={`
                    card-offers display-inline marginL-2
                    ${darkTheme ? 'card_offers_border-D' : 'card_offers_border-L'}
                    `}>
                        <img className='offer_image' src={root + (response && array[selector + 1].image.url)}></img>

                        <div className="relative paddingL-ms ">
                            <h5 className="font-gray text-left ">{response && array[selector + 1].date}</h5>
                            <h6 className="text-left ">{response && array[selector + 1].title}</h6>

                            <div className="flex-box horizontal align_items-baseline spacing gap-s paddingR-ms">
                                <div>
                                    <h5 className="display_inline font-gray text-left paddingT-s">from</h5>
                                    <h6 className="display_inline paddingL-ms ">{response && array[selector + 1].price}$</h6>
                                </div>
                                <div className="display_inline font-book button-connect button-round paddingL-s ">
                                    Book Now
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className={`
                    card-offers display-inline marginL-2
                    ${darkTheme ? 'card_offers_border-D' : 'card_offers_border-L'}
                    `}>
                        <img className='offer_image'
                            src={root + (response && array[selector + 2].image.url)}
                        ></img>

                        <div className="relative paddingL-ms ">
                            <h5 className="font-gray text-left ">{response && array[selector + 2].date}</h5>
                            <h6 className="text-left ">{response && array[selector + 2].title}</h6>

                            <div className="flex-box horizontal align_items-baseline spacing gap-s paddingR-ms">
                                <div>
                                    <h5 className="display_inline font-gray text-left paddingT-s">from</h5>
                                    <h6 className="display_inline paddingL-ms ">{response && array[selector + 2].price}$</h6>
                                </div>
                                <div className="display_inline font-book button-connect button-round paddingL-s ">
                                    Book Now
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )

        }
        return (<div></div>)


    }

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
                <div className={`display-inline button-list clickable
                                 ${darkTheme ? 'button-dark' : 'button-light'}
                                `}>

                    <h3 className='display-inline blue'>Lebanon</h3>
                    <img className='display-inline paddingL-xs' src={root + (response && response.special_offers.button_location.icon.url)}></img>
                </div>

                <div className=" flex-box horizontal flex-center nowrap align_items-center paddingT-m paddingB-m">
                    <img className="marginR-1 clickable glow"
                        onClick={handleLeftClick}
                        src={root + (response && (
                            darkTheme
                                ? response.special_offers.button_left[0].url
                                : response.special_offers.button_left[1].url))}></img>



                    <span>
                        {
                            (selector < (response && array.length)
                                ? getOffers(selector)
                                : true
                            )

                        }
                    </span>


                    <img className="marginL-1 clickable glow"
                        onClick={handleRightClick}
                        src={root + (response && (
                            darkTheme
                                ? response.special_offers.button_right[0].url
                                : response.special_offers.button_right[1].url))}></img>
                </div>

                <div onClick={handleViewOffers}  
                    className={`button-generic border-blue center_text clickable center_v paddings-button
                                ${darkTheme ? 'glow-solid-D glow-L' : 'glow-solid-L glow-D'}
                                `}>
                    <h3 className="blue  text-nowrap">View All</h3>
                </div>
            </div>

        </div>
    )

}