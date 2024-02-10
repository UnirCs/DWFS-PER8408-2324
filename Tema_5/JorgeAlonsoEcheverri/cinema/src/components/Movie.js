import React from "react";
import '../styles/styles.css';

export const Movie = ({title, description, image, duration, genre, rating, premiere}) => {

    return (
        <div className="movie">
            <div className="movie-details">
                <div className="movie-img">
                    <img src={image} alt={title}/>
                    {premiere ? <span className="premiere">Estreno</span> : ''}
                </div>
                <div className="movie-info">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <p><span className="movie-info-card">{duration} min</span></p>
                    <p>{genre}</p>
                    <p><span className="movie-info-card rating">{rating}</span><i className="bi bi-star-fill"></i></p>
                    <button type="submit" className="btn btn-primary">Comprar entradas</button>
                </div>
            </div>
        </div>
    )
}