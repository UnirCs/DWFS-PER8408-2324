import React from "react";
import {Movie} from "./Movie";
import wish from '../img/wish.jpg';
import wonka from '../img/wonka.jpg';
import napoleon from '../img/napoleon.jpg';
import trolls_band_together from '../img/trolls_band_together.jpg';
import my_big_fat_greek_wedding_3 from '../img/my_big_fat_greek_wedding_3.jpg';
import radical from '../img/radical.jpg'

export const MovieList = () => {
    const movList =  [
        {
            titulo: "Wish: El poder de los deseos",
            imagen: wish,
            sinopsis: "Asha y una pequeña bola de energía ilimitada llamada Star demuestran que cuando la voluntad de un ser humano valiente se conecta con la magia de las estrellas, pueden suceder cosas maravillosas",
            duracion: 95,
            genero: "Animación. Fantástico. Aventuras. Comedia. Musical | Cine familiar",
            puntuacion: 5.6
        },
        {
            titulo: "Wonka",
            imagen: wonka,
            sinopsis: "Basada en el personaje que protagoniza 'Charlie y la fábrica de chocolate', el libro infantil más emblemático de Roald Dahl y uno de los más vendidos de todos los tiempos, 'Wonka' cuenta la historia de cómo el mayor inventor, mago y chocolatero del mundo se convirtió en el querido Willy Wonka que conocemos hoy en día, centrándose en su juventud y en cómo conoció a un Oompa-Loompa en una de sus primeras aventuras.",
            duracion: 115,
            genero: "Musical. Aventuras. Fantástico. Comedia | Cine familiar. Precuela",
            puntuacion: 6.8
        },
        {
            titulo: "Napoleon",
            imagen: napoleon,
            sinopsis: "Narra los orígenes del líder militar francés y su rápido e imparable ascenso de oficial del ejército a emperador de Francia. La historia se ve a través de la lente de la relación adictiva y volátil de Napoleón Bonaparte con su esposa y único amor verdadero, Josefina.",
            duracion: 158,
            genero: "Drama | Histórico. Biográfico. Siglo XVIII. Guerras Napoleónicas. Cine épico",
            puntuacion: 6.0
        },
        {
            titulo: "Trolls 3: Todos juntos",
            imagen: trolls_band_together,
            sinopsis: "Poppy y Branch son oficialmente, por fin, pareja (#broppy). A medida que se relacionan, Poppy descubre que Branch tiene un pasado secreto. Una vez formó parte de su fenómeno boyband favorito, BroZone, con sus cuatro hermanos: Floyd, John Dory, Spruce y Clay. BroZone se disolvió cuando Branch era todavía un bebé, al igual que la familia, y Branch no ha vuelto a ver a sus hermanos desde entonces. Pero cuando Floyd, el hermano de Branch, es secuestrado por sus talentos musicales por un par de nefastos villanos estrellas del pop, Velvet y Veneer, Branch y Poppy se embarcan en un angustioso y emotivo viaje para reunir a los otros hermanos y rescatar a Floyd de un destino aún peor que la oscuridad de la cultura pop.",
            duracion: 91,
            genero: "Animación. Comedia. Fantástico. Infantil | Secuela. Cine familiar",
            puntuacion: 5.1
        },
        {
            titulo: "Mi gran boda griega 3",
            imagen: my_big_fat_greek_wedding_3,
            sinopsis: "La familia Portokalos viaja a Grecia para asistir a una reunión familiar en un viaje conmovedor e hilarante lleno de amor, giros y sorpresas.",
            duracion: 91,
            genero: 'Comedia. Romance. Drama | Comedia romántica. Bodas. Secuela',
            puntuacion: 3.8
        },
        {
            titulo: "Radical",
            imagen: radical,
            sinopsis: "Un profesor de una ciudad fronteriza mexicana llena de abandono, corrupción y violencia, prueba un nuevo método radical para desbloquear la curiosidad y el potencial de sus alumnos, y puede que incluso su brillantez.",
            duracion: 122,
            genero: 'Drama | Basado en hechos reales. Enseñanza',
            puntuacion: 7.0
        }
    ];
    return (
        <div>            
            <div className="billboard-container">
                {movList.map((movie, index) => (
                    <Movie
                        key={index}
                        titulo={movie.titulo}
                        imagen={movie.imagen}
                        sinopsis={movie.sinopsis}
                        duracion={movie.duracion}
                        genero={movie.genero}
                        puntuacion={movie.puntuacion}
                    />
                ))}
            </div>
        </div>
    );
}