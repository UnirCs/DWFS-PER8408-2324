import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {Movie} from "../components/Movie";
import venganzaSilenciosaImg from '../img/venganzaSilenciosa.jpg'
import wonkaImg from '../img/wonka.jpg'
import laCriaturaDelLagoImg from '../img/laCriaturaDelLago.jpg'
import codigoEnigmaImg from '../img/codigoEnigma.jpg'
import harryPotterOrdenDelFenixImg from '../img/harryPotterOrdenDelFenix.jpg'
import jokerImg from '../img/joker.jpg'
import johnWickImg from '../img/johnWick.jpg'
import infinityWarImg from '../img/infinityWar.jpg'
import {DarkMode} from "../components/DarkMode";

export const Home = () => {
    const movies = [
        {
            title: "Harry Potter y la Orden del Fénix",
            description: "Nueva aventura de Harry Potter...",
            image: harryPotterOrdenDelFenixImg,
            duration: 180,
            genre: "Magia, Aventura, Fantasía",
            rating: 10.0,
            premiere: false
        },
        {
            title: "Venganza Silenciosa",
            description: "Sumérgete en esta historia de venganza...",
            image: venganzaSilenciosaImg,
            duration: 110,
            genre: "Acción",
            rating: 9.0,
            premiere: true
        },
        {
            title: "Código Enigma",
            description: "La historia de Alan Turing...",
            image: codigoEnigmaImg,
            duration: 140,
            genre: "Drama, Tecnología, Historia",
            rating: 9.8,
            premiere: false
        },
        {
            title: "Wonka",
            description: "Descubre esta gran historia de Wonka...",
            image: wonkaImg,
            duration: 120,
            genre: 'Aventura, Comedia, Familiar',
            rating: 8.5,
            premiere: true
        },
        {
            title: "El Joker",
            description: "La historia del Joker...",
            image: jokerImg,
            duration: 185,
            genre: "Drama, Suspenso, Acción",
            rating: 9.9,
            premiere: false
        },
        {
            title: "La Criatura del Lago",
            description: "Impactante historia de la criatura del lago...",
            image: laCriaturaDelLagoImg,
            duration: 150,
            genre: "Terror, Suspenso, Ciencia Ficción",
            rating: 8.0,
            premiere: false
        },
        {
            title: "John Wick 4",
            description: "Cuarta entrega de John Wick...",
            image: johnWickImg,
            duration: 170,
            genre: "Acción, Suspenso",
            rating: 9.6,
            premiere: false
        },
        {
            title: "Avengers Infinity War",
            description: "Una aventura más de los Avengers...",
            image: infinityWarImg,
            duration: 210,
            genre: "Superhéroes, Acción, Aventura",
            rating: 9.8,
            premiere: false
        }
    ];

    return (
        <div>
            <Header/>
            <DarkMode/>
            <section className="multiline">
                {movies.map((movie) => (
                    <Movie
                        title={movie.title}
                        description={movie.description}
                        image={movie.image}
                        duration={movie.duration}
                        genre={movie.genre}
                        rating={movie.rating}
                        premiere={movie.premiere}
                    />
                ))}
            </section>
            <Footer/>
        </div>
    );
}