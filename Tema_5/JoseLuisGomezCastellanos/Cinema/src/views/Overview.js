import React from 'react';
import '../styles/styles.css';
import {Movie} from "../components/Movie";
import {movieList} from "../components/MovieList"
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";

export const Overview = () => {

    const list = movieList();

    return (
        <div>
            <Header />
            <h2 className="center-text">Cartelera</h2>
            <div className="movie-container">
                {list.map((movie, index) => (
                    <Movie
                        key={index}
                        poster={movie.poster}
                        title={movie.title}
                        synopsis={movie.synopsis}
                        duration={movie.duration}
                        genre={movie.genre}
                        rating={movie.rating}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
}