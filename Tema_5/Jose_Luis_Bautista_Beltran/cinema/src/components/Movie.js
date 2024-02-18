import React from "react";

export const Movie = ({ titulo, imagen, sinopsis, duracion, genero, puntuacion}) => {
    return (
        <div className="card">
            <h2 className="center-text">{titulo}</h2>            
            <img className ="imagen" src={imagen} alt={titulo}/>
            <p><b>Sinopsis:</b> {sinopsis}</p>
            <p><b>Duración:</b> {duracion} minutos </p>
            <p><b>Género:</b> {genero} </p>
            <p><b>Puntuación:</b> {puntuacion} de 10 </p>
            <input className="boton-personalizado-4 imagen" type="button" value="Reservar" />
        </div>
    );
}