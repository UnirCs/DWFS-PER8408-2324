import React from 'react';

import '../App.css';
import '../Style/Style.css';
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {MovieList} from "../components/MovieList";

export const Movies = () => {
    const movies = [
        {
          "title": "Megalodon 2",
          "image": "https://es.web.img2.acsta.net/c_310_420/pictures/23/05/09/10/42/0347977.jpg",
          "synopsis": "El pesesito",
          "duracion": 175,
          "genero": "Playa",
          "puntuacion": 9.0
        },
        {
          "title": "Hombre de negro 4",
          "image": "https://es.web.img3.acsta.net/c_310_420/pictures/14/06/20/11/52/053731.jpg",
          "synopsis": "Los mata vichos",
          "duracion": 95,
          "genero": "Ciencia Ficción",
          "puntuacion": 8.7
        },
        {
          "title": "Los vengadores",
          "image": "https://es.web.img3.acsta.net/c_310_420/pictures/14/03/10/10/35/587504.jpg",
          "synopsis": "Lo peliones",
          "duracion": 195,
          "genero": "Ficción",
          "puntuacion": 8.6
        },
        {
          "title": "Guardianes de la Galaxia",
          "image": "https://hips.hearstapps.com/hmg-prod/images/guardianes-de-la-galaxia-2-1525788025.jpg?crop=1xw:1xh;center,top&resize=980:*",
          "synopsis": "Los extraterrestes",
          "duracion": 142,
          "genero": "Ficción",
          "puntuacion": 8.6
        }
    ]
    return (
        <div>
            <Header />
            <MovieList
                movies={movies}
            />
            <Footer />
        </div>
    );
}