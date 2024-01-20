import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import '../styles/header.css';

const fechaHoraActual = () =>{
    let currentdate = new Date();
    let datetime = currentdate.getDate() + '/'
       + (currentdate.getMonth() + 1) + '/'
       + currentdate.getFullYear() + '-'
       + currentdate.getHours() + ':'
       + currentdate.getMinutes() + ':'
       + currentdate.getSeconds();
    return datetime;
 }

 export const Header = ({pelicula_destacada}) =>{

   const[contador, setContador] = useState(0);
   console.log('RenderizadoUno…' + contador);

   useEffect(() =>{console.log('1 Efecto con cualquier cambio de renderizado')});
   useEffect(() =>{console.log('2 Efecto de montaje: Solo se ejecuta una vez')}, []);
   useEffect(() =>{console.log('3 Efecto ligado a contadorUno ha cambiado')}, [contador]);

   

 
    return <header className= 'app-header'>
    <h1><b>Cinema UNIR</b></h1>
    <h2><b>Película destacada: {pelicula_destacada}</b></h2>
    
    <p><b>Danos tu puntuación (De 1 a 10):&nbsp; {contador} &nbsp; </b>
    <button onClick={() => {
      if (contador===10) {
         setContador(contador -10)
      } else {
         setContador(contador + 1)
      }
    }
     }>&#128077;
   </button>
   </p> 
   <p>Última Actualización: {fechaHoraActual()}</p>

    </header>
 }