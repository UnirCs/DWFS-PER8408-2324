import React from "react";
import logo from '../img/film_icon.png';

export const Header = () => {
    return (
        <header className="bg-primary">
            <div className="container text-center justify-content-center text-white">
                <div className="row">
                    <div className="col">
                        <img src={logo} alt="Film icon"/>
                    </div>
                    <div className="col">
                        <h1>
                            UNIR | <small className="text-dark">Cinema</small>
                        </h1>
                    </div>
                </div>
            </div>
        </header>
    );
}