import React from 'react'
import useFetch from '../hooks/useFetch'

export default function Homepage() {
  const root = "http://localhost:1337"
  const { loading, error, data } = useFetch('http://localhost:1337/homepage')

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error.</p>

  return (
    <div>
      
    </div>
  )
}
