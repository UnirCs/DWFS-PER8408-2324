import React from "react";
import {Movie} from "./Movie";

export const MovieList = () => {
    const movies = [
        {
            titulo: "Napoleon",
            imagen: 'https://es.web.img2.acsta.net/r_1920_1080/pictures/23/10/18/15/26/3220184.jpg',
            sipnosis: "Una perspectiva íntima de los orígenes de Napoleón Bonaparte y su veloz " +
                "e implacable ascenso al trono, a través del enfoque de su cautivadora e inestable relación con su " +
                "esposa y único amor verdadero, Josefina.",
            duracion: "2h 38min",
            genero: "Aventura",
            puntuacion: 6.6,
        },
        {
            titulo: "Oppenheimer",
            imagen: 'https://i.ebayimg.com/images/g/CBkAAOSwDXJksxqv/s-l1200.webp',
            sipnosis: "La historia del científico J. Robert Oppenheimer y su rol en el desarrollo de la bomba atómica.",
            duracion: "3h",
            genero: "Biografia",
            puntuacion: 8.4,
        },
        {
            titulo: "Los asesinos de la luna",
            imagen: 'https://m.media-amazon.com/images/M/MV5BYTMyNWU5M2UtYjlhNi00NGRjLWEwMDQtNWFhMjI0OTE2YTQwXkEyXkFqcGdeQXVyMzUxNTM4ODc@._V1_FMjpg_UX595_.jpg',
            sipnosis: 'En la década de 1920 en los Estados Unidos, miembros de la tribu Osage son asesinados bajo ' +
                'misteriosas circunstancias, provocando una importante investigación del FBI involucrando a J. Edgar ' +
                'Hoover.',
            duracion: "3h 26min",
            genero: "Crimen",
            puntuacion: 7.9,
        },
        {
            titulo: "Los juegos del hambre: Balada de pájaros cantores y serpientes",
            imagen: 'https://m.media-amazon.com/images/M/MV5BZTJkZTlmZDItMjIzYS00YjlmLWExMGQtMjFmNWI4YTg5NzU0XkEyXkFqcGdeQXVyNDc0MDkxNTA@._V1_FMjpg_UY2807_.jpg',
            sipnosis: 'Coriolanus Snow ejerce de mentor y desarrolla sentimientos hacia la tributo femenina del Distrito ' +
                '12 durante los X Juegos del Hambre.',
            duracion: "2h 37min",
            genero: "Acción",
            puntuacion: 7.2,
        },
        {
            titulo: "Wonka",
            imagen: 'https://m.media-amazon.com/images/M/MV5BNzJiZGRkMDgtZWFlOS00MWRhLThhNTEtMjljZTJjYTljYTBjXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1012_.jpg',
            sipnosis: 'La historia se centrará específicamente en un joven Willy Wonka y en cómo conoció a los ' +
                'Oompa-Loompas en una de sus primeras aventuras.',
            duracion: "1h 56min",
            genero: "Aventura",
            puntuacion: 7.5,
        },
        {
            titulo: "Secretos de un escándalo",
            imagen: 'https://m.media-amazon.com/images/M/MV5BMjkyMjI5NmQtM2RkNS00YTU4LTlhOGQtMzg3NGExMzU2OTkzXkEyXkFqcGdeQXVyMTM1NjM2ODg1._V1_FMjpg_UX550_.jpg',
            sipnosis: 'Veinte años después de que su notorio romance de tabloide se apoderara de la nación, una pareja ' +
                'casada se enfrenta a la presión cuando una actriz llega a hacer una investigación para una película ' +
                'sobre su pasado.',
            duracion: "1h 57min",
            genero: "Comedia",
            puntuacion: 7.1,
        }
    ];

    return (
        <div className="movies-container">
            {movies.map((movie, index) => (
                <Movie
                    key={index}
                    titulo={movie.titulo}
                    imagen={movie.imagen}
                    sipnosis={movie.sipnosis}
                    duracion={movie.duracion}
                    genero={movie.genero}
                    puntuacion={movie.puntuacion}
                />
            ))}
        </div>
    )
}