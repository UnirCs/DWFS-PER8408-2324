import React, {useContext} from 'react';
import '../styles/styles.css';
import '../styles/pagos.css';
import {AdminContext} from "../context/AdminContext";
import {Pago} from "../components/Pago";
import {LinearProgress} from "@mui/material";


export const Pagos = () => {

    const { apartamentos } = useContext(AdminContext);

    const subGrupo = apartamentos.filter(apto => apto.cartera > 0);
    return (
        <div>
            <div className="pagos__header">
                <h4><b>APARTAMENTOS CON CARTERA ({subGrupo.length})</b></h4>
            </div>
            <div >{
                subGrupo.length > 0 ? (
                    subGrupo.map((unit, index) => (
                <Pago
                    key={index}
                    unidad={unit.unidad}
                    cartera={unit.cartera}
                />))
                ) : (
                    <LinearProgress color="secondary"/>
                )
                }

            </div>

        </div>
    );
}