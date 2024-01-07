import React from "react";

export const Movie = ({ poster, title, synopsis, duration, genre, rating}) => {
    return (
        <div className="card">
            <img src={`../poster/${poster}.jpg`} alt="Poster" />
            <div className="movieInf">
                <h3>{title}</h3>
                <p>Sinopsis: {synopsis}</p>
                <div className="extraInf">
                    <p>Duracion: {duration}</p>
                    <p className="genre">Genero: {genre}</p>
                </div>
                <div className="extraInf">
                    <p>Calificación: {rating} / 5</p>
                    <button>Rerservar asientos</button>
                </div>
            </div>
        </div>
    );
}