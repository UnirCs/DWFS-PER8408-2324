import React from "react";

export const Movie = ({ title, imgSrc, synopsis, duration, genre, rating }) => {
    return (
        <div className="card">
            <h3>{title}</h3>
            <img className="movie-img" src={imgSrc} alt={title}/>
            <div className="movie-text">
                <p><strong>Sinopsis:</strong> {synopsis}</p>
                <p><strong>Duración:</strong> {duration}</p>
                <p><strong>Género:</strong> {genre}</p>
                <p><strong>Puntuación:</strong> {rating}</p>
            </div>
            <button className="chair-selector">Seleccionar asientos</button>
        </div>
    );
}