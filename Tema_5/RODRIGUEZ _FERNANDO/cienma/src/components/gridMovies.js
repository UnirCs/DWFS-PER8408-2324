import "./gridMovies.css";
import { Movie } from "./movie";

export function MovieCatalog({ movieList }) {
  return (
    <div className="grid">
      {movieList.map((movie) => {
        return (
          <Movie
            title={movie.title}
            description={movie.description}
            genre={movie.genre}
            duration={movie.duration}
            rating={movie.rating}
            image={movie.image}
          />
        );
      })}
    </div>
  );
}
