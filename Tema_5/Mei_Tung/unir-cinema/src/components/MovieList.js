import React from "react";
import '../styles/Movies.css';
import {Movie} from "./Movie";

export const MovieList = () => {
    const movies = [
        {
            title: "Candy Cane Lane",
            genres: ["Comedia", "Familiar", "Fantasía"],
            image: "https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Candy_cane_lane_poster.jpg/220px-Candy_cane_lane_poster.jpg",
            duration: "1h 57min",
            rating: 5.6,
            synopsis: "Un hombre está decidido a ganar el concurso anual de decoración navideña del barrio. Hace un pacto con un elfo para que le ayude a ganar y el elfo lanza un hechizo que da vida a los 12 días de Navidad, provocando el caos en la ciudad."
        }, {
            title: "Noche de paz",
            genres: ["Acción", "Suspenso"],
            image: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8b/Silent_Night_2023_poster.jpg/220px-Silent_Night_2023_poster.jpg",
            duration: "1h 44min",
            rating: 5.8,
            synopsis: "Un padre afligido lleva a cabo su tan esperada venganza contra una banda despiadada en Nochebuena."
        }, {
            title: "Plan en familia",
            genres: ["Acción", "Comedia"],
            image: "https://upload.wikimedia.org/wikipedia/en/thumb/8/81/The-Family-Plan-Poster.webp/220px-The-Family-Plan-Poster.webp.png",
            duration: "1h 58min",
            rating: 8.5,
            synopsis: "Un antiguo asesino de alto rango que vive de incógnito como padre de los suburbios debe llevar a su desprevenida familia a la fuga cuando su pasado lo alcanza."
        }, {
            title: "Rebel Moon",
            genres: ["Acción", "Aventura", "Drama"],
            image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/19/Rebel_moon_part1_poster.jpg/220px-Rebel_moon_part1_poster.jpg",
            duration: "2h 13min",
            rating: 9.2,
            synopsis: "Una joven busca guerreros de otros planetas para luchar contra los ejércitos tiránicos que aterrorizan a su pacífica colonia."
        }, {
            title: "Los juegos del hambre",
            genres: ["Acción", "Aventura", "Drama"],
            image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/96/The_Hunger_Games_-_The_Ballad_of_Songbirds_%26_Snakes_official_poster.jpg/220px-The_Hunger_Games_-_The_Ballad_of_Songbirds_%26_Snakes_official_poster.jpg",
            duration: "2h 37min",
            rating: 7.2,
            synopsis: "Coriolanus Snow ejerce de mentor y desarrolla sentimientos hacia la tributo femenina del Distrito 12 durante los X Juegos del Hambre."
        }, {
            title: "Los Archies",
            genres: ["Comedia", "Drama", "Musical"],
            image: "https://m.media-amazon.com/images/M/MV5BOGZmOTUxYTYtOGExOC00ZjAwLTk5MTItN2Q3ZjIyYTYzY2Y0XkEyXkFqcGdeQXVyMTUyNjIwMDEw._V1_FMjpg_UY4096_.jpg",
            duration: "2h 21min",
            rating: 6.5,
            synopsis: "Ambientada en la India de los años sesenta, Archie y la pandilla se enfrentan a un romance, a la amistad y al futuro de Riverdale cuando los constructores amenazan con destruir un querido parque."
        }, {
            title: "Wonka",
            genres: ["Aventura", "Comedia", "Familiar"],
            image: "https://upload.wikimedia.org/wikipedia/en/9/90/Wonka_2023_film_poster.jpg",
            duration: "1h 56min",
            rating: 7.4,
            synopsis: "La historia se centrará específicamente en un joven Willy Wonka y en cómo conoció a los Oompa-Loompas en una de sus primeras aventuras."
        }, {
            title: "Mr. Monk's Last Case",
            genres: ["Comedia", "Crimen", "Misterio"],
            image: "https://media0033.elcinema.com/uploads/_640x_f6f9a971d0f1df5a6ffc1addbc3eba01b46dc4b24e04f9f468bc74e26fdc29ce.jpg",
            duration: "1h 37min",
            rating: 7.2,
            synopsis: "Sigue a Monk, un brillante detective con trastorno obsesivo-compulsivo. Regresa para resolver un último caso que involucra a su hijastra Molly, una periodista que se prepara para su boda."
        }
    ];

    return(
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
            {
                movies.map((movie, index) => (
                    <Movie
                        key={index}
                        title={movie.title}
                        genres={movie.genres}
                        image={movie.image}
                        duration={movie.duration}
                        rating={movie.rating}
                        synopsis={movie.synopsis} />
                ))
            }
        </div>
    );
}