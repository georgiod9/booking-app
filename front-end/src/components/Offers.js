import React from "react";
import useFetch from '../hooks/useFetch'
import { useEffect, useState } from 'react'

export function Offers() {
    const root = "http://localhost:1337"
    const { loading, error, data } = useFetch('http://localhost:1337/homepage')
    const [response, setResponse] = useState(data)


    return (
       <div>
            <div className="display-block">
                asd
            </div>
        </div>
    )

}