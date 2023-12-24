import React from "react";
import { Link } from "react-router-dom";
import '../styles/boton.css';

export const Boton = ({ label, enlace }) => {
    return (
            <Link to={`${enlace}/`}>
                <button className = "button">{label}</button>
            </Link>
    );
}