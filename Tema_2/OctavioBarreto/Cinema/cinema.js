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


function suggest(nAsientos, filasArray) {
    let asientoSugerido;
    let nAsientoEncontrado = false;
    for (let x = filasArray.length - 1; x >= 0 && !nAsientoEncontrado; x--) {
        //Se vacia los asientos sugeridos al empezar una nueva fila
        asientoSugerido = [];
        for (let y = filasArray.length - 1; y >= 0 && !nAsientoEncontrado; y--) {
            //Se busca asientos disponibles
            if (filasArray[x][y].estado === false) {
                asientoSugerido.push(filasArray[x][y].id);
            } else {
                asientoSugerido = [];
            }
            //Si se ha encontrado los asientos sugeridos
            if (nAsientos === asientoSugerido.length) {
                nAsientoEncontrado = true;
            }
        }
    }
    if (nAsientoEncontrado === false) {
        asientoSugerido = [];
    }
    console.log("PUEDES TOMAR ESTE ASIENTO", asientoSugerido);
}
let asientos = setup();

asientos[0][4].estado = true;
asientos[1][4].estado = true;
asientos[2][4].estado = true;
asientos[3][4].estado = true;
asientos[4][4].estado = true;

asientos[6][5].estado = true;
asientos[9][3].estado = true;
asientos[9][7].estado = true;

console.log("ASIENTOS OCUPADOS", asientos);

suggest(4, asientos);