import React from "react";
import {Movie} from "./Movie";

export const MovieList = () => {
    const movies = [
        {
            title: "WONKA",
            imgSrc: "https://www.ocinegavarres.es/images/pelicules/5982.jpg",
            synopsis: "Basada en el extraordinario personaje que protagoniza \"Charlie y la fábrica de chocolate\", el libro infantil más emblemático de Roald Dahl y uno de los más populares de todos los tiempos, \"Wonka\" cuenta la maravillosa historia de cómo el mayor inventor, mago y chocolatero del mundo se convirtió en el Willy Wonka que hoy conocemos.",
            duration: "117min ",
            genre: "Aventura, Comedia, Fantasía, Musical",
            rating: "4.6",
        },
        {
            title: "EL CASCANUECES",
            imgSrc: "https://www.ocinegavarres.es/images/pelicules/5664.jpg",
            synopsis: "Únase a Clara y su magnífica fiesta de Nochebuena, que se convierte en una aventura mágica cuando todos los demás se van a la cama. Déjese llevar por el esplendor de la composición de Chaikovski mientras Clara y su cascanueces encantado se enfrentan al Rey de los ratones y visitan al Hada de azúcar y su Príncipe en el cautivador Reino de los dulces. La aclamada producción de Peter Wright para el Royal Ballet, con preciosos diseños de época de Julia Trevelyan Oman, conserva la esencia de este animado ballet clásico, combinando el encanto del cuento de hadas con una danza clásica espectacular.",
            duration: "170min",
            genre: "Ballet en directo",
            rating: "4.5",
        },
        {
            title: "OCHO APELLIDOS MARROQUÍS",
            imgSrc: "https://www.ocinegavarres.es/images/pelicules/5937.jpg",
            synopsis: "Carmen (Elena Irureta) quiere cumplir el último deseo de José María, su marido y patriarca de la familia: recuperar el sardinero, el primer pez de su flota, que está fondeado en un puerto marroquí. En el viaje de Cantabria a Marruecos acompañarán a su hija Begoña (Michelle Jenner) y a su ex, Guillermo (Julián López), desesperados por recuperar su amor. Entre juegos culturales descubrirán también el gran secreto de Josep Maria: Hamida (María Ramos), su otra hija.",
            duration: "97min",
            genre: "Comedia",
            rating: "3.9",
        },
        {
            title: "LA NAVIDAD EN SUS MANOS",
            imgSrc: "https://www.ocinegavarres.es/images/pelicules/6073.jpg",
            synopsis: "Unos días antes de Navidad, el Padre Noel (Santiago Segura), tiene un accidente de trineo en el centro de Madrid y acaba en el hospital. Por suerte, Salva (Ernesto Sevilla), su compañero de piso, puede sustituirle en su sagrada tarea navideña. Aunque es un buscavidas más acostumbrado a vender coches robados que a repartir regalos. Unos días antes de Navidad, el Padre Noel (Santiago Segura), tiene un accidente de trineo en el centro de Madrid y acaba en el hospital. Por suerte, Salva (Ernesto Sevilla), su compañero de piso, puede sustituirle en su sagrada tarea navideña. Aunque es un buscavidas más acostumbrado a vender coches robados que a repartir regalos.",
            duration: "95min",
            genre: "Comedia",
            rating: "4.2",
        },
        {
            title: "ROBOT DREAMS",
            imgSrc: "https://www.ocinegavarres.es/images/pelicules/6099.jpg",
            synopsis: "Dog es un chico solitario que vive en Manhattan. Un día decide construirse un robot, un amigo. Su amistad crece, hasta que se hacen inseparables, al ritmo del Nueva York de los años veinte. Una noche de verano, Dog se ve obligado a dejar a Robot en la mesa. ¿Volverán a encontrarse?",
            duration: "102min",
            genre: "Animación",
            rating: "4.3",
        },
        {
            title: "NAPOLEÓN",
            imgSrc: "https://www.ocinegavarres.es/images/pelicules/5940.jpg",
            synopsis: "Una mirada personal a los orígenes del líder militar francés y su rápido y despiadado ascenso a emperador. La historia se ve a través de la lente de la relación adictiva y volátil de Napoleón Bonaparte con su esposa y único amor verdadero, Josefina.",
            duration: "159min",
            genre: "Drama",
            rating: "4.8",
        }
    ];
    return(
        <div className="movie-list-container">
            {movies.map((movie, index) => (
                <Movie
                    key={index}
                    title={movie.title}
                    imgSrc={movie.imgSrc}
                    synopsis={movie.synopsis}
                    duration={movie.duration}
                    genre={movie.genre}
                    rating={movie.rating}
                />
            ))}
        </div>
    );
}