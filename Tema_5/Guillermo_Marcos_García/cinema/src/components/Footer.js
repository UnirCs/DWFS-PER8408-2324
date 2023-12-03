import React from "react";
import '../styles/footer.css';
import facebookIcon from '../images/icon-facebook.png'
import instagramIcon from '../images/icon-instagram.png'
import twitterIcon from '../images/icon-twitter.png'


export const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-text">
                <label>© 2023 ODEON Cinema.</label>
            </div>
            <div className="icons-container">
                <img className="icon" src={facebookIcon} alt={"icon"}/>
                <img className="icon" src={instagramIcon} alt={"icon"}/>
                <img className="icon" src={twitterIcon} alt={"icon"}/>
            </div>
        </div>
    )
}