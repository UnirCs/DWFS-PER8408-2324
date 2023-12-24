import React, {useContext} from 'react';
import '../styles/styles.css';
import '../styles/pagos.css';
import {AdminContext} from "../context/AdminContext";

export const Acerca = () => {
    return (
        <div>
            <div className="pagos__header">
                <h2>ACERCA</h2>
            </div>
            <div className="pagos__acerca">
                <p>Aplicación para la Actividad 1 de Desarrollo Web FullStack</p>
                <p>Profesor: Jésus Pérez Melero</p>
                <p>Estudiante: José Luis Bautista Beltrán</p>

                <p>La aplicación busca simular algunas de las tareas que realiza un administrador en la propiedad horizontal.</p>
                <p>Por un lado puede actualizar si cumple con los requerimientos que se necesitan para participar en sorteo a los cupos de parqueadero.</p>
                <p>Aquellos apartamentos que tienen cartera pueden ir al módulo de pagos y allí realizar su pago.</p>
            </div>
        </div>
    );
}