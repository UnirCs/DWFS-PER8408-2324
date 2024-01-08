import React from 'react';
import '../styles/movie.css';

export const Movie = ({ pelicula }) => {
  return (
    <div className="movie">
      <h2>{pelicula.title}</h2>
      <img src={pelicula.image} alt={pelicula.title} />
      <p><spam className="label-movie">Sinopsis:</spam> {pelicula.sinopsis}<br/>
          <spam className="label-movie">Duración:</spam> {pelicula.duracion}<br/> 
          <spam className="label-movie">Género: </spam>{pelicula.genero}<br/>    
          <spam className="label-movie">Puntuación: </spam>{pelicula.puntuacion}<br/>    
      </p>
      <button className="button">Reservar</button>
    </div>
  );
};
