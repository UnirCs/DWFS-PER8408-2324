import React from 'react';
import '../styles/styles.css';
import {Movie} from "../components/Movie";
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";

export const Overview = () => {
    const hotels = [
        { name: "Hotel Cielo Azul", city: "Atacames", rating: 9.1, img :"./assets/atacames" },
        { name: "Hotel San Carlos", city: "Ibarra", rating: 9, img :"./assets/ibarra" },
        { name: "Casa El Edén", city: "Quito", rating: 9.8, img :"./assets/quito" },
        { name: "Hotel Sol de Oro", city: "Guayaquil", rating: 7.9, img :"./assets/guayaquil" },
        { name: "Hotel Tungurahua", city: "Baños", rating: 7.6, img :"./assets/banos" },
        { name: "Hotel Voyager Manta", city: "Manta", rating: 8.4, img :"./assets/manta" },
    ];

    return (
        <div>
            <Header />
            <h2 className="center-text">Entradas de Partidos Disponibles</h2>
            <div className="restaurant-container">
                {hotels.map((hotel, index) => (
                    <Movie
                        key={index}
                        name={equipos.name}
                        cuisine={restaurant.cuisine}
                        rating={restaurant.rating}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
}