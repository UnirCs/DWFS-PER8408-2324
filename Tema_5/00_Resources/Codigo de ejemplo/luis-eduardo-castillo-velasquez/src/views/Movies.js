import React from "react";
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {MoviesList} from "../components/MovieList";
import '../styles/styles.css';
export const Movies = () => {
    const moviesData = [
        {
            titulo: "SLEP",
            imagen: "https://archivos-cms.cinecolombia.com/images/_aliases/poster_card/1/8/3/1/51381-1-esl-CO/545116d0927c-480x670.jpg",
            sinopsis: "Sleep es una película surcoreana de 2023, escrita y dirigida por Yoo Jae-seon y protagonizada por Jung Yu-mi y Lee Sung-kyun.",
            genero: "Terror",
            duracion: 128,
            puntuacion: 9.8 },
        {
            titulo: "THE LAKE",
            imagen: "https://archivos-cms.cinecolombia.com/images/_aliases/poster_card/1/7/3/0/40371-1-esl-CO/fecec796e911-poster_480x670.png",
            sinopsis: "Una mujer pierde el tren y debe evadir a un asesino que la acecha en los túneles del metro londinense.",
            genero: "Terror",
            duracion: 104,
            puntuacion: 8.0 },
        {
            titulo: "AQUAMAN",
            imagen: "https://archivos-cms.cinecolombia.com/images/_aliases/poster_card/1/4/4/9/49441-1-esl-CO/4a01e94b2e5f-480x670.jpg",
            sinopsis: "Aquaman es una película de superhéroes estadounidense de 2018. Está basada en el personaje del mismo nombre de DC Comics y distribuida por Warner Bros.",
            genero: "Accion",
            duracion: 120,
            puntuacion: 5.8 },
        {
            titulo: "THE HAUTING OF THE QUEEN",
            imagen: "https://archivos-cms.cinecolombia.com/images/_aliases/poster_card/3/3/7/1/51733-1-esl-CO/b6d342e3968d-qmry_exhib_cineco_pstr-dskp_480x670.png",
            sinopsis: "La Maldición del Queen Mary es una película de terror británica de 2023 dirigida por Gary Shore y protagonizada por Alice Eve y Joel Fry.",
            genero: "Terror",
            duracion: 189,
            puntuacion: 10 }
    ];

    return (
        <div>
            <Header/>
            <MoviesList movie={moviesData}/>
            <Footer/>
        </div>
    );
};