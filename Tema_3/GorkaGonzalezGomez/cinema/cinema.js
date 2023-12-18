// Definir el tamaño de la matriz de butacas
const N = 10; // Número de filas y columnas
const M = 21; // Número de filas y columnas

// Función para inicializar la matriz de butacas
function setup() {
    let idContador = 1; // Iniciar el contador de IDs en 1 (los humanos no empezamos a contar desde 0)
    let butacas = [];

    for (let i = 0; i < N; i++) {
        // Nueva fila
        let fila = [];
        for (let j = 0; j < M; j++) {
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

function suggestRow(asientos, idsAsientos, i) {
    for (let j = 0; j < M && idsAsientos.size < asientos; j++) {
        if (butacas[i][j].estado !== true) {
            idsAsientos.add(butacas[i][j].id);
        } else if (idsAsientos.size !== 0) {
            idsAsientos.clear();
        }
    }
    return idsAsientos
}

function suggest(asientos) {
    let idsAsientos = new Set()
    if (asientos > M) {
        return idsAsientos;
    }
    for (let i = 9; i >= 0 && idsAsientos.size < asientos; i--) {
        idsAsientos.clear();
        idsAsientos = suggestRow(asientos, idsAsientos, i);
    }
    console.log("Asientos sugeridos: " + Array.from(idsAsientos));
    return idsAsientos;
}

// Inicializar la matriz
let butacas = setup();
console.log("Butacas inicializadas")
