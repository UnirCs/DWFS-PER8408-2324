export const Movie = ({movie}) => {
    return (
        <div className="card">
          <div className="d-flex card-body align-items-start justify-content-center">
            <img className="d-inline-block card-image" src={movie.image} alt={movie.title}/>
            <div className="d-inline-block col m-2">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">{movie.sinopsis}</p>
                <p className="card-text">
                    <strong>Rating</strong>: {movie.rating}
                </p>
                <p className="card-text">
                    <strong>Duration</strong>: {movie.duration} mins
                </p>
                <p className="card-text">
                    <strong>Genre</strong>: {movie.genre}
                </p>
            </div>
          </div>
          <a href="#" className="btn btn-primary">Comprar entradas</a>
        </div>
    )
}