import React from 'react';
import '../styles/styles.css';
import { Movie } from './Movie.js';
import movies from '../resources/movies.json'

export const MovieList = () => {
    return (
        <div>
            <h2 className="center-text">Películas en cartelera</h2>
            <div className="movie-container">
                {movies.map((movie, index) => (
                    <Movie
                        key={index}
                        title={movie.title}
                        image={movie.image}
                        synopsis={movie.synopsis}
                        length={movie.length}
                        genre={movie.genre}
                        rating={movie.rating}
                    />
                ))}
            </div>
        </div>
    );
}