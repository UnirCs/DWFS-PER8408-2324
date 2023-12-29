import React from 'react';
import '../styles/styles.css';
import {Movie} from "../components/Movie";
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";

export const MovieList = () => {
    const movies = [
        { title: "Aquaman 2: El Reino Perdido", image: "logo1", synopsis: "Aquaman forja una alianza incómoda con un aliado poco probable para salvar a Atlantis y al resto del planeta de la muerte inminente.", duration: 120, gender: "Accion, Aventura", punctuation: 8.7},
        { title: "La Maldición de la Novia", image: "logo2", synopsis: "Una joven pareja, Richard y Alyson, se mudan a una casa que heredó ella de su padre biológico. Cuando Richard se va de viaje, Alyson comienza a explorar la casa descubriendo algunos secretos muy oscuros escondidos en el pasado de su familia.", duration: 120, gender: "Terror", punctuation: 8.7},
        { title: "Patos", image: "logo3", synopsis: "Una familia de patos intenta convencer a su sobreprotector padre para que se vaya de vacaciones.", duration: 210, gender: "Animada, Aventura", punctuation: 6.9},
        { title: "Nefarious", image: "logo4", synopsis: "Un asesino en serie convicto en el día que está programado para su ejecución, afirma ser un demonio y pasa por una evaluación psiquiátrica para determinar si está mentalmente apto para recibir su sentencia.", duration: 110, gender: "Comedia, Acción", punctuation: 6.8},
        { title: "Papá o Mamá", image: "logo5", synopsis: "Durante su divorcio, Florencia y Vicente deben decidir quién se queda con los niños, pero han sido ascendidos en el trabajo con el que siempre han soñado, por lo que harán cualquier cosa para no obtener la custodia de sus hijos.", duration: 210, gender: "Terror", punctuation: 7.6},
        { title: "Wonka", image: "logo6", synopsis: "Película sobre el joven Willy Wonka y cómo conoció a los Oompa-Loompas.", duration: 120, gender: "Terror", punctuation: 8.1},
        { title: "Digimon Adventure 02", image: "logo7", synopsis: "Es el año 2012, y han pasado diez años desde la aventura en el Mundo Digital. Daisuke Motomiya tiene ahora veinte años, y él y el resto de los elegidos parecen estar cambiando poco a poco en cuanto a su aspecto y estilo de vida. Entonces, un día, un gigantesco Digitama aparece repentinamente en el cielo sobre la Torre de Tokio. Daisuke y los demás se encuentran con un misterioso joven llamado Lui Ohwada, quien les informa de que él es el primer Elegido del mundo. Secuela de \"Digimon Adventure: Last Evolution Kizuna\".", duration: 150, gender: "Animada, Aventura, Comedia", punctuation: 8.7},
        { title: "La Maldición de Queen Mary", image: "logo8", synopsis: "Cuando los fotógrafos Erin y Patrick junto a su hijo Lukas, se embarcan en el transatlántico Queen Mary, considerado uno de los lugares más embrujados del mundo, se desatarán una serie de terroríficos sucesos que entrelazarán a la joven familia con el oscuro pasado del barco.", duration: 160, gender: "Terror", punctuation: 8.1},
        { title: "Viernes Negro", image: "logo9", synopsis: "Después de que los disturbios del Viernes Negro acaben en tragedia, un misterioso asesino inspirado en el Día de Acción de Gracias aterroriza Plymouth, Massachusetts, el lugar de nacimiento de la infame festividad.", duration: 130, gender: "Terror, Suspenso", punctuation: 9.1},
        { title: "Wish: El Poder de los Deseos", image: "logo10", synopsis: "Asha y una pequeña bola de energía ilimitada llamada estrella demuestran que cuando la voluntad de un ser humano valiente se conecta con la magia de las estrellas, pueden suceder cosas maravillosas.", duration: 150, gender: "Animada, Aventura, Comedia", punctuation: 6.9},
    ];

    return (
        <div>
            <Header />
            <h2 className="center-text"> ☆ ☆ ☆ Cartelera ☆ ☆ ☆</h2>
            <div className="cine-container">
                {movies.map((movie, index) => (
                    <Movie
                        title={movie.title}
                        image={"./portadas/" + movie.image + ".jpg"}
                        synopsis={movie.synopsis}
                        duration={movie.duration}
                        gender={movie.gender}
                        punctuation={movie.punctuation}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
}