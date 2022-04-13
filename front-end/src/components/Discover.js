import React from "react";
import useFetch from '../hooks/useFetch'
import { useEffect, useState } from 'react'
import { FetchMedia } from "../utils/FetchMedia";
import { getList } from "../utils/FetchMedia";

export function Discover(props) {
    const root = "http://localhost:1337"
    const { loading, error, data } = useFetch('http://localhost:1337/homepage')

    const [darkTheme, setDarkTheme] = props.functions
    console.log("DATRKK THEME: ", darkTheme)
    console.log("ASDSD", data && data.discover.title)


    var [selector, setSelector] = useState(0)
    const array = (data && data.discover.discovers)
    const maxCards = 4

    function handleLeftClick() {
        if (selector > 0) selector--;
        setSelector(selector)
    }

    function handleRightClick() {
        if (selector < (data && data.discover.discovers.length) - 3) {
            if (selector < 10) selector++;
            setSelector(selector)
        }
    }

    function getDiscovers() {
        const discovers = data && data.discover.discovers
        console.log("MEDIA", getList(discovers, selector, maxCards))
        const array = getList(discovers, selector, maxCards)

        return (
            <div className="flex-box horizontal relative align_items-center align_content-center flex-center gap-s">
                <div className={`card-offers flex-box vertical flex-center
                                ${darkTheme ? 'card_offers_border-D' : 'card_offers_border-L'}
                                `}>
                    <img className="offer_image display-block"
                        src={root + (array && array[0].image.formats.thumbnail.url)}></img>



                    <h4 className="text-center">{array && array[0].description}</h4>

                    <div className="flex-box horizontal flex-center align_items-center paddingT-xs gap-s">
                        <img className='icon_location' src={root + (data && data.discover.icon_location.url)}></img>
                        <h5 className="font-gray">{array && array[0].location}</h5>
                    </div>



                </div>

                <div className={`card-offers flex-box vertical flex-center
                                ${darkTheme ? 'card_offers_border-D' : 'card_offers_border-L'}
                                `}>
                    <img className="offer_image display-block"
                        src={root + (array && array[1].image.formats.thumbnail.url)}></img>



                    <h4 className="text-center">{array && array[1].description}</h4>

                    <div className="flex-box horizontal flex-center align_items-center paddingT-xs gap-s">
                        <img className='icon_location' src={root + (data && data.discover.icon_location.url)}></img>
                        <h5 className="font-gray">{array && array[1].location}</h5>
                    </div>



                </div>

                <div className={`card-offers flex-box vertical flex-center
                                ${darkTheme ? 'card_offers_border-D' : 'card_offers_border-L'}
                                `}>
                    <img className="offer_image display-block"
                        src={root + (array && array[2].image.formats.thumbnail.url)}></img>



                    <h4 className="text-center">{array && array[2].description}</h4>

                    <div className="flex-box horizontal flex-center align_items-center paddingT-xs gap-s">
                        <img className='icon_location' src={root + (data && data.discover.icon_location.url)}></img>
                        <h5 className="font-gray">{array && array[2].location}</h5>
                    </div>



                </div>

                <div className={`card-offers flex-box vertical flex-center
                                ${darkTheme ? 'card_offers_border-D' : 'card_offers_border-L'}
                                `}>
                    <img className="offer_image display-block"
                        src={root + (array && array[3].image.formats.thumbnail.url)}></img>



                    <h4 className="text-center">{array && array[3].description}</h4>

                    <div className="flex-box horizontal flex-center align_items-center paddingT-xs gap-s">
                        <img className='icon_location' src={root + (data && data.discover.icon_location.url)}></img>
                        <h5 className="font-gray">{array && array[3].location}</h5>
                    </div>


                </div>
            </div>
        )
    }

    return (
        <div className="flex-box vertical flex-center  align_items-center gap-s ">



            <span className="marginR-auto">{getDiscovers()}</span>




            <div>
                <img onClick={handleLeftClick} className='display_inline clickable glow' src={root +
                    (data &&
                        (darkTheme
                            ? data.discover.button_left[0].url
                            : data.discover.button_left[1].url)
                    )}></img>


                <img onClick={handleRightClick} className='display_inline clickable glow' src={root +
                    (data &&
                        (darkTheme
                            ? data.discover.button_right[0].url
                            : data.discover.button_right[1].url)
                    )}></img>
            </div>


        </div>
    )

}