import React from "react";

export const Movie = ({ titulo, imagen, sinopsis, duracion, genero, puntuacion}) => {
    return (
        <div className="card">
            <h3>{titulo}</h3>
            <img className="carteles" src={imagen} alt={imagen}/>
            <p><b>Sinopsis:</b> {sinopsis}</p>
            <p><b>Duración:</b> {duracion} min </p>
            <p><b>Género:</b> {genero} </p>
            <p><b>Puntuación:</b> {puntuacion}/10 </p>
            <input type="button" value="Reserva" />
        </div>
    );
}