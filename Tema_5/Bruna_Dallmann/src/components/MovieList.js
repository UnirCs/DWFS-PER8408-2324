import React from "react";
import {Movie} from "./Movie";
import Image1 from '../images/Image1.JPG';
import Image2 from '../images/Image2.JPG';
import Image3 from '../images/Image3.JPG';
import Image4 from '../images/Image4.JPG';
import Image5 from '../images/Image5.JPG';
import Image6 from '../images/Image6.JPG';
export const MovieList = () => {
    const movies = [
        { title: "Película 1", image: Image1, synopsis: "Sinopisis 1", duration: "1 hora", type: "Genero 1", score: "4 estrellas"},
        { title: "Película 2", image: Image2, synopsis: "Sinopisis 2", duration: "1 hora", type: "Genero 2", score: "4 estrellas"},
        { title: "Película 3", image: Image3, synopsis: "Sinopisis 3", duration: "1 hora", type: "Genero 3", score: "5 estrellas"},
        { title: "Película 4", image: Image4, synopsis: "Sinopisis 4", duration: "1 hora", type: "Genero 4", score: "3 estrellas"},
        { title: "Película 5", image: Image5, synopsis: "Sinopisis 5", duration: "1 hora", type: "Genero 5", score: "4 estrellas"},
        { title: "Película 6", image: Image6, synopsis: "Sinopisis 6", duration: "1 hora", type: "Genero 6", score: "4 estrellas"},
    ];
    return (
        <div>
        <h2 className="center-text">Películas Disponibles</h2>
            <div className="movie-container">
                {movies.map((movie, index) => (
                    <Movie
                        key={index}
                        title={movie.title}
                        image={movie.image}
                        synopsis={movie.synopsis}
                        duration={movie.duration}
                        type={movie.type}
                        score={movie.score}
                    />
                ))}
            </div>
        </div>
    );
}