import {useForm} from "react-hook-form";
import React from "react";
import {Link} from "react-router-dom";
import '../styles/pago.css';

export const Pago = ({unidad, cartera}) => {
    return (
        <div className="pago__contenedor">
            <h4>Apartamento: {unidad}</h4>
            <p>Cartera: $ {cartera}</p>
            {/*<input type="text" ></input>*/}
            <Link to={`/pagos/${unidad}`}>
                <button className="boton--pago">Ir a pagos</button>
            </Link>
        </div>
    );

}
