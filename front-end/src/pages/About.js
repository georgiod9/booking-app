import React from 'react'
import useFetch from '../hooks/useFetch'

export default function About() {
    const { loading, error, data } = useFetch('http://localhost:1337/about')

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error.</p>

    return (
        <div>
            <div key={data.id} className="review-card">
                <div className="title">{data.title}</div>

                <p>{data.description}</p>

            </div>

        </div>
    )
}
