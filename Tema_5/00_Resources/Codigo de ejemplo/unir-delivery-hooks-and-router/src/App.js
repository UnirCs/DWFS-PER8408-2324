import React, {useEffect, useState} from 'react';
import GlobalRouter from "./routes/GlobalRouter";
import {RestaurantContext} from "./context/RestaurantContext";
import {Footer} from "./components/Footer";
import {useRestaurants} from "./hooks/useRestaurants";

function App() {

    const restaurants = useRestaurants();

    return (
        <RestaurantContext.Provider value={{restaurants}}>
            <GlobalRouter></GlobalRouter>
            <Footer />
        </RestaurantContext.Provider>
    );
}

export default App;
