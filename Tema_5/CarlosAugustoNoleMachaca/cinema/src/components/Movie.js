import React from "react";
import '../styles/styles.css';

export const Movie = ({ title, img, synopsis, duration, gender, rating }) => {
    return (
        <div className="card">
            <h3>{title}</h3>
            <img src={img} className="card-img" alt={title} width="184" height="273" />
            <p>Resumen: {synopsis}</p>
            <p>Duración: {duration}</p>
            <p>Género: {gender}</p>
            <p>Calificación: {rating} / 5</p>
            <button className="btn btn-outline-primary">Seleccionar Asientos</button>
        </div>
    );
}