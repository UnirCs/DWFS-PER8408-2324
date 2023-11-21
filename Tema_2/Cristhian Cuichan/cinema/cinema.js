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
                estado: false // Estado inicial libre
            });
        }
        butacas.push(fila);
    }
    return butacas;
}

// Inicializar la matriz
let butacas = setup();
// Función para sugerir asientos disponibles
function suggest(numSeats, seatMatrix) {
    // Verificar si el número de asientos solicitados excede el tamaño máximo de la fila
    if (numSeats > seatMatrix[0].length) {
        return new Set();
    }

    let selectedSeats = new Set();

    // Recorrer las filas desde la más lejana
    for (let i = seatMatrix.length - 1; i >= 0; i--) {
        let availableSeats = findConsecutiveSeats(numSeats, seatMatrix[i]);

        // Si se encuentran suficientes asientos disponibles, agregarlos al conjunto y salir del bucle
        if (availableSeats.length === numSeats) {
            availableSeats.forEach(seatId => selectedSeats.add(seatId));
            return selectedSeats; // Salir del bucle
        }
    }

    // Si no se encontraron suficientes asientos consecutivos
    return new Set();
}

// Función auxiliar para encontrar asientos consecutivos en una fila
function findConsecutiveSeats(numSeats, seatRow) {
    let consecutiveSeats = [];
    let currentConsecutiveCount = 0;

    for (let i = 0; i < seatRow.length; i++) {
        if (!seatRow[i].estado) {
            // Asiento disponible
            consecutiveSeats.push(seatRow[i].id);
            currentConsecutiveCount++;

            // Verificar si se encontraron suficientes asientos consecutivos
            if (currentConsecutiveCount === numSeats) {
                return consecutiveSeats;
            }
        } else {
            // Reiniciar el conteo si se encuentra un asiento ocupado
            consecutiveSeats = [];
            currentConsecutiveCount = 0;
        }
    }

    // Si no se encontraron suficientes asientos consecutivos
    return [];
}

// Ejemplo de uso
const suggestedSeatsTest1 = suggest(4, butacas);
console.log("Asientos sugeridos:", suggestedSeatsTest1);

const suggestedSeatsTest2 = suggest(8, butacas);
console.log("Asientos sugeridos:", suggestedSeatsTest2);

const suggestedSeatsTest3 = suggest(10, butacas);
console.log("Asientos sugeridos:", suggestedSeatsTest3);

const suggestedSeatsTest4 = suggest(15, butacas);
console.log("Asientos sugeridos:", suggestedSeatsTest4);