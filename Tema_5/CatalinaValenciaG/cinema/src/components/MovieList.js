import React from "react";
import {Movie} from "../components/Movie";

export const MovieList = ({movies}) => {
return (
    <div className="movie-container">
    {movies.map((movie, index) => (
        <Movie
            key={index}
            titulo={movie.titulo}
            imagen={movie.imagen}
            sinopsis={movie.sinopsis}
            duracion={movie.duracion}
            genero={movie.genero}
            calificacion={movie.calificacion}
        />
    ))}
</div>
)
}