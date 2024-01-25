import React from "react";
export const Movie = ({ title, image, synopsis, duration, gender, punctuation}) => {
    return (
        <div className="billboard">
            <h3>{title}</h3>
            <img src={image}/>
            <p>Sinopsis: {synopsis}</p>
            <p>Duracion: {duration} Minutos</p>
            <p>Género: {gender}</p>
            <p>Puntuación: {punctuation} / 10</p>
            <button> RESERVAR </button>
        </div>
);
}