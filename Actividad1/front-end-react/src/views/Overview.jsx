import React, {useContext} from 'react';
import '../styles/overview.css';
import {Apartamento} from "../components/Apartamento";

import {AdminContext} from "../context/AdminContext";
import {LinearProgress} from "@mui/material";

export const Overview = () => {

    const { apartamentos } = useContext(AdminContext);

    return (
        <div>
            <h4 className="listado__header"><b>LISTADO DE APARTAMENTOS</b></h4>
            <div >
                {
                    apartamentos.length > 0 ? (
                        apartamentos.map((apartamento, index) => (
                            <Apartamento
                                key={index}
                                unidad={apartamento.unidad}
                                propietario={apartamento.propietario}
                                cartera={apartamento.cartera}
                                requisitos={apartamento.requisitos}
                                carro={apartamento.carro}
                                moto={apartamento.moto}
                            />
                        ))
                    ) : (
                        <LinearProgress color="secondary"/>
                    )

                }
            </div>
        </div>
    );
}