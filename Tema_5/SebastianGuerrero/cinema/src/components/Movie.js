import React from "react";

export const Movie = ({title, image, synopsis, duration, gender, puntuation}) => {
    return (

        <div className="col-sm-6">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <img className="card-image"  src={image} alt={title}/>
                    <p className="card-text">Sinopsis: {synopsis}</p>
                    <p className="card-text">Duración: {duration}</p>
                    <p className="card-text">Genero: {gender}</p>
                    <p className="card-text">Puntuación: {puntuation}</p>
                    <button className="btn btn-light">Asientos</button>
                </div>
            </div>
        </div>

    );
}