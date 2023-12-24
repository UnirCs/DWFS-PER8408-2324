import React, {useContext} from 'react';
import '../styles/styles.css';
import {Propietario} from "../components/Propietario";

import {AdminContext} from "../context/AdminContext";
import {LinearProgress} from "@mui/material";
import '../styles/propietarios.css';
export const Propietarios = () => {

    const { apartamentos } = useContext(AdminContext);

    return (
        <div>
            <h4 className="propietarios__header"><b>DIRECTORIO DE PROPIETARIOS</b></h4>
            <div className="propietarios__contenedor">
                {
                    apartamentos.length > 0 ? (
                        apartamentos.map((apartamento, index) => (
                            <Propietario
                                key={index}
                                unidad={apartamento.unidad}
                                propietario={apartamento.propietario}
                                email={apartamento.email}
                                celular={apartamento.celular}
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