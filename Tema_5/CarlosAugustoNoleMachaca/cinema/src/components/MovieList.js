import React from 'react';
import {Movie} from "./Movie";
import '../styles/styles.css';

function MovieList({listMovies}) {
    return (
        <div className="movie-container">
            {listMovies.map((movie, index) => (
                <Movie
                    key={index}
                    title={movie.name}
                    img={movie.image_film}
                    synopsis={movie.synopsis}
                    duration={movie.duration}
                    gender={movie.category}
                    rating={movie.rating}
                />
            ))}
        </div>
    )
}

export default MovieList;