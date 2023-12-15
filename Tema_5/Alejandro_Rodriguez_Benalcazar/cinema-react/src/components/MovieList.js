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
                    img={movie.img}
                    sinopsis={movie.sinopsis}
                    duracion={movie.duracion}
                    genero={movie.genero}
                    puntuacion={movie.puntuacion}
                />
            ))}
        </>
    );
}