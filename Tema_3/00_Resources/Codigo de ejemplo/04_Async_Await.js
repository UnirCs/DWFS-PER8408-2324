/**
 * Async y Await
 * 
 * Funciones precedidas por la palabra clave async. 
 * Esto quiere decir que la función siempre devolverá una promesa
 *  (Si no devuelve nada, devuelve undefined)
 * 
 * Await, que debe usarse con async, marca una llamada que devuelve una promesa como síncrona dentro de la invocación de la función asíncrona.
 *  El valor de retorno de await es la promesa, asignable a una variable.
 * 
 * Las siguientes líneas de código no se ejecutan hasta que las promesas se resuelven.
 */

async function fetchSincrono() {

    let url = "https://catfact.ninja/factfghjk";
    let fetchResponse = await fetch(url);
    let json = await fetchResponse.json();
    let fact = json.fact;
    console.log("Fact sincrono: " + fact);
    return fact;
}

console.log("Ejecutando funcion fetchSincrono");

(async () => {
    let factSincrono = await fetchSincrono();
    console.log(factSincrono);
})();
