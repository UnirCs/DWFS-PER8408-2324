import React from 'react';
import '../styles/styles.css';
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {MovieList} from "../components/MovieList";

export const Overview = () => {
    return (
        <div>
            <Header />
            <h2 className="center-text">CARTELERA</h2>
            <MovieList />
            <Footer />
        </div>
    );
}