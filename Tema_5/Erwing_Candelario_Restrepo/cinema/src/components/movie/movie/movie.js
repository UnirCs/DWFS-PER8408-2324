import './movie.css';
export const Movie = ({ titulo, imagen, sinopsis, duracion, genero, puntacion }) => {
	return (
		<div className="card-item">
			<img src={imagen} alt="Imagen" />
			<h4>Título: {titulo}.</h4>
			<h4>Sinopsis: {sinopsis}.</h4>
			<h4>Duración: {duracion}.</h4>
			<h4>Genero: {genero}.</h4>
			<h4>Puntuación: {puntacion}.</h4>
			<div className="">
				<button type="button" className="button">
					Ir
				</button>
			</div>
		</div>
	);
};
