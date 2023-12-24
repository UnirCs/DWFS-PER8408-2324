// ApartamentoDetails.js
import React, {useContext, useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import {AdminContext} from '../context/AdminContext';
import {useNavigate} from "react-router";
import '../styles/menu.css';
import '../styles/apartamento.css';
import {click} from "@testing-library/user-event/dist/click";

const ApartamentoValidar = () => {
    const { apartamentoUnidad } = useParams();
    const { apartamentos } = useContext(AdminContext);
    const apartamento = apartamentos.find(a => a.unidad === apartamentoUnidad);
    const navigate = useNavigate();
    const [cumpleRequisitos, setCumpleRequisitos] = useState((!apartamento)?false:Boolean(apartamento.requisitos));
    const [clicks, setClicks] = useState(0);

    useEffect(() => {
        console.log("Inicializando variables ");
    }, []);

    useEffect(() => {
        console.log("Efecto actualizar requisitos ");
        if (!apartamento) {console.log("No existe el apto ");}
        else{
            actualizarRequisitos(apartamentos, apartamento.unidad, cumpleRequisitos);
        }
    });

    const handleOnChange = () => {
        setCumpleRequisitos((!apartamento)?false:!cumpleRequisitos);
    };

    if (!apartamento) {
        return (<div>
                <div className="apartamento__header">
                    <h4>Apartamento no encontrado</h4>
                </div>
                <div className="apartamento__header">
                    <button className="boton--detalle"
                            onClick={() => navigate(`/validador/`)}>regresar
                    </button>
                </div>
        </div>
        );
    }

    console.log(apartamento.unidad);

    return (
        <div>
            <div className="apartamento__header">
                <h4 className="apartamento-name"><b>DETALLE DE APARTAMENTO</b></h4>
            </div>
            <div className="apartamento__contenedor">
            <h4 className="apartamento-name">Apartamento {apartamento.unidad}</h4>
            <p className="apartamento-propietario">Propietario: {apartamento.propietario}</p>
            <p className="apartamento-cartera">Cartera: ${apartamento.cartera}</p>



            <p>Cumple Requisitos:
                <input type="checkbox" id="requisitos" name="requisitos" checked={cumpleRequisitos}
                       onChange={handleOnChange}></input>
            </p>


            <p>Tiene Carro: {esSINO(apartamento.carro)}</p>
            <p>Tiene Moto: {esSINO(apartamento.moto)}</p>
            </div>
            <div className="apartamento__header">
                <Link to={`/validador/`}>
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

const isTrueFalse= (val) =>{
    return(
        (val?1:0)
    );
}

const actualizarRequisitos = (apartamentos, apto, valor) => {
    for (var i = 0; i < apartamentos.length; i++) {
        if (apartamentos[i].unidad === apto) {
            apartamentos[i].requisitos = (valor?1:0);
            console.log("El valor del apto " + apto + " nuevo valor " + valor);
        }
    }

}

export default ApartamentoValidar;