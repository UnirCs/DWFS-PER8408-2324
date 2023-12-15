import React from "react";

export const Movie = ({ name, cuisine, rating, img }) => {
    return (
        <div className="card">
            <h3>{name}</h3>
            <p>Cocina: {cuisine}</p>
            <p>Calificación: {rating} / 5</p>
        </div>
    );
}