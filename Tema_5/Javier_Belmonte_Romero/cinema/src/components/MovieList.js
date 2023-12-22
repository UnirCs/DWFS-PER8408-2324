import React, { useEffect } from "react";
import { MovieCard } from "./Movie";
import '../styles/MovieList.css';

export const MovieList = ({ movies }) => {
    return (
        <div className={`movie-list dark-mode`}>
            {movies.map((movie) => (
                <MovieCard
                    name={movie.name}
                    imageUrl={movie.imageUrl}
                    type={movie.type}
                    duration={movie.duration}
                    age={movie.age}
                    synopsis={movie.synopsis}
                />
            ))}
        </div>
    );
}