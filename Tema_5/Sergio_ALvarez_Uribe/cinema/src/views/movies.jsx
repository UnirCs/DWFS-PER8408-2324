import React from 'react';
import ReactDOM from 'react-dom/client';

import { Header } from '../components/Header.jsx';
import { Movie } from '../components/Movie.jsx';
import { MovieList } from '../components/MovieList.jsx';
import { Footer } from '../components/Footer.jsx';


export const Movies = () => {

    return <main className="app-movies">
        <Header pelicula_destacada="El Zorro"></Header>
        <MovieList></MovieList>
        <Movie></Movie>    
        <Footer></Footer>    
    </main>


}


