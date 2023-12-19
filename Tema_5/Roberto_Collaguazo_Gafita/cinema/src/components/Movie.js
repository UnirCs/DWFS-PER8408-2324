import React from 'react';

export const Movie = ({ title, front, synopsis, duration, genre, score }) => {
    return (
        <div className='card bg-secondary m-3'>
            <div className='row no-gutters'>
                <div className='col-md-6 p-4 d-flex flex-column justify-content-between movie-description'>
                    <h2 className="movie-title">{title}</h2>
                    <p className="card-text"><b>Sinopsis:</b> {synopsis}</p>
                    <p className="card-text"><b>Duración:</b> {duration}</p>
                    <p className="card-text"><b>Género:</b> {genre}</p>
                    <p className="card-text"><b>Puntuación:</b> {score}/10</p>
                    <button className="btn btn-warning">Reservar</button>
                </div>
                <div className='col-md-6 portada'>
                    <img src={front} className='img-fluid' alt='Movie'></img>
                </div>
            </div>
        </div>
    )
}