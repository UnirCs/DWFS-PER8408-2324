import React from "react";
export const Movie = ({ title, overview, duration, genre_ids, original_language, vote_average, poster_path}) => {
    const imgUrl = "https://image.tmdb.org/t/p/w300" + poster_path;
    return (
        <div className="card">
            <img width={230} height={345} src={imgUrl} alt={title}/>
            <h3>{title}</h3>
            <p>Sinopsis: {overview}</p>
            <p>Género: {genre_ids}</p>
            <p>Idioma Original: {original_language}</p>
            <p>Subtitulos: "es"</p>
            <p>Puntuacion: {vote_average}</p>
            <p>Duraciòn: {duration}</p>
            <button>Seleccionar</button>
        </div>
    );
}