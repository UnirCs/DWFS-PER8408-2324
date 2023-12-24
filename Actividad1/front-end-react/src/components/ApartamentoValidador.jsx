import React, {useContext} from "react";
import { Link } from "react-router-dom";
import '../styles/menu.css';
import {AdminContext} from '../context/AdminContext';

export const ApartamentoValidador = ({unidad}) => {

    const {apartamentos} =  useContext(AdminContext);

    return (
        <div className="card">
            {
                ((buscarApartamento(apartamento,unidad)?
                    <h4>Apartamento: {unidad}</h4>
                    :<p>No se encuentra el apartamento {unidad}</p>)
            }
        </div>
    );
}

    const buscarApartamento(apartamento, unidad){
        for (var i = 0; i < apartamentos.length; i++) {
            if (apartamentos[i].unidad === unidad) {
                return true;
            }
            return false;
        }
}