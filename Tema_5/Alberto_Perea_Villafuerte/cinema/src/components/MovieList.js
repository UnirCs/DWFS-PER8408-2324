import React from "react";
import {Movie} from "./Movie";

export const MovieList = ({movies}) => {
    return (
        <div className="main-container">
            <h2 className="center-text">Cartelera</h2>
            <div className="card_container">
                {movies.map((movie, index) => (
                    <Movie movie={movie}/>
                ))}
            </div>
        </div>
    );
}