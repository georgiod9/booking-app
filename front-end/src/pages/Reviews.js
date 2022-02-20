import React from 'react'
import useFetch from '../hooks/useFetch'

export default function Reviews() {
  const { loading, error, data } = useFetch('http://localhost:1337/reviews')

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error.</p>

  return (
    <div> 
      {data.map(review => (
        <div key={review.id} className="review-card">
          <div className="title">{review.title}</div>
          <small>console list</small>

          <p>{review.body}</p>
          
        </div>
      ))}
    </div>
  )
}
