import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Movie } from '../components/Movie';

export const MovieList = () => {
  const movies = [
    { title: "Spiderman Across The Spider-Verse", front: "/spiderman.jpg", synopsis: "Miles Morales se embarca en una aventura épica que transportará al simpático Spiderman de Brooklyn a través del Multiverso para unir fuerzas con Gwen Stacy y un nuevo equipo.", duration: "2h:20min", genre: "Superheroes", score: "8" },
    { title: "Matrix Resurrecciones", front: "/matrix4.jpeg", synopsis: "Acosado por extraños recuerdos, la vida de Neo toma un giro inesperado al encontrarse, nuevamente, dentro de la Matrix.", duration: "2h:28min", genre: "Acción/Ciencia ficción", score: "5" },
    { title: "Contrarreloj", front: "/contrarreloj.jpg", synopsis: "Matt, un empresario estadounidense que reside en Berlín, lleva a sus dos hijos en auto cuando, de improvisto, recibe una llamada.", duration: "1h:31min", genre: "Acción/Suspenso", score: "7" },
    { title: "Oppenheimer", front: "/oppenhimer.jpg", synopsis: "Durante la Segunda Guerra Mundial, el teniente general Leslie Groves designa al físico J. Robert Oppenheimer para un grupo de trabajo que está desarrollando el Proyecto Manhattan, cuyo objetivo consiste en fabricar la primera bomba atómica.", duration: "3h:00min", genre: "Suspenso/Suspenso", score: "9" },
    { title: "Los asesinos de la luna de las flores", front: "/killersmoon.jpg", synopsis: "En la década de 1920, los miembros de la tribu de nativos americanos del condado de Osage, en Oklahoma, son asesinados cuando se encuentra petróleo en sus tierras.", duration: "3h:26min", genre: "Crimen/Western", score: "8" },
    { title: "SAW X", front: "/sawx.jpg", synopsis: "John Kramer conoce a una persona que le promete curarle el cáncer en una clínica de la Ciudad de México. Tras descubrir que todo era una estafa, se venga de los timadores secuestrándolos y obligándolos a participar en un juego perverso.", duration: "1h:58min", genre: "Terror/Crimen", score: "6.5" },
  ];

  return (
    <div>
      <Header />

      <h2 className='movie-list-title'>Películas disponibles</h2>
      <div className='container'>
        <div className='row align-items-stretch'>
          {
            movies.map((movies, index) => (
              <div className='col-sm-6 d-flex'>
                <Movie
                  key={index}
                  title={movies.title}
                  front={movies.front}
                  synopsis={movies.synopsis}
                  duration={movies.duration}
                  genre={movies.genre}
                  score={movies.score}
                />
              </div>
            ))
          }
        </div>
      </div>
      <Footer />
    </div>
  )
}
