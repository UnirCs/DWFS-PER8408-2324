// PagoView.jsx
import React, { useContext,useEffect, useState  } from 'react';
import {Link, useParams} from 'react-router-dom';
import {AdminContext} from '../context/AdminContext';
import '../styles/menu.css';
import '../styles/pagos.css';

const PagoView = () => {
    const { apartamentoUnidad } = useParams();
    const { apartamentos } = useContext(AdminContext);
    const apartamento = apartamentos.find(a => a.unidad === apartamentoUnidad);
    const [valorPago, setValorPago] = useState(0);

    useEffect(() => {
        console.log("Iniciando data");
    }, []);

    useEffect(() => {
        console.log("Efecto valorPago ");
        pagarCartera(apartamentos,apartamentoUnidad,valorPago);
    }, [valorPago]);

    if (!apartamento) {
        return <h2>Apartamento no encontrado</h2>;
    }
    console.log(apartamento.unidad);

    return (
                <div>
                    <div className="pagos__header">
                        <h4 ><b>MÓDULO PAGOS CUOTAS ADMINISTRACIÓN</b></h4>
                    </div>
                    <div className="pagos__contenedor">
                        <h4>Apartamento {apartamento.unidad}</h4>
                        <p>Cartera: ${apartamento.cartera-valorPago}</p>
                        <p>Cuenta a debitar: {apartamento.cuenta}</p>
                        <p>Saldo en cuenta: ${apartamento.saldo-valorPago}</p>
                        {apartamento.cartera - valorPago > 0 ?(<p className="apartamento-cartera">Al oprimir el botón pagar el apartamento descuenta de su tarjeta de crédito el valor de la deuda </p>)
                            :(<p></p>)}
                        {/*<input type="text" name ={cantidadPagar}
                               onChange={(e) => setCantidadPagar(e.target.value)}></input>*/}

                        {
                            apartamento.cartera - valorPago > 0 ? (
                                <button  className="boton--pago"
                                         onClick={() => setValorPago(apartamento.cartera)}>Pagar</button>
                            ):(<p className="apartamento-cartera">Has pagado el valor adeduado. valorPago: ${valorPago}</p>)

                        }

                        <Link to={`/pagos/`}>
                            <button className="boton--detalle">Regresar</button>
                        </Link>

                    </div>
                </div>

    );
};

const pagarCartera = (apartamentos, apto, valor) => {
    if(valor> 0){
        for (var i = 0; i < apartamentos.length; i++) {
            if (apartamentos[i].unidad === apto) {
                apartamentos[i].cartera -= valor;
                apartamentos[i].saldo -= valor;
            }
        }
    }
}


export default PagoView;