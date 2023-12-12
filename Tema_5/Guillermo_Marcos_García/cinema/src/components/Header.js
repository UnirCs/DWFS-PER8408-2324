import React from "react";
import '../styles/header.css';
import cinemaImage from '../images/icon-cine.png'
export const Header = () => {
    return(
        <div className="header">
           <label className="header-title">ODEON CINEMA</label>
            <div className="icon-container">
                <img src={cinemaImage} alt={"icon"}/>
            </div>
        </div>
    )
}