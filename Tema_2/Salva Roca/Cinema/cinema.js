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
    const selectedSeats = new Set(); // Inicializamos el set que contendré los asientos sugeridos

    if (nSeats <= seatMap[0].length) {
        let row = seatMap.length - 1; // Comenzamos desde la última fila

        while (row >= 0) {
            let consecutiveSeats = 0; // Inicializamos contador de asientos consecutivos
            let startSeatIndex = -1; // Inicializamos indicador de asientos consecutivos

            for (let i = 0; i < seatMap[0].length; i++) {
                if (!seatMap[row][i].estado) {
                    if (consecutiveSeats === 0) {
                        startSeatIndex = i; // Marcamos el inicio de los asientos consecutivos
                    }
                    consecutiveSeats++;

                    if (consecutiveSeats === nSeats) {
                        // Si se encuentran tantos asientos consecutivos como se han solicitado, los añadimos al set
                        for (let j = startSeatIndex; j <= i; j++) {
                            selectedSeats.add(seatMap[row][j].id);
                        }
                        return selectedSeats;
                    }
                } else {
                    consecutiveSeats = 0; // Si no se encuentran, reiniciamos el contador de asientos consecutivos
                }
            }

            row--; // Si no se encuentran asientos suficientes, pasamos una fila adelante
        }
    }
    return selectedSeats;
}

// Inicializar la matriz
let butacas = setup();

// Test: marcamos diferente disponibilidad de asientos juntos por filas

// Fila 10: numAsientos = 1
butacas[9][0].estado = true;
butacas[9][1].estado = true;
butacas[9][3].estado = true;
butacas[9][5].estado = true;
butacas[9][7].estado = true;
butacas[9][9].estado = true;

// Fila 9: numAsientos = 2
butacas[8][0].estado = true;
butacas[8][3].estado = true;
butacas[8][6].estado = true;
butacas[8][9].estado = true;

// Fila 8: numAsientos = 3
butacas[7][0].estado = true;
butacas[7][4].estado = true;
butacas[7][8].estado = true;

// Fila 7: numAsientos = 4
butacas[6][0].estado = true;
butacas[6][3].estado = true;
butacas[6][4].estado = true;
butacas[6][9].estado = true;

// Fila 6: numAsientos = 5
butacas[5][0].estado = true;
butacas[5][3].estado = true;
butacas[5][9].estado = true;

// Fila 5: numAsientos = 6
butacas[4][0].estado = true;
butacas[4][2].estado = true;
butacas[4][9].estado = true;

// Fila 4: numAsientos = 7
butacas[3][0].estado = true;
butacas[3][8].estado = true;
butacas[3][9].estado = true;

// Fila 3: numAsientos = 8
butacas[2][0].estado = true;
butacas[2][9].estado = true;

// Fila 2: numAsientos = 9
butacas[1][9].estado = true;

// Fila 1: numAsientos = 10 (dejamos la fila vacía)

// Mostrar asientos sugeridos (se puede comprobar la función modificando numAsientos)
console.log(suggest(butacas, 4));