import {Movie} from "./Movie";

export const MovieList = ({ movies }) => {
    return (
        <div className="movie-container">
            { movies.map((movie, index) => (
               <Movie movie={movie} />
            ))}
        </div>
    )
}