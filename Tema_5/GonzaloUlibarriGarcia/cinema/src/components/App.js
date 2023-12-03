import '../App.css';
import React from "react";
import peliculas from "./MovieList";
import Movie from "./Movie";
import "../styles/app.css"
function App() {
  return (
      <div className="tarjeta">
      {peliculas.map((movie, index) => (
          <Movie
              key={index}
              titulo={movie.titulo}
              sinopsis={movie.sinopsis}
              duracion={movie.duracion}
              imagen={movie.imagen}
              genero={movie.genero}
              puntuacion={movie.puntuacion}

          />
          )
      )
      }
      </div>
     )

}


export default App;
