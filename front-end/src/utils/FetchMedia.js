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

    return(array)
}