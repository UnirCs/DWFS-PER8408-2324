// Validador.jsx
import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router";
import '../styles/validador.css';

export const Validador = () => {

    const [apto, setApto] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        console.log("Iniciando data");
    }, []);

    useEffect(() => {
        console.log("buscar:"  );
    }, [apto]);
    return (
            <div>
                <div className="validador__header">
                    <h4><b>VALIDADOR</b></h4>
                </div>
                <div className="validador__header">
                    <p>Buscar por apartamento: </p>
                    <input type="text" name={apto} onChange={(e)=> setApto(e.target.value)}></input>
                    <button className="boton--busqueda"
                            onClick={() => navigate(`/validador/${apto}`)}>Buscar
                    </button>
                </div>
            </div>
    );


}
