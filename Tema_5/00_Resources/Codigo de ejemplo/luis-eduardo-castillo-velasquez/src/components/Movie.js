import React from "react";

export const Movie = ({titulo, imagen, sinopsis, genero, duracion, puntuacion}) => {
    return (
        <div className="movie">
            <h2>{titulo}</h2>
            <img className="cartel" src={imagen} alt={imagen}/>
            <p>Sinopsis: {sinopsis}</p>
            <p>Genero: {genero}</p>
            <p>Duracion : {duracion} minutos</p>
            <p>Puntuacion: {puntuacion}</p>
            <button disabled> Realizar reserva</button>
        </div>
    );
}