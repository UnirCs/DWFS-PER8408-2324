import React from 'react';
import '../styles/styles.css';
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {MovieList} from "../components/MovieList";
import imageTheMarvels from "../images/TheMarvels.jpeg";
import imageNapoleon from "../images/Napoleon.jpg";
import imageRadical from "../images/Radical.jpg";
import imageWish from "../images/Wish.jpg";
import imageHistorias from "../images/HistoriasparanoContar.jpg";
import imageWonka from "../images/Wonka.jpg";

export const Movies = () => {
    const movies = [
        {titulo: "The Marvels", imagen: imageTheMarvels, 
        sinopsis: "Carol Danvers, alias Capitana Marvel, ha recuperado su identidad de los tiránicos Kree y se ha vengado de la Inteligencia Suprema, pero las consecuencias imprevistas hacen que Carol cargue con el peso de un universo desestabilizado...", 
        duracion: "105 min", genero: "Acción, Aventura", calificacion: "3"},

        {titulo: "Napoleon", imagen: imageNapoleon, 
        sinopsis: "la película capta la implacable travesía de Bonaparte hacia el poder a través del prisma de su adictiva y volátil relación con su único y verdadero amor, Josefina...", 
        duracion: "158 min", genero: "Acción", calificacion: "4"},

        {titulo: "Radical", imagen: imageRadical, 
        sinopsis: "Radical narra la historia de Sergio Juárez -interpretado por el actor Eugenio Derbez-, un profesor que llega a una escuela abandonada en una ciudad fronteriza de México. Pese a las dificultades que se presentan, prueba un método radicalmente nuevo para desbloquear la curiosidad y el potencial de sus alumnos...", 
        duracion: "125 min", genero: "Drama", calificacion: "5"},

        {titulo: "Wish", imagen: imageWish, 
        sinopsis: "El reino de Rosas es un lugar mágico donde los deseos se cumplen… a veces...", 
        duracion: "92 min", genero: "Animación, Aventura, Comedia", calificacion: "4"},

        {titulo: "Historias para no Contar", imagen: imageHistorias, 
        sinopsis: "En clave de comedia, Historias para no contar narra situaciones en las que nos podemos reconocer y que preferiríamos no explicar o incluso olvidar...", 
        duracion: "100 min", genero: "Comedia, drama", calificacion: "3"},

        {titulo: "Wonka", imagen: imageWonka, 
        sinopsis: "Basada en el extraordinario personaje central de 'Charlie y la Fábrica de Chocolate', el libro infantil más icónico de Roald Dahl y uno de los libros infantiles más vendidos de todos los tiempos...", 
        duracion: "117 min", genero: "Aventura, Comedia", calificacion: "4"},
    ];

    return (
        <div>
            <Header/>
            <h2 className="center-text">Películas</h2>
            <MovieList
                movies = {movies}
            />
            <Footer/>
        </div>
    );
}
