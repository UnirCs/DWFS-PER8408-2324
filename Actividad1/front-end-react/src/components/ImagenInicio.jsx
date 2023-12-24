import React from "react";
import '../styles/imagen_inicio.css';

export const ImagenInicio = ({ titulo, imagen}) => {
    return (
        <div >
            <img className ="imagen__main" src={imagen} alt={titulo}/>
        </div>
    );
}