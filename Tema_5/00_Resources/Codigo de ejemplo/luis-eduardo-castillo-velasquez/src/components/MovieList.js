import React from "react";
import {Movie} from "./Movie";

export const MoviesList = ({movie}) => {
    if (!movie){
        return <p>La lista de pelicula esta vacia</p>;
    }
    return (

        <div className="movies-container">
            {movie.map((movie, index) => (
                <Movie
                    key={index}
                    titulo={movie.titulo}
                    imagen={movie.imagen}
                    sinopsis={movie.sinopsis}
                    genero={movie.genero}
                    duracion={movie.duracion}
                    puntuacion={movie.puntuacion}
                />
            ))}
        </div>

    );
};