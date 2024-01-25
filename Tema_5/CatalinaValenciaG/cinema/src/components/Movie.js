import React from "react";

export const Movie = ({ titulo, imagen,sinopsis, duracion,genero,calificacion }) => {
    return (
        <div className="card">
            <h3>{titulo}</h3>
            <img src= {imagen} alt="Imagen" width="300"/>
            <p><b>Sinopsis:</b> {sinopsis}</p>
            <p><b>Duración:</b> {duracion}</p>
            <p><b>Género:</b> {genero}</p>
            <p><b>Calificacion:</b> {calificacion} de 5</p>
            <button>Asientos</button>
        </div>
    );
}