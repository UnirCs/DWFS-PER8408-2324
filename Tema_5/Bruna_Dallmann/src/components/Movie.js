import React from "react";
export const Movie = ({ title, image, synopsis, duration, type, score }) => {
    return (
        <div className="card">
            <div>
                <h3>{title}</h3>
                <p>Sinopisis: {synopsis}</p>
                <p>Duración: {duration}</p>
                <p>Género: {type}</p>
                <p>Puntuación: {score}</p>
                <button className="boton">Reservar</button>
            </div>
            <div>
                <img src={image} alt={title} />
            </div>
        </div>
    );
}