// ApartamentoDetails.js
import React, { useContext } from 'react';
import {Link, useParams} from 'react-router-dom';
import {AdminContext} from '../context/AdminContext';
import '../styles/menu.css';
import '../styles/apartamento.css';

const ApartamentoDetails = () => {
    const { apartamentoUnidad } = useParams();
    const { apartamentos } = useContext(AdminContext);
    const apartamento = apartamentos.find(a => a.unidad === apartamentoUnidad);

    if (!apartamento) {
        return <h2>Apartamento no encontrado</h2>;
    }

    console.log(apartamento.unidad);

    return (
        <div>
            <h4 className="apartamento__header"><b>DETALLE DE APARTAMENTO</b></h4>
            <div className="apartamento__contenedor">
            <h4 className="apartamento-name">Apartamento {apartamento.unidad}</h4>
            <p>Propietario: {apartamento.propietario}</p>
            <p>Cartera: {apartamento.cartera}</p>
            <p>Cumple Requisitos: {esSINO(apartamento.requisitos)}</p>
            <p>Tiene Carro: {esSINO(apartamento.carro)}</p>
            <p>Tiene Moto: {esSINO(apartamento.moto)}</p>

            </div>
            <div className="apartamento__contenedor">
                <Link to={`/apartamentos/`}>
                    <button className="boton--detalle">Regresar</button>
                </Link>
            </div>
        </div>
    );
}

const esSINO = (val) =>{
    return(
        ((val===1)?"SI":"NO")
    );
}
export default ApartamentoDetails;