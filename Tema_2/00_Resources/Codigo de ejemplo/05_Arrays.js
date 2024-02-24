/**
Los arrays son listas de valores a los que podemos acceder con una unica variable

Se trata de una estructura de datos que contiene N elementos indizados y accesibles mediante su indice
 */

let arrayVacio = [];
console.log(arrayVacio);

let arrayConElementos = ["coche", "moto", "furgoneta"];
let arrayNumerico = [1,7,-2,0];
let arrayMixto = [1,7,"hola","adios"]; //Evitaremos este tipo de practicas ya que pueden ser propensas a error

console.log(arrayConElementos);
console.log(arrayMixto);

//Podemos acceder a los diferentes elementos de un array utilizando el indice de cada elemento
//SIEMPRE se empieza por 0 en informatica
console.log(arrayConElementos[0]);
console.log(arrayConElementos[1]);
let furgoneta = arrayConElementos[2];

console.log(arrayConElementos[3]);
let inexistente = arrayConElementos[3];
console.log(inexistente);

//Un array (como cualquier coleccion) tiene un tamaÃ±o que usaremos para hacer operaciones - length
let size = arrayConElementos.length;
console.log(size);
console.log(arrayVacio.length);
//Podemos usar length para acceder a elementos por el final del array
console.log(arrayConElementos[arrayConElementos.length-1]);

//Podemos reasignar valores
arrayConElementos[arrayConElementos.length-2] = "tractor";
console.log(arrayConElementos);

//Podemos aÃ±adir elementos
arrayConElementos.push("moto");
console.log(arrayConElementos);

//Podemos eliminar el ultimo elemento
arrayConElementos.pop();
console.log(arrayConElementos);

//Si contienen texto, podemos ordenarlos
arrayConElementos.sort();
console.log(arrayConElementos);

arrayNumerico.sort();
console.log(arrayNumerico);

//Recorrer arrays usando bucles
for(let indice = 0; indice < arrayConElementos.length; indice++) {
    console.log("elemento " + indice + " es " + arrayConElementos[indice]);
}