import React from "react";
import {Movie} from "./Movie";

export const MovieList = () => {

    const movies = [
            {title: "Sala de profesores", image: "https://pics.filmaffinity.com/das_lehrerzimmer-488995644-mmed.jpg", synopsis :"Carla Nowak, una idealista profesora de matemáticas y deportes, comienza su primer trabajo en una escuela de secundaria. Cuando se producen una serie de robos en la escuela y se sospecha de uno de sus alumnos, decide llegar al fondo del asunto por su cuenta. Carla intenta mediar entre padres indignados, colegas obstinados y estudiantes agresivos, pero se enfrenta a las implacables estructuras del sistema escolar.", duration : "96 min", gender : "Drama | Colegios & Universidad. Enseñanza", puntuation: "8.5"},
            {title: "Los tres mosqueteros: Milady", image: "https://pics.filmaffinity.com/les_trois_mousquetaires_milady-426184565-mmed.jpg", synopsis :"Desde el museo del Louvre al Palacio de Buckingham, pasando por las alcantarillas de París al asedio de La Rochelle... En un reino dividido por guerras religiosas y bajo la amenaza constante de la invasión británica, un grupo de hombres y mujeres empuñarán sus espadas y unirán su destino al de Francia.", duration : "115 min", gender : "Aventuras | Capa y espada. Secuela", puntuation: "7.5/10"},
            {title: "Pobres criaturas", image: "https://pics.filmaffinity.com/poor_things-235700969-mmed.jpg", synopsis :"Bella Baxter es una joven revivida por el brillante y poco ortodoxo científico Dr. Godwin Baxter. Bajo la protección de Baxter, Bella está ansiosa por aprender. Hambrienta de la mundanidad que le falta, Bella se escapa con Duncan Wedderburn, un sofisticado y perverso abogado, en una aventura vertiginosa a través de los continentes. Libre de los prejuicios de su época, Bella se vuelve firme en su propósito de defender la igualdad y la liberación.", duration : "141 min", gender : "Fantástico. Romance. Ciencia ficción. Comedia. Drama | Erótico. Siglo XIX. Realismo mágico", puntuation: "9.1"},
            {title: "Rodeo", image: "https://pics.filmaffinity.com/rodeo-555733622-mmed.jpg", synopsis :"Julia, una joven inadaptada, sale adelante con sus pequeños trapicheos y tiene una pasión voraz, casi animal, por el motociclismo. Un día de verano, conocerá a una pandilla de moteros aficionados al motocross sobre asfalto, una moda que consiste en conducir a toda velocidad y realizar figuras acrobáticas con la moto, casi siempre sin casco. La protagonista se infiltrará en este universo clandestino, formado principalmente por chicos jóvenes, hasta que un accidente pone en riesgo su posición en la pandilla.", duration : "110 min", gender : "Drama | Motos", puntuation: "9.2"},
            {title: "Faro", image: "https://pics.filmaffinity.com/faro-213593399-mmed.jpg", synopsis :"Tras presenciar la muerte accidental de su madre, Lidia y su padre se refugian en un faro para lidiar con el dolor. Pero desde que llegan, las pesadillas se apoderan de Lidia, dañando aun más la relación con él. Ambos tendrán que aprender a confiar el uno en el otro antes de que las pesadillas se conviertan en reales", duration : "99 min", gender : "Thriller. Terror | Thriller psicológico", puntuation: "7.6"},
            {title: "Misántropo", image: "https://pics.filmaffinity.com/to_catch_a_killer-303581073-mmed.jpg", synopsis :"Baltimore, la noche de Año Nuevo. Un feroz ataque producido por un único hombre deja un saldo de 29 muertos y ni una sola pista. Eleanor Falco (Shailene Woodley), una retraída pero talentosa mujer policía de bajo rango, es reclutada por el agente especial del FBI Geoffrey Lammark (Ben Mendelsohn) para integrar el equipo a cargo de la identificación y captura del homicida.", duration : "119 min", gender : "Thriller. Intriga. Drama | Policíaco. Asesinos en serie", puntuation: "9.6"}
        ]

    return (
        <div className="container">
            <h2>Peliculas disponibles</h2>
            <div className="row">
                {movies.map((movie, index) => (
                        <Movie
                            title={movie.title}
                            image={movie.image}
                            synopsis={movie.synopsis}
                            duration={movie.duration}
                            gender={movie.gender}
                            puntuation={movie.puntuation}
                        />


                ))}
            </div>
        </div>
    )
}