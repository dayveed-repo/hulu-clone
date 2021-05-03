import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import huluActions from './huluActions'
import './Nav.css'
import request from './request.js'

function Nav() {
    const dispatch = useDispatch()
    const Active = useSelector(state => state.Active)

    return (
        <div className="Nav">
            <h2 style={{ fontSize: `${Active === "Trending" ? "20px" : "15px" }`, opacity: `${Active === "Trending" ? 1 : 0.6}` }} onClick={ () => dispatch(huluActions.fetchMovie({ url: request.fetchTrending, name: "Trending"}))}>Trending</h2>
            <h2 style={{ fontSize: `${Active === "Top Rated" ? "20px" : "15px" }`, opacity: `${Active === "Top Rated" ? 1 : 0.6}` }} onClick={ () => dispatch(huluActions.fetchMovie({ url: request.fetchTopRated, name: "Top Rated" }))}>Top Rated</h2>
            <h2 style={{ fontSize: `${Active === "Action" ? "20px" : "15px" }`, opacity: `${ Active === "Action" ? 1 : 0.6}` }} onClick={ () => dispatch(huluActions.fetchMovie({ url: request.fetchActionMovies, name: "Action" }))}>Action</h2>
            <h2 style={{ fontSize: `${Active === "Comedy" ? "20px" : "15px" }`, opacity: `${Active === "Comedy" ? 1 : 0.6 }` }} onClick={ () => dispatch(huluActions.fetchMovie({ url: request.fetchComedyMovies, name: "Comedy" }))}>Comedy</h2>
            <h2 style={{ fontSize: `${Active === "Romance" ? "20px" : "15px" }`, opacity: `${Active === "Romance" ? 1 : 0.6 }` }} onClick={ () => dispatch(huluActions.fetchMovie({ url: request.fetchRomanceMovies, name: "Romance" }))}>Romance</h2>
            <h2 style={{ fontSize: `${Active === "Horror" ? "20px" : "15px" }`, opacity: `${Active === "Horror" ? 1 : 0.6 }` }} onClick={ () => dispatch(huluActions.fetchMovie({ url: request.fetchHorrorMovies, name: "Horror" }))}>Horror</h2>
            <h2 style={{ fontSize: `${Active === "Mystery" ? "20px" : "15px" }`, opacity: `${Active === "Mystery" ? 1 : 0.6}` }} onClick={ () => dispatch(huluActions.fetchMovie({ url: request.fetchMysteryMovies, name: "Mystery" }))}>Mystery</h2>
            <h2 style={{ fontSize: `${Active === "Sci-Fi" ? "20px" : "15px" }`, opacity: `${Active === "Sci-Fi" ? 1 : 0.6}` }} onClick={ () => dispatch(huluActions.fetchMovie({ url: request.fetchSciFiMovies, name: "Sci-Fi" }))}>Sci-Fi</h2>
            <h2 style={{ fontSize: `${Active === "Western" ? "20px" : "15px" }`, opacity: `${Active === "Western" ? 1 : 0.6 }` }} onClick={ () => dispatch(huluActions.fetchMovie({ url: request.fetchWesternMovies, name: "Western" }))}>Western</h2>
            <h2 style={{ fontSize: `${Active === "Animation" ? "20px" : "15px" }`, opacity: `${Active === "Animation" ? 1 : 0.6}` }} onClick={ () => dispatch(huluActions.fetchMovie({ url: request.fetchAnimationMovies, name: "Animation" }))}>Animation</h2>
            <h2 style={{ fontSize: `${Active === "Tv shows" ? "20px" : "15px" }`, opacity: `${Active === "Tv shows" ? 1 : 0.6}` }} onClick={ () => dispatch(huluActions.fetchMovie({ url: request.fetchTvShows, name: "Tv shows" }))}>Tv shows</h2>
        </div>
    )
}

export default Nav
