// Definir el tamaño de la matriz de butacas
const numDeColumnas = 10; // columnas
const numDeFilas = 8 // filas

// Función para inicializar la matriz de butacas
function setup() {
    let idContador = 1; // Iniciar el contador de IDs en 1 (los humanos no empezamos a contar desde 0)
    let butacas = [];

    for (let i = 0; i < numDeFilas; i++) {
        // Nueva fila
        let fila = [];
        for (let j = 0; j < numDeColumnas; j++) {
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
function suggest(numAsientos, arrayFila) {
    let asientosSeleccionados = new Set()
    //Si el número de asientos solicitados excede el tamaño máximo de la fila, la función debe devolver un set vacío
    if (numAsientos > numDeColumnas) {
        return asientosSeleccionados
    }
    //Si en ninguna fila hay suficientes asientos disponibles juntos, la función debe devolver un set vacío.
    for (let numFilas = numDeFilas; numFilas > 0; numFilas--) {
        let fila = arrayFila[numFilas-1];
        for (let numColumna = 0; numColumna < numDeColumnas; numColumna++) {
            //Se comenzará a buscar asientos juntos en la fila más lejana a la pantalla, por lo que si varias filas pudiesen albergar el número de asientos solicitado, se elegiría siempre la más lejana a la pantalla. El resultado debe ser un Set con los ids de los asientos pre-seleccionados.
            if (asientosSeleccionados.size < numAsientos) {
                let columnaId = numFilas*numDeColumnas - numColumna;
                let actualIdColumn = fila.filter(columna => columna.id === columnaId)[0];

                if (actualIdColumn.estado === true) {
                    asientosSeleccionados.clear();
                } else {
                
                    asientosSeleccionados.add(actualIdColumn.id);
                }
            }
        }

    }
    return asientosSeleccionados;
}
// Inicializar la matriz
let butacas = setup();
let asientoSuggestion = suggest(5, butacas);
// Imprimir la matriz
console.log('Asientos: ', butacas);
console.log('Asientos sugeridos: ', asientoSuggestion);