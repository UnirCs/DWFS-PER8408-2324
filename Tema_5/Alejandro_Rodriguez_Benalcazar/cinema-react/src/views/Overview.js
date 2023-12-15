import React from 'react';
import '../styles/styles.css';
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {MovieList} from "../components/MovieList";

export const Overview = () => {
    return (
        <div>
            <Header/>
            <h2 className="center-text">Sala de cine</h2>
            <div className="restaurant-container">
                <MovieList/>
            </div>
            <Footer/>
        </div>
    );
}