import React from "react";
import {useLocation} from "react-router-dom";
import {BarraNavegador} from "../components/BarraNavegador";
import {ImagenInicio} from "../components/ImagenInicio";
import bogota_city from '../image/bogota_city.jpg';
import '../styles/landing.css';

export const Landing = () => {
    const location = useLocation();
    console.log(location);


    const queryParams = new URLSearchParams(location.search);
    const paramValue = queryParams.get("param");
    console.log(paramValue);

    return <div>
        <BarraNavegador></BarraNavegador>
        <ImagenInicio titulo="Bogota" imagen={bogota_city}></ImagenInicio>
    </div>;
};
