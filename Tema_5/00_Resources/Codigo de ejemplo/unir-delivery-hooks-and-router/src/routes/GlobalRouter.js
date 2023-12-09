import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from '../views/Landing';
import RestaurantDetails from '../views/RestaurantDetails';
import NotFound from '../views/NotFound';
import {Overview} from "../views/Overview";
import {Header} from "../components/Header";

function GlobalRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/restaurants" element={<Layout><Overview /></Layout>} />
                <Route path="/restaurants/:restaurantId" element={<Layout><RestaurantDetails /></Layout>} />
                <Route path="*" element={<Layout><NotFound /></Layout>} />
            </Routes>
        </BrowserRouter>
    );
}

const Layout = ({children}) => (
    <>
        <Header />
        {children}
    </>
);

export default GlobalRouter;
