import React from "react";
import useFetch from '../hooks/useFetch'
import { useEffect, useState } from 'react'

export function FetchMedia() {
    const root = "http://localhost:1337"
    const { loading, error, data } = useFetch('http://localhost:1337/homepage')

    return ("RETURN FROM FETCHMEDIA")

}

export function getList(array, selector, maxCards) {
    console.log("SELECTOR-MEDAI: ", selector)
    const selection = [array[0], array[1], array[2], array[3]]
    if (selector < ((array.length + 1) - maxCards )) {
        for (var i = 0; i < maxCards; i++) {
            selection[i] = (array[i + selector])
           // console.log("SELECTION SET TO: ", selection[i])
        }
    }
    else {
        for (var i = 0; i < maxCards; i ++) {
            selection[i] = 0;
        }
    }

    return(selection)
}