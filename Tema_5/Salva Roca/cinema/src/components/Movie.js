import React from "react";

export const Movie = ({ title, image, synopsis, length, genre, rating }) => {
    return (
        <div className="card">
            <h3>{title}</h3>
            <div className="movie-info">
                <img className="movie-image" src={image} alt="El Padrino"/>
                <div className="movie-details">
                    <p><b>Sinopsis</b>: {synopsis}</p>
                    <p><b>Duración</b>: {length} minutos</p>
                    <p><b>Género</b>: {genre}</p>
                    <p><b>Puntuación</b>: {rating} / 10</p>
                    <button className="select-button">Seleccionar asientos</button>
                </div>
            </div>
        </div>
    );
}