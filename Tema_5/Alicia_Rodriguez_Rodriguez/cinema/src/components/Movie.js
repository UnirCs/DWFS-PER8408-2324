import React from 'react';
import '../styles/movie.css';


export const Movie = ({index, title, image, synopsis, length, genre, score}) =>{
    return (
        <div className="movie-container">
            <h3>Pelicula: {title}</h3>
            <img className="image" src={image}/>
            <div className="movie-container--info">
                <p>SINOPSIS:</p><p>{synopsis}</p>
                <p>DURACIÓN:</p><p>{length}</p>
                <p>GÉNERO:</p><p>{genre}</p>
                <p>PUNTUACIÓN:</p><p>{score}</p>
            </div>
            <button className="button">Reservar</button>
        </div>
    );
}