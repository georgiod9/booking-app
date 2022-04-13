import React from "react";
import useFetch from '../hooks/useFetch'
import { useEffect, useState } from 'react'

export function Testimonial(params) {
    const root = "http://localhost:1337"
    const { loading, error, data } = useFetch('http://localhost:1337/homepage')
    const testimonials = (data && data.testimonials.testimonials)
    console.log("TESTIMON: ",testimonials && testimonials.length)
    
    const darkTheme = params.props
    //console.log("PARAM:", darkTheme)

    const min = 0
    const max = testimonials && testimonials.length - 1

    var rand =  Math.floor(Math.random() * 10 )
    console.log("RANDOM: ", rand)

    return (
        <div className={`card-testimony flex-box gap-xs horizontal flex-center align_items-center align_content-center
                        ${darkTheme?'card-testimony-D':'card-testimony-D'}
                        `}>
            
            <img className="icon_quote align_self-start paddings-s" src={root + (data && data.testimonials.icon_quote[0].url)}></img>

            <div className="flex-box vertical paddings-s
                            flex-center align_items-center 
                            gap-s text-center">
                <p className="karla-regular">{testimonials && testimonials[0].description}</p>
                <p className="font-blue">{testimonials && testimonials[0].name}</p>
            </div>

            <img  className="icon_quote align_self-end paddings-s" src={root + (data && data.testimonials.icon_quote[1].url)}></img>

        </div>
    )

}
