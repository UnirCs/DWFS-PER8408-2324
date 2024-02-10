import React from 'react';
import Movie from './Movie';
import '../styles/style.css';

function MovieList({ movies }) {
  return (
    <ul className='imagenes'>
      {movies.map(movie => (
        <li key={movie.title}>
          <Movie movie={movie} />
        </li>
      ))}
    </ul>
  );
}

export default MovieList;
