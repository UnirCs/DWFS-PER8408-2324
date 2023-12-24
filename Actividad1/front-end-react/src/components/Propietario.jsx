import React from "react";
import '../styles/propietario.css';

export const Propietario = ({ unidad, propietario, email, celular }) => {
    return (
        <div className="propietario__contenedor">
            <h4>Apartamento: {unidad}</h4>
            <p>Propietario: {propietario}</p>
            <p>Email: {email}</p>
            <p>Celular: {celular}</p>
        </div>
    );
}