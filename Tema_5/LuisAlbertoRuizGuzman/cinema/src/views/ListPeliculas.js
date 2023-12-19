import React from 'react';
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {Movie} from "../components/Movie";
import {peliculas} from "../components/MovieList";
import '../styles/listPeliculas.css';

export const ListPeliculas = () => {
    return (
        <div>
            <Header />
            <main>
                <div className='contenedor-peliculas'>
                    {peliculas.map(pelicula => <Movie key={pelicula.id} pelicula={pelicula} />)}
                </div>
            </main>
            <Footer />
        </div>
    );
};
