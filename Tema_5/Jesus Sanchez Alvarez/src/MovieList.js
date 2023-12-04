import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Movie from './Movie';



const get_peliculas = () => {
    const images = require.context('./img', true);

    let pelis = [
        {
            titulo: 'Avatar2',
            imagen: images('./avatar2.jpeg'),
            sinopsis:'Entramos en el mundo Avatar de la mano de Jake Sully, un ex-Marine en silla de ruedas, que ha sido reclutado para viajar a Pandora, donde existe un mineral raro y muy preciado que puede solucionar la crisis energética existente en la Tierra.',
            duracion: '1 hora',
            genero: 'Ficción',
            puntuacion:'10'
        },

        {
            titulo: 'Barbie',
            imagen: images('./barbie.jpeg'),
            sinopsis:'Después de ser expulsada de Barbieland por no ser una muñeca de aspecto perfecto, Barbie parte hacia el mundo humano para encontrar la verdadera felicidad.',
            duracion: '1 hora',
            genero: 'Ficción',
            puntuacion:'10'
        },
        {
            titulo: 'Harry Potter',
            imagen: images('./harry potter.jpeg'),
            sinopsis:'El día en que cumple once años, Harry Potter descubre que es hijo de dos conocidos hechiceros, de los que ha heredado poderes mágicos. Deberá acudir entonces a una famosa escuela de magia y hechicería: Howards.',
            duracion: '1 hora',
            genero: 'Ficción',
            puntuacion:'10'
        },
        {
            titulo: 'Los Increibles',
            imagen: images('./los increibles.jpeg'),
            sinopsis: 'Un súper héroe retirado lucha contra el aburrimiento en un suburbio y junto con su familia tiene la oportunidad de salvar al mundo.',
            duracion: '1 hora',
            genero: 'Ficción',
            puntuacion:'10'
        },
        {
            titulo: 'Los vengadores',
            imagen: images('./los vengadores.jpeg'),
            sinopsis: 'Cuando un enemigo inesperado surge como una gran amenaza para la seguridad mundial, Nick Fury, director de la Agencia SHIELD, decide reclutar a un equipo para salvar al mundo de un desastre casi seguro. Adaptación del cómic de Marvel "Los Vengadores", el legendario grupo de superhéroes formado por Ironman, Hulk, Thor y el Capitán América entre otros.',
            duracion: '1 hora',
            genero: 'Ficción',
            puntuacion:'10'
        },
        {
            titulo: 'Toy Story',
            imagen: images('./toy story.jpeg'),
            sinopsis: 'Los juguetes de Andy, un niño de seis años, temen que un nuevo regalo les sustituya en el corazón de su dueño. Woody, un vaquero que ha sido hasta ahora el juguete favorito, trata de tranquilizarlos hasta que aparece Buzz Lightyear. Lo peor es que el arrogante Buzz se cree que es una auténtico astronauta en plena misión para regresar a su planeta.',
            duracion: '1 hora',
            genero: 'Ficción',
            puntuacion:'10'
        },
    ]
    return pelis
}

const MovieList = () =>{
  let  peliculas = get_peliculas()
  
  return (
    <div className="App container-fluid">
    <Row className='d-flex' xs={3}>
            {peliculas.map((e, index) => {
                 return (
                 <Movie key={index} peli={e} i = {index}/>
                )
            })}
    </Row>
    </div>
  );
}

export default MovieList;
