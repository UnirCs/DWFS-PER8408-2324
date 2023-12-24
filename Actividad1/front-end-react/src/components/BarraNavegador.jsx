import React, {useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Boton} from "./Boton";
import {AdminContext} from "../context/AdminContext";
import {LinearProgress} from "@mui/material";
import '../styles/barra_navegador.css';


export const BarraNavegador = () => {

    const { botones } = useContext(AdminContext);

    return (
        <div className="menu--skin">
            {
            botones.length > 0 ? (
            botones.map((boton, index) => (
            <Boton
                key={index}
                label={boton.label}
                enlace={boton.enlace}
            />
            ))
            ) : (
                <LinearProgress color="secondary"/>
            )
            }
        </div>
    );
}

