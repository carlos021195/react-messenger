import React from 'react'
import './InfoBar.css'
import Home from '../../icons/home.png';


function InfoBar({name, room}){

    return(
        <div className = "infoBar">
            <div className = "leftInnerContainer">
                <img className = "online-icon" src="https://img.icons8.com/color/48/000000/connection-status-on--v1.png"/>
                <p>{name}</p>
                
            </div>
            <div className = "centerInnerContainer">
                <h3>{room}</h3>
            </div>
            <div className = "rightInnerContainer">
                <a href = "/"><img className = "home-icon" src = {Home}  alt = "Home"/></a>
            </div>
        </div>

    )
    
}

export default InfoBar;