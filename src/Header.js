import React from 'react'
import './Header.css'
import HomeIcon from '@material-ui/icons/Home';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import { IconButton } from '@material-ui/core';

function Header() {
    return (
        <div className="Header">
            <div className="HeaderLeft">
                <div className="HeaderIcon active">
                    <HomeIcon />
                    <p>Home</p>
                </div>

                <div className="HeaderIcon">
                    <VideoLibraryIcon />
                    <p>Collections</p>
                </div>

                <div className="Search">
                    <IconButton><SearchIcon /></IconButton>
                    <input type="text" placeholder="Search for a movie"/>
                </div>

                <div className="HeaderIcon">
                    <PersonOutlineIcon />
                    <p>Account</p>
                </div>
            </div>

            <img src="https://www.nicepng.com/png/full/242-2424140_hulu-png-logo-hulu-logo-white-png.png" alt="" />

        </div>
    )
}

export default Header
