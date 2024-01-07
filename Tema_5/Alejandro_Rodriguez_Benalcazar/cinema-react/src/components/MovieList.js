import React from "react";
import movies from "../resources/movies.json";
import {Movie} from "./Movie";


export const MovieList = () => {

    return (
        <>
        {movies.map((movie, index) => (
                <Movie
                    key={index}
                    titulo={movie.titulo}
                    image={movie.image}
                    sinopsis={movie.sinopsis}
                    duracion={movie.duracion}
                    genero={movie.genero}
                    puntuacion={movie.puntuacion}
                />
            ))}
        </>
    );
}