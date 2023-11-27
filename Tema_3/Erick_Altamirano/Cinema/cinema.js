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
    console.log("Butacas inicializadas");
    return butacas;
}

// Inicializar la matriz
let butacas = setup();

function suggest(nAsientos) {
    let asientoSugerido;
    let nAsientoEncontrado = false;
    for (let x = butacas.length - 1; x >= 0 && !nAsientoEncontrado; x--) {
        //Se vacia los asientos sugeridos al empezar una nueva fila
        asientoSugerido = [];
        for (let y = butacas.length - 1; y >= 0 && !nAsientoEncontrado; y--) {
            //Se busca asientos disponibles
            if (butacas[x][y].estado === false) {
                asientoSugerido.push(butacas[x][y].id);
            } else {
                asientoSugerido = [];
            }
            //Si se ha encontrado los asientos sugeridos
            if (nAsientos === asientoSugerido.length) {
                nAsientoEncontrado = true;
            }
        }
    }
    //Si no se ha encontrado asientos sugeridos
    if (nAsientoEncontrado === false) {
        asientoSugerido = [];
    }
    console.log("Asientos sugeridos: "+ asientoSugerido.map(x=>x).join(", "));
}