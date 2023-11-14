// Definir el tamaño de la matriz de butacas
const N = 10; // Número de filas y columnas

// Función para inicializar la matriz de butacas
function setup() {
    let idContador = 1; // Iniciar el contador de IDs en 1 (los humanos no empezamos a contar desde 0)
    let butacas = [];

    for (let i = 0; i < N; i++) {
        // Nueva fila
        let fila = [];
        for (let j = 0; j < N; j++) {

            // Nuevo asiento
            fila.push({
                id: idContador++,
                estado: Math.random() < 0.5 // Estado inicial libre
            });

        }
        butacas.push(fila);
    }
    return butacas;
}


function findConsecutiveCombinations(fila, numAsientos) {
    const combinations = [];

    for (let i = 0; i <= fila.length - numAsientos; i++) { //nos aseguramos que tengamos suficientes asientos para hacer combinación
        const currentCombination = [fila[i].id];
        let isSequential = true;

        for (let j = 1; (j < numAsientos) && isSequential; j++) {
            const currentId = fila[i + j].id;
            const previousId = fila[i + j - 1].id;

            if (Math.abs(currentId - previousId) === 1) { //comprobamos que sean números correlativos
                currentCombination.push(currentId);
            } else {
                isSequential = false;
            }
        }

        if (isSequential) {
            combinations.push(currentCombination);
        }
    }

    return combinations;
}

/**
 * Función que devuelve sugerencia de compra según el número de asientos necesarios
 * @param numAsientos - Número de asientos a reservar
 * @return
 * Si el número de asientos solicitados excede el tamaño máximo de la fila, la función debe devolver un set vacío.
 * Si en ninguna fila hay suficientes asientos disponibles juntos, la función debe devolver un set vacío.
 * Se comenzará a buscar asientos juntos en la fila más lejana a la pantalla, por lo que si varias filas pudiesen albergar el número de asientos solicitado, se elegiría siempre la más lejana a la pantalla. El resultado debe ser un Set con los ids de los asientos pre-seleccionados.
 */
function suggest(numAsientos) {
    const butacasLibres = butacas
        .filter(row => row.some(seat => seat.estado)) // Nos quedamos con fila que tenga al menos una butaca libre
        .map(row => row.filter(seat => seat.estado)) // Filtramos solo para tener las butacas libres
        .filter(row => row.filter(seat => seat.estado).length >= numAsientos); // Filtrar filas con al menos numAsientos butacas libres
    let consecutiveIdCombinations = [] // se guardan todas las combinaciones de sillas y a futuro se pueden recomendar otras filas

    for (let i = butacasLibres.length - 1; i >= 0; i--) { // buscamos desde la fila más alejada
        const result = findConsecutiveCombinations(butacasLibres[i], numAsientos)
        if(result.length !== 0){
            //console.log('fila ' + i +' Combinación '+result) con esto se ve las combinaciones por sillas
            consecutiveIdCombinations.push(result);
        }
    }
    if (consecutiveIdCombinations.length !== 0) {
        return new Set(consecutiveIdCombinations[0])
    }
    return new Set()
}

// Inicializar la matriz
let butacas = setup();
const numAsientos = 2;

console.log(suggest(numAsientos));