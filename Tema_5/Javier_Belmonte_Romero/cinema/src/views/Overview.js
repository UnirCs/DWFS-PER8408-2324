import React from 'react';
import { MovieList } from '../components/MovieList';
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";

export const Overview = () => {
    const movies = [
        { name: "Black Friday", imageUrl: "https://www.bizcochito.es/Films/Poster/tt1448754.webp", type: "Terror", duration: "87 min", age: "16 años", synopsis: "Tras un Black Friday en el que se producen disturbios que acaban en tragedia, un misterioso asesino aterroriza Plymouth, en Massachusetts." },
        { name: "Los Juegos del Hambre", imageUrl: "https://www.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2023/10/juegos-hambre-balada-pajaros-cantores-serpientes-3210328.jpg", type: "Acción", duration: "157 min", age: "12 años", synopsis: "Es la mañana de la cosecha que dará comienzo a los décimos Juegos del Hambre. En el Capitolio, Coriolanus Snow, de dieciocho años, se prepara para una oportunidad única: alcanzar la gloria como mentor de los Juegos." },
        { name: "Golda", imageUrl: "https://m.media-amazon.com/images/I/919BQkleNaL._AC_UF1000,1000_QL80_.jpg", type: "Drama", duration: "100 min", age: "12 años", synopsis: "Golda es un thriller a contrarreloj en el que se narran los dramáticos acontecimientos, las responsabilidades de alto riesgo y las controvertidas decisiones a las que se enfrentó Golda Meir." },
        { name: "Napoleón", imageUrl: "https://static.fnac-static.com/multimedia/Images/ES/Comete/26790/CCP_IMG_500xAUTO/375028.jpg", type: "Histórica", duration: "158 min", age: "16 años", synopsis: "Napoleón es un espectáculo lleno de épica y acción que detalla el enrevesado ascenso y caída del icónico Emperador francés Napoleón Bonaparte." },
        { name: "Trolls 3", imageUrl: "https://m.media-amazon.com/images/I/716JJZogWoS._AC_UF894,1000_QL80_.jpg", type: "Animación", duration: "91 min", age: "Apta", synopsis: "En TROLLS 3, Poppy y Branch se convierten en pareja (#broppy) y mientras se acercan, Poppy descubre el pasado secreto de Branch." },
        { name: "Ocho apellidos marroquís", imageUrl: "https://es.web.img3.acsta.net/pictures/23/01/19/14/36/0236379.jpg", type: "Comedia", duration: "97 min", age: "7 años", synopsis: "Carmen (Elena Irureta) quiere cumplir la última voluntad de José María, su marido y patriarca de la familia: recuperar el Sardinete, el primer pesquero de su flota, que se encuentra anclado en un puerto marroquí." },
        { name: "Aquaman", imageUrl: "https://i.ebayimg.com/images/g/mtAAAOSwa1ZcO5Mq/s-l1200.webp", type: "Aventuras", duration: "90 min", age: "12 años", synopsis: "Tras fracasar en su intento de derrotar a Aquaman la primera vez, Black Manta, aún impulsado por la necesidad de vengar la muerte de su padre, no se detendrá ante nada para acabar con Aquaman de una vez por todas." },
        { name: "Five Nights at Freddy's", imageUrl: "https://m.media-amazon.com/images/I/71L-QtcRJFL._AC_UF1000,1000_QL80_.jpg", type: "Thriller", duration: "109 min", age: "12 años", synopsis: "El aterrador y exitoso juego de miedo se convierte en un evento cinematográfico cuando Blumhouse, la productora de M3GAN, BLACK PHONE y EL HOMBRE INVISIBLE, lleva FIVE NIGHTS AT FREDDYS a la gran pantalla." }
    ];
    
    return (
        <div>
            <Header />
            <MovieList movies={movies} />
            <Footer />
        </div>
    );
}