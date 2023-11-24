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

    // Establecer algunos asientos como ocupados (true)
    const asientosOcupados = [];
    for (let i = 0; i < asientosOcupados.length; i++) {
        const numeroAsiento = asientosOcupados[i];
        const fila = Math.floor((numeroAsiento - 1) / N);
        const columna = (numeroAsiento - 1) % N;
        butacas[fila][columna].estado = true;
    }

    return butacas;
}

//Nueva función para sugerir asientos para reservar
function suggest(numAsientos) {
    const asientosSugeridos = [];
    let asientosOk = "No"

    for (let fila = butacas.length - 1; fila >= 0; fila--) {
        let asientosContiguos = 0;

        for (let columna = 0; columna < butacas[fila].length && asientosOk == "No"; columna++) {
            if (!butacas[fila][columna].estado) {
                // El asiento está libre
                asientosContiguos++;

                if (asientosContiguos === numAsientos) {
                    // Se encontraron suficientes asientos contiguos en esta fila
                    for (let i = columna - numAsientos + 1; i <= columna; i++) {
                        asientosSugeridos.push(butacas[fila][i].id);
                    }
                    asientosOk = "Yes"
                }
            } else {
                // Reiniciar el conteo si se encuentra un asiento ocupado
                asientosContiguos = 0;
            }
        }
    }

    //return asientosSugeridos
    return console.log("Asientos sugeridos: " + asientosSugeridos);
}

// Inicializar la matriz
let butacas = setup();

//Sugerir asientos
//let numAsientos = 7
//const asientosSugeridos = suggest(numAsientos);
//console.log("Asientos sugeridos: " + asientosSugeridos);
