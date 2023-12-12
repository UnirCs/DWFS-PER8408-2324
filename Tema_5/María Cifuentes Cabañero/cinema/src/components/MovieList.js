import {Movie} from "./Movie";
import React from "react";

export const MovieList = () => {
    const moviesList = [
        {
            titulo: "Un lugar tranquilo",
            images : "https://pics.filmaffinity.com/a_quiet_place-854286921-mmed.jpg",
            sinopsis: "Evelyn (Emily Blunt) y Lee (John Krasinski) Abbott son una pareja con tres hijos que vive una granja aislada de toda civilización al norte de Nueva York. Esta familia ha sobrevivido durante meses en un mundo invadido y amenazado por mortales criaturas extraterrestres que se guían por el sonido para cazar. En este contexto en el que una palabra puede significar la muerte, la familia Abbott vive silenciosamente, andan descalzos y se comunican por medio del lenguaje de señas.",
            duracion: 95,
            genero: "Terror. Intriga. Thriller. Fantástico | Thriller psicológico. Supervivencia. Futuro postapocalíptico. Discapacidad auditiva. Monstruos. Familia",
            puntuacion: 4.5
        },
        {
            titulo: "One Piece Film Red",
            images: "https://pics.filmaffinity.com/one_piece_film_red-407711303-mmed.jpg",
            sinopsis: "Uta, la cantante número uno del mundo, se dispone a dar su primer concierto en directo frente a un público formado por piratas, marines y toda clase de fans. Uta está considerada la cantante más querida de todo el mundo. A pesar de que siempre ha ocultado su identidad, se dice que su voz al cantar es tan maravillosa que parece proceder de “otra dimensión”. Ahora, se celebrará un concierto en directo en el que aparecerá en persona por primera vez frente al público. La tan esperada voz que todo el mundo quiere oír se dispone a resonar mientras multitud de coloridos piratas, marines que no le quitan el ojo de encima, los Piratas de Sombreros de Paja de Luffy, quien se siente atraído por la voz de Uta sin saber nada, y toda clase de fans de Uta llenan el lugar. La historia arranca con la impactante revelación de que Uta es la hija de Shanks.",
            duracion: 115,
            genero: "Animación. Acción. Aventuras. Fantástico. Comedia | Piratas. Música. Manga",
            puntuacion: 10
        },
        {
            titulo: "POKÉMON: LA PELÍCULA",
            images: "https://pics.filmaffinity.com/pokemon_the_first_movie_mewtwo_strikes_back-636157797-mmed.jpg",
            sinopsis: "Un equipo científico trabaja en el más estricto secreto en la creación del Pokémon más poderoso de todos los tiempos. Tras descubrir en el Amazonas un pelo fosilizado del Pokémon Mew, los genetistas establecen el código de ADN de este monstruo legendario y, a partir de él, fabrican un clon: Mewtwo. Pero, en cuanto el gigante despierta, se vuelve contra sus creadores, masacrándolos.",
            duracion: 75,
            genero: "Animación. Aventuras. Ciencia ficción. Fantástico. Infantil | Pokémon. Videojuego",
            puntuacion: 9.5
        },
        {
            titulo: "Mamma Mia!",
            images: "https://www.ecartelera.com/carteles/1900/1908/001_p.jpg",
            sinopsis: "Versión cinematográfica del popular musical de ABBA. Una joven (Amanda Seyfried) que ha crecido en una pequeña isla griega, ha sido educada por una madre rebelde y poco convencional (Streep), que siempre se ha negado a revelarle la identidad de su padre. Cuando, por fin, parece que la joven está a punto de saberlo, aparecen tres posibles candidatos (Brosnan, Firth y Skarsgard)",
            duracion: 108,
            genero: "Musical. Comedia. Romance | Música. Bodas",
            puntuacion: 9.7
        },
    ];

    return (
        <div className="cartelera-container">
            {moviesList.map((movie, index) => (
                <Movie
                    key={index}
                    titulo={movie.titulo}
                    imagen={movie.images}
                    sinopsis={movie.sinopsis}
                    duracion={movie.duracion}
                    genero={movie.genero}
                    puntuacion={movie.puntuacion}
                    boton={movie.boton}
                />
            ))}
        </div>
    );
}