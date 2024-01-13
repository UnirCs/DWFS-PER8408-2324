import React from "react";
import {Movie} from "./Movie";
import moviesJson from '../resources/movies.json'

export const MovieList = () => {
    const movies = moviesJson;
    return(
        <div className="movie-list-container">
            {movies.map((movie, index) => (
                <Movie
                    key={index}
                    title={movie.title}
                    imgSrc={movie.imgSrc}
                    synopsis={movie.synopsis}
                    duration={movie.duration}
                    genre={movie.genre}
                    rating={movie.rating}
                />
            ))}
        </div>
    );
}