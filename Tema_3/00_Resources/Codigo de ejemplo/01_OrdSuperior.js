
/**
 * Las funciones de orden superior son aquellas que se ejecutan sobre
 * colecciones de elementos (arrays, mapas, sets...)
 */
let islas = ["Canarias", "Baleares", "Corcega", "Cerdeña"];

/**
 * Metodo forEach (callback) - Recorrer elementos
 * El metodo tiene uno o dos parametros
 *      Elemento de la coleccion
 *      Indice para poder recorrerlo (opcional, undefined si no se indica)
 */
islas.forEach(element => console.log(element));
islas.forEach((element, index) => {console.log(element + " index " + index)});


/**
 * Metodo map (callback) - Modificar elementos
 * El metodo tiene un parametro
 *      Funcion a aplicar sobre cada elemento de la coleccion
 */
let numbers = [1, 5, 10, 15];
let doubles = numbers.map(x => x * 2);
doubles.forEach((element, index) => {console.log(element + " index " + index)});


/**
 * Metodo filter (callback) - Filtrar elementos
 * El metodo tiene un parametro
 *      Funcion a evaluar sobre cada elemento. Se eliminan los elementos que no cumplen el filtro
 */
 let palabras = ["spray", "saludo", "tetera", "jarron", "destruccion", "selva"];
 let palabrasFilt = palabras.filter(word => word.length > 5);
 palabrasFilt.forEach((element, index) => {console.log(element + " index " + index)});


 /**
 * Metodo reduce (callback) - Reducir Arrays
 * El metodo tiene un parametro callback compuesto por:
 *      Funcion reductora. Dos argumentos
 *          Acumulador
 *          Valor actual
 *      Estado inicial del acumulador, opcional. Si no se indica seria el valor default del tipo de dato.     
 */
const array = [1,2,3,4];

const funcReductora = (acumulador, valorActual) => acumulador + valorActual;

console.log(array.reduce(funcReductora));
console.log(array.reduce(funcReductora, 3));