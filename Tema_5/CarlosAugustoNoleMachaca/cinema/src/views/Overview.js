import React from 'react';
import {movies} from '../data/movies'
import '../styles/styles.css';
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import MovieList from "../components/MovieList";

export const Overview = () => {
    return (
        <div>
            <Header />
            <h2 className="center-text">Películas Disponibles</h2>
            <MovieList listMovies={movies} />
            <Footer />
        </div>
    );
}