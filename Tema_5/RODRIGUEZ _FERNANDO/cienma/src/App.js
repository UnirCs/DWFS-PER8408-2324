import "./App.css";
import { MovieCatalog } from "./components/gridMovies";
import { Movie } from "./components/movie";
import { moviesCatalog } from "./utils/moviesCatalog";

function App() {
  return (
    <>
      <header>PELIS FREE</header>
      <MovieCatalog movieList={moviesCatalog}></MovieCatalog>
      <footer>CINEMA -FER</footer>
    </>
  );
}

export default App;
