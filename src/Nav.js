import React from 'react'
import './nav.css'
import requests from './requests'

function Nav({ setSelectedOption }) {
    return (
        <div className="nav">
            <h2 onClick={() => setSelectedOption(requests.fetchTrending)} >
                Trending
                </h2>
            <h2 onClick={() => setSelectedOption(requests.fetchTopRated)} >
                Top Rated
                </h2>
            <h2 onClick={() => setSelectedOption(requests.fetchAcionMovies)} >
                Action
                </h2>
            <h2 onClick={() => setSelectedOption(requests.fetchComedyMovies)}>
                Comedy
                </h2>
            <h2 onClick={() => setSelectedOption(requests.fetchHorrorMovies)}>
                Horror
                </h2>
            <h2 onClick={() => setSelectedOption(requests.fetchRomanceMovies)}>
                Romance
                </h2>
            <h2 onClick={() => setSelectedOption(requests.fetchMystery)}>
                Mystery
                </h2>
            <h2 onClick={() => setSelectedOption(requests.fetchScifi)}>
                Sci-fi
                </h2>
            <h2 onClick={() => setSelectedOption(requests.fetchAnimation)}>
                Western
                </h2>
            <h2 onClick={() => setSelectedOption(requests.fetchWestern)}>
                Animated
                </h2>
            <h2 onClick={() => setSelectedOption(requests.fetchTV)}>
                Movie
                </h2>
        </div>
    )
}

export default Nav
