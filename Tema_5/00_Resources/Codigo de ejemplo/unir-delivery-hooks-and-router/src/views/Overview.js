import React, {useContext} from 'react';
import '../styles/styles.css';
import {Restaurant} from "../components/Restaurant";
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {RestaurantContext} from "../context/RestaurantContext";
import {LinearProgress} from "@mui/material";

export const Overview = () => {

    const { restaurants } = useContext(RestaurantContext);

    return (
        <div>
            <h2 className="center-text">Restaurantes Disponibles</h2>
            <div className="restaurant-container">

                {
                    /**
                     * Por cada restaurante conocido
                     * Se crea un Restaurant con la informacion del restaurante
                     *
                     * Si los datos aun no se han recogido (lista de size 0) del back-end, se muestra un Spinner.
                     */
                    restaurants.length > 0 ? (
                        restaurants.map((restaurant, index) => (
                            <Restaurant
                                key={index}
                                id={restaurant.id}
                                name={restaurant.name}
                                cuisine={restaurant.cuisine}
                                rating={restaurant.rating}
                            />
                        ))
                    ) : (
                        <LinearProgress color="secondary"/>
                    )
                }

                {}
            </div>
        </div>
    );
}