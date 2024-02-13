import React from 'react';

function Movie({ movie }) {
  return (
    <div>
      <h2>{movie.title}</h2>
      <img src={movie.image} alt={movie.title} />
      <p>{movie.synopsis}</p>
      <p>Duración: {movie.duration}</p>
      <p>Género: {movie.genre}</p>
      <p>Puntuación: {movie.rating}</p>
      <button onClick={()=>window.location.href='#'}>Seleccionar asientos</button>
    </div>
  );
}

export default Movie;
