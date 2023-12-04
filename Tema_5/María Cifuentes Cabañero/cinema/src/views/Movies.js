import React from 'react';
import '../styles/styles.css';
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {MovieList} from "../components/MovieList";

export const Movies = () => {
    const moviesList = [
        {titulo: "Napoleón", sinopsis: "'Napoleón' es un espectáculo lleno de épica y acción que detalla el enrevesado ascenso y caída del icónico Emperador francés Napoleón Bonaparte. La película muestra la incesante carrera de Bonaparte hasta el poder, a través del prisma de la adictiva y volátil relación con Josefina, la que fue su único amor verdadero, presentando sus visionarias tácticas políticas y militares a través de algunas de las secuencias prácticas de batallas más dinámicas jamás filmadas.", duracion:
                158, genero : "Acción, Biopic", puntuacion: 4.5},
        {titulo: "Napoleón", sinopsis: "'Napoleón' es un espectáculo lleno de épica y acción que detalla el enrevesado ascenso y caída del icónico Emperador francés Napoleón Bonaparte. La película muestra la incesante carrera de Bonaparte hasta el poder, a través del prisma de la adictiva y volátil relación con Josefina, la que fue su único amor verdadero, presentando sus visionarias tácticas políticas y militares a través de algunas de las secuencias prácticas de batallas más dinámicas jamás filmadas.", duracion:
                158, genero : "Acción, Biopic", puntuacion: 4.5},
    ];

    return (
        <div>
            <Header />
            <h2 className="cartelera">Cartelera</h2>
            <MovieList />
            <Footer />
        </div>
    );
}