import React from "react";

export const Movie = (props) => {
    return (
        <div className="movie-card">
            <div className="div-movie">
                <img className="movie-img" src={props.movie.image} />
            </div>
            <h3 className="center-text">{props.movie.title}</h3>
            <p><b>Sinopsis: </b>{props.movie.synopsis}</p>
            <p><b>Duración: </b>{props.movie.duracion}</p>
            <p><b>Genero: </b>{props.movie.genero}</p>
            <p><b>Puntuación: </b>{props.movie.puntuacion}</p>
            <div>
                <button>Seleccionar asientos</button>
            </div>
        </div>
    );
}