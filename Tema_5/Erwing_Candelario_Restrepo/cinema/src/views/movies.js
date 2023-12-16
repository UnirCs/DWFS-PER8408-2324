import React from 'react';
import { Footer } from '../components/footer/footer';
import { Header } from '../components/header/header';
import { Movie } from '../components/movie/movie/movie';
import { MovieList } from '../components/movie/movieList/movieList';
import '../styles/styles.css';
export const Movies = () => {
	return (
		<div>
			<Header />
			<h2 className="center-text">Películas Disponibles</h2>
			<div className="card-container">
				{MovieList.map((movie, index) => (
					<Movie
						key={`movie-${index}`}
						titulo={movie.titulo}
						imagen={movie.imagen}
						sinopsis={movie.sinopsis}
						duracion={movie.duracion}
						genero={movie.genero}
						puntacion={movie.puntuacion}
					/>
				))}
			</div>
			<Footer />
		</div>
	);
};
