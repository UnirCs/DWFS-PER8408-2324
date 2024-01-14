import React from 'react';
import '../styles/Movies.css';
import {Header} from "../components/Header";
import {Carousel} from "../components/Carousel";
import {Navbar} from "../components/Navbar";
import {MovieList} from "../components/MovieList";
import {Footer} from "../components/Footer";

export const Movies = () => {
    return (
        <div className="container">
            <Header />
            <Carousel />
            <Navbar />
            <MovieList />
            <Footer />
        </div>
    );
}