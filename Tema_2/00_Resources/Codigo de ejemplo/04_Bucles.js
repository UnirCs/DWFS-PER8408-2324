/**
 *
 * Los bucles nos permiten recorrer estructuras y colecciones de datos, por ejemplo:
 * - arrays
 * - mapas
 * - strings (son arrays de caracteres)
 */

let valor = 1;
let numIteraciones = 0;

while (valor < 100) { //condicion de iteracion - true o false

    //dentro del cuerpo del bucle podemos tener cualquier tipo de codigo
    console.log("valor: " + valor);
    valor = valor * 2; //Hacemos algo para actualizar la condicion de iteracion
    numIteraciones = numIteraciones + 1;
}
console.log(numIteraciones);

let arrayNum = [1,2,3,4,5];

//Definir indice de arranque, definir condicion de parada, definir condicion de avance
for (let indice = 0; indice < arrayNum.length; indice++) {
    arrayNum[indice] *= 2;
}
console.log(arrayNum);

//Obtener los numeros pares hasta 100
//¿Como lo hariaomos con while y for?

let arrayPares = [];
let arrayImpares = [];

let numeroActualWhile = 1;

while(numeroActualWhile <= 100) {
    if(numeroActualWhile%2 === 0) {
        arrayPares.push(numeroActualWhile);
    }
    numeroActualWhile = numeroActualWhile +1;
}

for(let numeroActualFor = 1; numeroActualFor <= 100; numeroActualFor++) {
    if(numeroActualFor%2 !== 0) {
        arrayImpares.push(numeroActualFor);
    }
}

console.log(arrayPares);
console.log(arrayImpares);