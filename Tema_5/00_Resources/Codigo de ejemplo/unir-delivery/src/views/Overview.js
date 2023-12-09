import React from 'react';
import '../styles/styles.css';
import {Restaurant} from "../components/Restaurant";
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";

export const Overview = () => {
    const restaurants = [
        { name: "Nueva Italiana", cuisine: "Italiana", rating: 4.5 },
        { name: "El Parterre", cuisine: "Española", rating: 4.9 },
        { name: "Rey Sushi", cuisine: "Japonés", rating: 4.2 },
        { name: "Dale taco", cuisine: "Mexicana", rating: 4.7 },
        { name: "Cookery", cuisine: "Americana", rating: 4.1 },
        { name: "Chumy Restaurante, donde Jose", cuisine: "Castiza", rating: 3.6 },
    ];

    return (
        <div>
            <Header />
            <h2 className="center-text">Restaurantes Disponibles</h2>
            <div className="restaurant-container">
                {restaurants.map((restaurant, index) => (
                    <Restaurant
                        key={index}
                        name={restaurant.name}
                        cuisine={restaurant.cuisine}
                        rating={restaurant.rating}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
}