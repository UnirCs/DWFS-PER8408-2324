import React from "react";
import { Link } from "react-router-dom";
import '../styles/apartamento.css';

export const Apartamento = ({ unidad, propietario}) => {
    return (
        <div className="apartamento__contenedor">
            <h4>Apartamento: {unidad}</h4>
            <p>Propietario: {propietario}</p>
            <Link to={`/apartamentos/${unidad}`}>
                <button className="boton--detalle">Ver detalles</button>
            </Link>
        </div>
    );
}