import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import './MovieInfo.css'
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import StarIcon from '@material-ui/icons/Star';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import axios from 'axios';
import { useSelector } from 'react-redux';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function MovieInfo() {
    // const [get, setget] = useState([])
    const MovieResults = useSelector(state => state.MovieResults)

    useEffect(() => {
        const getGenre = async () =>{
            await axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=4470e1a6bd8138ddac7e142315fd5fb5&language=en-US").then(res => {
                console.log(res.data)
            }).catch(err => {
                console.log(err.message)
            })
        }

        getGenre()
    }, [])

    return (
        <div className="MovieInfo">
            <img src="https://www.indiewire.com/wp-content/uploads/2019/05/chris-evans-1.jpg" alt="movie info" />
            <div className="MovieInfo__Right">
                <div className='Movie_Title'>
                    <h1>Home Coming (2017)</h1>

                    <div className="MovieTitleMore">
                        Sci-Fi & Fantasy, Action & Adventure, Drama
                        <span><FiberManualRecordIcon /> 1hr 5min</span>
                    </div>
                </div>

                <div className='Movie_Options'>
                    <h3>8.9</h3>

                    <div className="Movie_Icon"> 
                        <Avatar><LibraryAddIcon /></Avatar>
                        <p>Add to favorite</p>
                    </div>

                    <div className="Movie_Icon"> 
                        <Avatar><StarIcon /></Avatar>
                        <p>Rate Movie</p>
                    </div>

                    <p><PlayArrowIcon /> play trailer</p>
            
                </div>

                <div className='Movie_Overview'>
                    <h3>OverView</h3>
                    <p>Prince Akeem Joffer is set to become King of Zamunda when he discovers he has a son he never knew about in America – a street savvy Queens native named Lavelle. Honoring his royal father's dying wish to groom this son as the crown prince, Akeem and Semmi set off to America once again.</p>
                </div>
            </div>
        </div>
    )
}

export default MovieInfo
