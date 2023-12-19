import React from 'react';
import '../styles/styles.css';
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {MovieList} from "../components/MovieList";

export const Movies = () => {
    return (
        <div>
            <Header />
            <MovieList />
            <Footer/>
        </div>
    );
}