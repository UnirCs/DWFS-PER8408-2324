import React from "react";
import { images } from "../constants";

export const Movie = ({titulo, image, sinopsis, duracion, genero, puntuacion }) => {
    return (
        <div className="card">
            <h3>{titulo}</h3>
            <img className="image" src={images[image]}/>
            <p>Sinopsis: {sinopsis}</p>
            <p>Duración: {duracion}</p>
            <p>Género: {genero}</p>
            <p>Puntuación: {puntuacion} /10</p>
        </div>
    );
}