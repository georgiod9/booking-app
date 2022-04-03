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
 

  const themeStyles = {
    backgroundColor: darkTheme ? '#333'   :  '#CCC',
    color: darkTheme ?   '#CCC' : '#333' ,
    padding: '2rem',
    margin: '2rem'
  }

  console.log("homepages Theme: ", appTheme)

  const root = "http://localhost:1337"
  const { loading, error, data } = useFetch('http://localhost:1337/homepage')
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error.</p>

 

  return (
    <div id="homepage">
      
    </div>
  )
}
