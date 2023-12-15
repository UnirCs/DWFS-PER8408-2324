import React from "react";

export const Movie = ({titulo, img, sinopsis, duracion, genero, puntuacion }) => {
    return (
        <div className="card">
            <h3>{titulo}</h3>
            <img src={img}/>
            <p>Sinopsis: {sinopsis}</p>
            <p>Duración: {duracion}</p>
            <p>Género: {genero}</p>
            <p>Puntuación: {puntuacion} /10</p>
        </div>
    );
}