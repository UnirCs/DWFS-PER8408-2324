import React from "react"
import '../styles/movielist.css';

  class Pelicula {
    constructor(titulo, imagen, sinopsis, duracion, genero, puntuacion) {
        this.titulo = titulo;
        this.imagen = imagen;
        this.sinopsis = sinopsis;
        this.duracion = duracion;
        this.genero = genero;
        this.puntuacion = puntuacion;
    }
  }
    
  const pelicula1 = new Pelicula('La Máscara del Zorro', 'url', 'sinopsis....', 'Aventura', 8);
  const pelicula2 = new Pelicula('La naranja mecánica', 'url', 'sinopsis....', 'Crímen', 7);
  const pelicula3 = new Pelicula('El diario de Noa', 'url', 'sinopsis....', 'Romántica', 9);

export const MovieList = () => {

    return <body className="app-movielist">
         <h1>Listado de Películas</h1>
        <ul>
        <li>{pelicula1.titulo}</li>
        <li>{pelicula2.titulo}</li>
        <li>{pelicula3.titulo}</li>
        </ul>
    </body>

}