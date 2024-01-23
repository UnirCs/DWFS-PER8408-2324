import React from "react";
import '../styles/movie.css'

export const Movie= ({title, caratula, sinopsis, duration,genre,puntuation}) =>{
    return (
        <div className="card">
            <h3>{title}</h3>
            <img className="card-caratula" src={caratula} alt="Carátula de la película"/>
            <div className="card-sinopsis">
                <p>Sinopsis: {sinopsis}</p>
            </div>
            <p>Duración: {duration}</p>
            <p>Género: {genre}</p>
            <p>Calificación: {puntuation} / 10</p>
            <button >Elegir butacas</button>
        </div>
    );
}