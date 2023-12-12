import React from "react";

export const Movie = (props) => {
    return (
        <div className="movie-card">
            <h3 className="center-text">{props.movie.titulo}</h3>
            <div className="div-movie">
                <img className="movie-img" src={props.movie.img_path} />
            </div>
            <p><b>Sinopsis: </b>{props.movie.sinopsis}</p>
            <p><b>Duración: </b>{props.movie.duracion}</p>
            <p><b>Genero: </b>{props.movie.genero}</p>
            <p><b>Puntuación: </b>{props.movie.puntuacion}</p>
            <div>
                <button className="btn btn-warning">Seleccionar asientos</button>
            </div>
        </div>
    );
}