import React from "react";
import '../styles/movie.css';

export const Movie = ({image,title,summary,duration,genre,rating}) => {
    return(
        <div className="movie-container">
            <div className="image-container">
                <img src={image} alt="movie"/>
            </div>
            <div className="movie-info-container">
                <label className="title">{title}</label>
                <label className="info-field"> Summary -> {summary} </label>
                <label className="info-field"> Duration -> {duration} </label>
                <label className="info-field"> Genre -> {genre}</label>
                <label className="info-field"> Rating -> {rating}</label>
                <button>Buy tickets</button>
            </div>
        </div>
    )
}