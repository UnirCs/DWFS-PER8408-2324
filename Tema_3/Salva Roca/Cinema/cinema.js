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

// Función para sugerir butacas, tomando como argumento el número de asientos a reservar
function suggest(seatMap, nSeats) {
    const selectedSeats = new Set(); // Inicializamos el set que contendrá los asientos sugeridos

    if (nSeats <= seatMap[0].length) {
        for (let i = seatMap.length - 1; i >= 0 && selectedSeats.size < nSeats; i--) {
            selectedSeats.clear(); // Vaciamos el set al saltar de fila
            for (let j = 0; j < seatMap[i].length && selectedSeats.size < nSeats; j++) {
                if (!seatMap[i][j].estado) {
                    selectedSeats.add(seatMap[i][j].id); // Añadimos asiento disponible al set
                } else {
                    selectedSeats.clear(); // Vaciamos el set si un asiento no está disponible (no consecutivos)
                }
            }
        }
    }

    console.log(selectedSeats);

    return selectedSeats;
}

// Inicializar la matriz
let seatMap = setup();

// Test: marcamos diferente disponibilidad de asientos juntos por filas

// Fila 10: numAsientos = 1
seatMap[9][0].estado = true;
seatMap[9][1].estado = true;
seatMap[9][3].estado = true;
seatMap[9][5].estado = true;
seatMap[9][7].estado = true;
seatMap[9][9].estado = true;

// Fila 9: numAsientos = 2
seatMap[8][0].estado = true;
seatMap[8][3].estado = true;
seatMap[8][6].estado = true;
seatMap[8][9].estado = true;

// Fila 8: numAsientos = 3
seatMap[7][0].estado = true;
seatMap[7][4].estado = true;
seatMap[7][8].estado = true;

// Fila 7: numAsientos = 4
seatMap[6][0].estado = true;
seatMap[6][3].estado = true;
seatMap[6][4].estado = true;
seatMap[6][9].estado = true;

// Fila 6: numAsientos = 5
seatMap[5][0].estado = true;
seatMap[5][3].estado = true;
seatMap[5][9].estado = true;

// Fila 5: numAsientos = 6
seatMap[4][0].estado = true;
seatMap[4][2].estado = true;
seatMap[4][9].estado = true;

// Fila 4: numAsientos = 7
seatMap[3][0].estado = true;
seatMap[3][8].estado = true;
seatMap[3][9].estado = true;

// Fila 3: numAsientos = 8
seatMap[2][0].estado = true;
seatMap[2][9].estado = true;

// Fila 2: numAsientos = 9
seatMap[1][9].estado = true;

// Fila 1: numAsientos = 10 (dejamos la fila vacía)

