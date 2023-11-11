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
    const asientosOcupados = [71, 72, 91, 92, 93, 85, 86, 43, 44, 34, 35, 1, 2, 3, 21, 22, 23, 24, 25, 99, 98, 77, 76, 55, 54, 63, 64, 65, 81, 82,9 , 10, 11, 12, 13, 20, 31, 32, 48, 49];
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

    for (let fila = butacas.length - 1; fila >= 0; fila--) {
        let asientosContiguos = 0;

        for (let columna = 0; columna < butacas[fila].length; columna++) {
            if (!butacas[fila][columna].estado) {
                // El asiento está libre
                asientosContiguos++;

                if (asientosContiguos === numAsientos) {
                    // Se encontraron suficientes asientos contiguos en esta fila
                    for (let i = columna - numAsientos + 1; i <= columna; i++) {
                        asientosSugeridos.push(butacas[fila][i].id);
                    }
                    return asientosSugeridos;
                }
            } else {
                // Reiniciar el conteo si se encuentra un asiento ocupado
                asientosContiguos = 0;
            }
        }
    }

    // Si no encuentra suficientes asientos contiguos
    return [];
}

// Inicializar la matriz
let butacas = setup();

// Imprimir la matriz
console.log(butacas);

//Sugerir asientos
const asientosSugeridos = suggest(5);
console.log(asientosSugeridos);
