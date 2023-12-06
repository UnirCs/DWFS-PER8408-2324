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

function suggest(asientos) {
    let ids = [];
    if (asientos <= N) {
        let contador = 0;
        let reservados = 0;
        for (let i = N - 1; i >= 0; i--) {
            reservados = 0;
            for (let j = 0; j < N; j++) {
                if (butacas[i][j].estado) {
                    reservados++;
                }

                if (!butacas[i][j].estado && contador < asientos && 10 - reservados >= asientos) {
                    butacas[i][j].estado = true;
                    ids.push(butacas[i][j].id);
                    contador++;
                }
            }
        }
    }
    // return ids;
    console.log(ids);
}

// console.log(suggest(11)); // Cuando el número de asientos solicitados excede el tamaño máximo de la fila
// console.log(suggest(10)); // Búsqueda de asientos juntos en la fila más lejana a la pantalla
// console.log(suggest(9));
// console.log(suggest(8));
// console.log(suggest(7));
// console.log(suggest(6));
// console.log(suggest(5));
// console.log(suggest(10));
// console.log(suggest(9));
// console.log(suggest(8));
// console.log(suggest(7));
// console.log(suggest(8)); // Cuando en ninguna fila hay suficientes asientos disponibles juntos

for (let i = 0; i < N; i++) {
    let vista = '';
    for (let j = 0; j < N; j++) {
        if (butacas[i][j].estado) {
            vista += ' X';
        } else {
            vista += ' U';
        }
    }
    console.log(vista);
}