// RestaurantDetails.js
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import {RestaurantContext} from '../context/RestaurantContext';

const RestaurantDetails = () => {
    const { restaurantId } = useParams();
    const { restaurants } = useContext(RestaurantContext);
    const restaurant = restaurants.find(r => r.id === restaurantId);

    if (!restaurant) {
        return <h2>Restaurante no encontrado</h2>;
    }

    console.log(restaurant.name);

    return (
        <div className="restaurant-details">
            <h2 className="restaurant-name">{restaurant.name}</h2>
            <p className="restaurant-cuisine">Cocina: {restaurant.cuisine}</p>
            <p className="restaurant-rating">Calificación: {restaurant.rating} / 5</p>
        </div>
    );
}

export default RestaurantDetails;