import React, { useState, useEffect} from 'react'
import './Results.css'
import VideoCard from './VideoCard'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import huluActions from './huluActions'

function Results() {
    const [movies, setmovies] = useState([])
    const NavOption = useSelector(state => state.NavOption)
    const dispatch = useDispatch()

    useEffect(() =>{
        const getMovies = async () =>{
            await axios.get(NavOption).then(response => {
                setmovies(response.data.results)
                dispatch(huluActions.getResults(response.data.results))
            }).catch(err => {
                console.log(err.message)
            })
        }
        getMovies()
    }, [NavOption])

    console.log(movies)
    return (
        <div className="Results">
            {movies && movies.map( movie => <VideoCard movie={movie} key={movie.id} />) }
        </div>
    )
}

export default Results
