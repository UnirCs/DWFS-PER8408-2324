/**
 * Las promesas son una forma distinta de llamar a funciones  callback. 
 * En ese sentido, no añaden ninguna funcionalidad  especial, pero simplifican el proceso asíncrono.
 * Un objeto promesa espera hasta que termina una ejecución  asíncrona. 
 * La función puede devolver éxito o fracaso si la  ejecución asíncrona falla.
 * 
 * El objeto promesa espera dos funciones:
 *      La función resolved
 *      La función reject (opcional)
 * 
 * Se usa then para asignar las funciones
 *      Then devuelve una promesa, por lo que podemos encadenar promesas.
 * 
 * Usamos setTimeout para ejecutar el codigo despues de X ms.
 */

let numero = 0;
let promesa1 = new Promise(function (resolve, reject) {

    setTimeout(function () {
        if (numero % 2 === 0) {
            resolve("Promesa terminada. Numero par");
        } else {
            reject("Promesa terminada. Numero impar");
        }
    }, 100);
})

const callbackResolve = (value) => console.log("OK " + value);
const callbackReject = (value) => console.log("KO " + value);

promesa1.then(callbackResolve, callbackReject);
console.log("haciendo cosas...");
console.log("haciendo cosas...");
console.log("haciendo cosas...");