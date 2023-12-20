import React from "react";
import '../styles/MovieCard.css';

export const MovieCard = ({ name, imageUrl, type, duration, age, synopsis }) => {
    return (
        <div className="movie-card">
            <img src={imageUrl} alt={name} className="movie-image" />
            <div className="movie-details">
                <h3 className="movie-details-name">{name}</h3>
                <p className="movie-details-text">Género: {type}</p>
                <p className="movie-details-text">Duración: {duration}</p>
                <p className="movie-details-text">Edad: {age}</p>
                <p className="movie-details-text">Descripción: {synopsis}</p>
            </div>
        </div>
    );
}