import React from 'react';
import { useState } from 'react';
import { useFetch } from '../hooks/useFetch';

export const Header = ({numero}) => {

    const [contadorUno, setContadorUno] = useState(0);
    const {fetchResponse} = useFetch("https://api.chucknorris.io/jokes/random");

    console.log('montando header...');
    return <div className="unir-header">
        <p><b>UNIR - Header {numero}</b></p>
        <b>{fetchResponse}</b>
        <br></br>
        <button onClick={() => setContadorUno(contadorUno + 1)}>Pedir chiste</button>
    </div>;
};
