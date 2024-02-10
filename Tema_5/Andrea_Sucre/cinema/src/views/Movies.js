import '../styles/styles.css';
import {MovieList} from "../components/MovieList";

export const Movies = () => {
    const movies = [
        {
            title: "Digimon Adventure 02: The Beginning",
            image: 'https://eu-static.yelmocines.es/content/img/movies/posters/5095/1/1/5095.jpg',
            sinopsis: "Es el año 2012, y han pasado diez años desde la aventura en el Mundo Digital. Daisuke Motomiya tiene ahora veinte años, y él y el resto de los elegidos parecen estar cambiando poco a poco en cuanto a su aspecto y estilo de vida. Entonces, un día, un gigantesco Digitama aparece repentinamente en el cielo sobre la Torre de Tokio. Daisuke y los demás se encuentran con un misterioso joven llamado Lui Ohwada, quien les informa de que él es el primer Elegido del mundo. Secuela de \"Digimon Adventure: Last Evolution Kizuna\".",
            duration: 80,
            genre: 'Animación',
            rating: 5
        },
        {
            title: "Los juegos del hambre: Balada de pájaros cantores y serpientes",
            image: 'https://eu-static.yelmocines.es/content/img/movies/posters/5032/1/1/5032.jpg',
            sinopsis: "Ambientada en un Panem postapocalíptico, la precuela de Los Juegos Del Hambre nos hace retroceder varias décadas antes del comienzo de las aventuras de Katniss Everdeen. El joven Coriolanus Snow (Tom Blyth) será el mentor de Lucy Gray Baird (Rachel Zegler), la niña seleccionada como tributo del empobrecido Distrito 12. La joven sorprenderá a todos al cantar en la ceremonia de inauguración de los Décimos Juegos del Hambre en los que Snow intentará aprovecharse de su talento y encanto para sobrevivir.",
            duration: 157,
            genre: 'Ciencia ficción',
            rating: 4.3
        },
        {
            title: "The Marvels",
            image: 'https://eu-static.yelmocines.es/content/img/movies/posters/4796/1/1/4796.jpg',
            sinopsis: "Carol Danvers, alias Capitana Marvel, ha recuperado la identidad que le arrebataron los tiránicos kree y se ha cobrado su venganza contra la Inteligencia Suprema. Pero una serie de consecuencias imprevistas la obligan a cargar con el peso de un universo desestabilizado. Cuando el deber la lleva hasta un anómalo agujero de gusano vinculado a una revolucionaria Kree, sus poderes se conectan con los de su superfán de Nueva Jersey Kamala Khan, también conocida como Ms. Marvel, y con los de su distanciada sobrina, ahora astronauta en S.A.B.E.R., la capitana Monica Rambeau. Juntas, las integrantes de este insólito trío tendrán que unir fuerzas y aprender a trabajar en equipo como The Marvels para salvar el universo.",
            duration: 105,
            genre: 'Fantasía',
            rating: 4
        },
        {
            title: "El chico y la garza",
            image: 'https://eu-static.yelmocines.es/content/img/movies/posters/5063/1/1/5063.jpg',
            sinopsis: "Un joven llamado Mahito, que añora a su madre, se aventura en un mundo compartido por los vivos y los muertos. Allí, la muerte llega a su fin y la vida encuentra un nuevo comienzo. Una fantasía semiautobiográfica sobre la vida, la muerte y la creación, en homenaje a la amistad, de la mente de Hayao Miyazaki.",
            duration: 124,
            genre: 'Fantasía',
            rating: 5
        },
    ];


    return <MovieList movies={movies}/>;
}