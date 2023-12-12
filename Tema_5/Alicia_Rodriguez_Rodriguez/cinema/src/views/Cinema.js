import React from 'react';
import '../styles/cinema.css';
import {Movie} from "../components/Movie";
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {movies} from "../components/MovieList";

export const Cinema = () => {
    return (
        <div>
            <Header></Header>
            <div className="cinema-container">
                {movies.map((movie, index) => (
                    <Movie
                        key={index}
                        title={movie.title}
                        image={movie.image}
                        synopsis={movie.synopsis}
                        length={movie.length}
                        genre={movie.genre}
                        score={movie.score}
                    />
                ))}
            </div>
            <Footer></Footer>
        </div>
    );
}