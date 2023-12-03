import React from "react";
import '../styles/styles.css';
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {MovieList} from "../components/MovieList";

export const Movies = () => {
    const movies = [
        {titulo: "La Navidad en sus manos", img_path: "https://eu-static.yelmocines.es/content/img/movies/posters/5100/1/1/5100.jpg", sinopsis: "Unos días antes de la Navidad, Papá Noel (Santiago Segura) tiene un accidente de trineo en pleno centro de Madrid y acaba en el hospital. Por suerte, Salva (Ernesto Sevilla), su compañero de habitación, puede sustituirle en su sagrada labor navideña. Aunque es un buscavidas más acostumbrado a vender piezas de coche robadas que a repartir regalos. Para Salva la única manera de recuperar a su familia es aceptar tan entrañable misión. La cuenta atrás para la llegada de la Nochebuena avanza inexorable y aun deberá encontrar a los renos de Papá Noel, aprender a volar en trineo y lo que es más difícil aun: aprender a ser una buena persona.", duracion: 95, genero: "comedia", puntuacion: 9.5},
        {titulo: "Noche de paz (Silent Night)", img_path: "https://eu-static.yelmocines.es/content/img/movies/posters/5110/1/1/5110.jpg", sinopsis: "Nochebuena. Un padre atormentado (Joel Kinnaman) es testigo de la muerte de su hijo cuando éste queda atrapado en un fuego cruzado entre bandas. Roto de dolor y sin voz, debido a una herida profunda que afecta sus cuerdas vocales, decidirá someterse a un estricto entrenamiento para vengar su muerte.", duracion: 104, genero: "acción", puntuacion: 9},
        {titulo: "Wonka", img_path: "https://eu-static.yelmocines.es/content/img/movies/posters/4935/1/1/4935.jpg", sinopsis: "Película sobre el joven Willy Wonka y cómo conoció a los Oompa-Loompas.", duracion: 100, genero: "fantasía", puntuacion: 6.5},
        {titulo: "Robot Dreams", img_path: "https://eu-static.yelmocines.es/content/img/movies/posters/5123/1/1/5123.jpg", sinopsis: "Basada en la popular novela gráfica de Sara Varon. DOG es un perro solitario que vive en Manhattan. Un día decide construirse un robot, un amigo. Su amistad crece, hasta hacerse inseparables, al ritmo del Nueva York de los ochenta. Una noche de verano, Dog con gran pena, se ve obligado a abandonar a ROBOT en la playa. ¿Volverán a encontrarse?", duracion: 90, genero: "animación", puntuacion: 8.4},
        {titulo: "Teddy, la magia de la Navidad", img_path: "https://eu-static.yelmocines.es/content/img/movies/posters/5126/1/1/5126.jpg", sinopsis: "La paz navideña cae sobre el pequeño pueblo, pero en el mercado navideño hay una actividad frenética. Mariann descubre un oso de peluche en el estante superior. ¿Está vivo? Mariann debe conseguir el peluche como sea. Pero Teddy quiere irse con una familia rica.", duracion: 78, genero: "aventuras", puntuacion: 7.8},
        {titulo: "Blood", img_path: "https://eu-static.yelmocines.es/content/img/movies/posters/5124/1/1/5124.jpg", sinopsis: "Jess, una enfermera separada se muda con su hija y su pequeño hijo Owen de regreso a su antigua granja. Poco después de instalarse, Owen es mordido por el perro, lo que provoca una misteriosa infección por la mordedura.", duracion: 108, genero: "terror", puntuacion: 9.5},
    ]
    return (
        <div>
            <Header />
            <MovieList
                movies={movies}
            />
            <Footer />
        </div>
    );
}