// Definir el tamaño de la matriz de butacas
const N = 10; // Número de filas y columnas

// Función para inicializar la matriz de butacas
function setup() {
    let idContador = 1; // Iniciar el contador de IDs en 1 (los humanos no empezamos a contar desde 0)
    let butacas = [];

    for (let i = 0; i < N; i++) {
        // Nueva fila
        let fila = [];

        // Cantidad de asientos ocupados en la fila
        let ocupados = Math.floor(Math.random() * 5);
        // IDs de asientos ocupados en la fila
        let idsOcupados = Array.from({length: ocupados}, () => Math.floor(Math.random() * N));

        for (let j = 0; j < N; j++) {
            // Nuevo asiento
            fila.push({
                id: idContador++,
                estado: idsOcupados.includes(j) // ocupado (true) o libre (false)
            });
        }
        butacas.push(fila);
    }
    return butacas;
}

/**
 * Algoritmo preselección de asientos
 * @param {number} num cantidad de asientos a reservar
 * @returns {Set} ids de asientos preseleccionados
 *
 * Si el número de asientos solicitados excede el tamaño máximo de la fila, la función debe devolver un set vacío.
 * Si en ninguna fila hay suficientes asientos disponibles **juntos**, la función debe devolver un set vacío.
 * Se comenzará a buscar asientos **juntos** en la **fila más lejana** a la pantalla, por lo que si varias filas
 *   pudiesen albergar el número de asientos solicitado, se elegiría siempre la más lejana a la pantalla.
 */
function suggest(num) {
    let seats = new Set();

    // proceder si el número de asientos es menor o igual a la cantidad de asientos de una fila
    if (num <= N) {

        // filas que contengan suficientes asientos libres
        let rows = butacas.filter(row => row.filter(butaca => butaca.estado === false).length >= num);

        // buscar desde la fila más lejana a la pantalla
        let index = rows.length - 1;

        while (index >= 0 && seats.size < num) {
            // filtrar solo los asientos libres
            let fila = rows[index--].filter(butaca => butaca.estado === false);
            // id de los asientos libres
            let ids = fila.map(butaca => butaca.id);
            // verificar en grupos de num en num si los id son números consecutivos
            for (let i = 0; i + num < ids.length && seats.size < num; i++) {
                let group = ids.slice(i, i + num);
                if (isConsecutive(group)) {
                    group.forEach(id => seats.add(id));
                }
            }
        }
    }

    return seats;
}

function isConsecutive(numbers) {
    let min = Math.min(...numbers);
    let max = Math.max(...numbers);
    let sum = numbers.reduce((a, b) => a + b, 0);
    let n = max - (min - 1);
    let consecutiveSum = n / 2 * (2 * min + (n - 1));
    return sum === consecutiveSum;
}

function printButacas() {
    butacas.forEach(row => {
        let output = "";
        row.forEach(butaca => {
            output += (`(${butaca.id},${butaca.estado}) `);
        });
        console.log(output);
    });
}

// Inicializar la matriz
let butacas = setup();

// Imprimir la matriz
// console.log(butacas);
printButacas();

console.log(suggest(6));