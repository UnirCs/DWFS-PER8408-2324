import {useEffect, useState} from "react";

export const useRestaurants = () => {

    const [restaurants, setRestaurants] = useState([]);
    /**
     * Se hace uso de useEffect para definir un efecto de montaje que traerá la información de ingredientes
     * del back-end en el primer renderizado.
     */
    useEffect(() => {
        //fetch(process.env.REACT_APP_GW_URL).then((res) => res.json()).then((res) => setRestaurants(res));

        setTimeout(() => {
            setRestaurants([
                {id: "1", name: "Nueva Italiana", cuisine: "Italiana", rating: 4.5},
                {id: "2", name: "El Parterre", cuisine: "Española", rating: 4.9},
                {id: "3", name: "Rey Sushi", cuisine: "Japonés", rating: 4.2},
                {id: "4", name: "Dale taco", cuisine: "Mexicana", rating: 4.7},
                {id: "5", name: "Cookery", cuisine: "Americana", rating: 4.1},
                {id: "6", name: "Chumy Restaurante, donde Jose", cuisine: "Castiza", rating: 3.6},
            ]);
        }, 2500);
    }, []);

    return restaurants;
}