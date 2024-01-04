import React from "react";
import {Movie} from "./Movie";
import '../styles/movieList.css'

export const MovieList = () => {
    const movies = [
        { title: "Black Friday", caratula:"https://pics.filmaffinity.com/thanksgiving-916912364-large.jpg", sinopsis: "Tras un Black Friday en el que se producen disturbios que acaban en tragedia, un misterioso asesino aterroriza Plymouth, en Massachusetts." , duration: "105", genre: "Terror", puntuation: "6.0" },
        { title: "Five Nights at Freddys", caratula:"https://pics.filmaffinity.com/five_nights_at_freddy_s-328211281-large.jpg", sinopsis: "Un atormentado guardia de seguridad empieza a trabajar en Freddy Fazbear's Pizza. En su primera noche de trabajo, se da cuenta de que no será nada fácil superar el turno de noche en la pizzería." , duration: "109", genre: "Terror", puntuation: "5.5" },
        { title: "El Exorcista: Creyente", caratula:"https://pics.filmaffinity.com/the_exorcist_believer-559498509-large.jpg", sinopsis: "Cuando Angela y su amiga Katherine desaparecen en el bosque, solo para regresar tres días después sin recordar lo que les sucedió, se desencadena una cadena de eventos que obligarán a Victor a confrontar el mal. Secuela del film de 1973" , duration: "110", genre: "Terror", puntuation: "4.9" },
        { title: "Noche de Paz", caratula:"https://pics.filmaffinity.com/silent_night-440853997-large.jpg", sinopsis: "Es Nochebuena y un padre es testigo de la muerte de su hijo cuando este queda atrapado en un fuego cruzado entre bandas. Roto de dolor y sin voz, debido a una herida profunda que afecta a sus cuerdas vocales, decidirá someterse a un estricto entrenamiento para vengar su muerte" , duration: "104", genre: "Drama, Acción", puntuation: "5.6" },

    ];
    return (
        <div className="movieList">
            <h2 className="movieList-text"> Películas disponibles</h2>
            <div className="movies-container">
                {movies.map((movie, index) => (
                    <Movie
                        key={index}
                        title={movie.title}
                        caratula={movie.caratula}
                        sinopsis={movie.sinopsis}
                        duration={movie.duration}
                        genre={movie.genre}
                        puntuation={movie.puntuation}
                    />
                ))}
            </div>
        </div>
    );
}