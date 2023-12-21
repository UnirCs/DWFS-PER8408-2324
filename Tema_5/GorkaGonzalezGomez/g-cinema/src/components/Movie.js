import React from "react";
import Button from "@mui/material/Button"

export const Movie = ({ titulo, imagen, duracion, sipnosis, genero, puntuacion }) => {
    return (
        <div className="card">
            <div className="movie">
                <div className="movie__info">
                    <h2>{titulo}</h2>
                    <p>{sipnosis}</p>
                    <p>{duracion}</p>
                    <p>Género: {genero}</p>
                    <p>Puntuación: {puntuacion} / 10</p>
                </div>
                <div className="movie__img">
                    <img src={imagen} alt="logo"/>
                </div>
            </div>
            <div className="card__button">
                <Button variant="contained" href="#outlined-buttons">
                    ¡Reserva tus asientos!
                </Button>
            </div>
        </div>
    );
}