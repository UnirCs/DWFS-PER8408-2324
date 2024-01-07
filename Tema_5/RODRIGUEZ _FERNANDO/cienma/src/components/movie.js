import "./movie.css";

export function Movie({ title, description, genre, duration, rating, image }) {
  return (
    <div className="movies">
      <div className="movie-title">{title}</div>

      <div className="movie-image-div">
        <img src={image} alt={title} className="movie-image" />
      </div>

      <div className="movie-description">{description}</div>

      <div className="wrapper">
        <div className="movie-detail-title">Genre</div>
        {genre}
        <div className="movie-detail-title">Duration</div>
        {duration}
        <div className="movie-detail-title">Rating</div>
        {rating}
      </div>

      <div className="movie-button">
        <button>Buy tickets</button>
      </div>
    </div>
  );
}
