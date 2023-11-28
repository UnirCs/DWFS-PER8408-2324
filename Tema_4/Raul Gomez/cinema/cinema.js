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

// Imprimir la matriz
console.log(butacas);

butacas[9][9].estado = true;
butacas[9][6].estado = true;
butacas[8][7].estado = true;
butacas[7][8].estado = true;
butacas[6][9].estado = true;

function display() {
    let asientos = document.getElementsByClassName("asiento");

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            asientos[i * N + j].classList.remove("reservado");
            if (butacas[i][j].estado) {
                asientos[i * N + j].classList.add("reservado");
            }
        }
    }

    return asientos;
}

let asientos = display();

function suggest(e) {
    display();

    let ids = [];
    let reservados = 0;
    let stop = false;

    for (let i = N - 1; i >= 0 && reservados < e.target.value && e.target.value <= N; i--) {
        for (let j = 0; j < N && reservados < e.target.value && !stop; j++) {
            reservados++;
            asientos[i * N + j].classList.add("reservado");
            ids.push(butacas[i][j].id);

            if (butacas[i][j].estado && e.target.value <= N) {
                reservados = 0;
                ids = [];
                display();
                stop = true;
            }
        }
        stop = false;
    }

    console.log(ids);
}

document.getElementById("cantidad").addEventListener("input", suggest);