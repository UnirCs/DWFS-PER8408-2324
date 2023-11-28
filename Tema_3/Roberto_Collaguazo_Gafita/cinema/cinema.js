// Definir el tamaño de la matriz de butacas
const N = 10; // Número de filas y columnas

// Definiendo el Set
const asientosEscogidos = new Set();

// Función para inicializar la matriz de butacas
function setup() {
    let idContador = 1; // Iniciar el contador de IDs en 1 (los humanos no empezamos a contar desde 0)
    let butacas = [];
    let visualizar = "";

    for (let i = 0; i < N; i++) {
        // Nueva fila
        let fila = [];
        let numeroAleatorio = Math.random() * (6 - 4) + 4;
        for (let j = 0; j < N; j++) {
            // Nuevo asiento
            visualizar += ("L " + idContador + "\t");
            fila.push({
                id: idContador++,
                estado: false // Estado inicial libre
            });
        }
        butacas.push(fila);
        visualizar += "\n";
    }
    // Imprimir la matriz
    //console.log(visualizar); //Los asientos con L están libres y los que están con O están ocupados
    return butacas;
}

// Inicializar la matriz
let butacas = setup();

function suggest(asientos) {
    let arrayAsientos = [];
    let asientosSeguidos = 0;
    let validadorSet = false;
    let continuarBusquedaFilas = true;
    let continuarBusquedaAsientos = true;

    if (asientos > 0 && asientos <= butacas.length) { //Comprueba que no se ingresen asientos mayores a los existentes en la fila
        for (let i = butacas.length - 1; i >= 0 && continuarBusquedaFilas; i--) {
            for (let j = butacas[0].length - 1; j >= 0 && continuarBusquedaAsientos; j--) {
                if (butacas[i][j].estado === false) {
                    arrayAsientos.push(butacas[i][j].id) //Llena los asientos seguidos que encuentre
                    asientosSeguidos++;
                    if (asientos === asientosSeguidos) {
                        validadorSet = true;
                        continuarBusquedaAsientos = false;
                    }
                } else {
                    asientosSeguidos = 0;
                    arrayAsientos = []; //Se vacía los asientos debido a que no hubo la cantidad de asientos seguidos libres requeridos
                }
            }
            if (validadorSet) {
                continuarBusquedaFilas = false;
            } else {
                arrayAsientos = []; //Se vacía los asientos debido a que no hubo la cantidad de asientos seguidos libres requeridos
            }

        }
    }

    //Llenando asientos en Set
    if (validadorSet) {
        for (let i = 0; i < arrayAsientos.length; i++) {
            asientosEscogidos.add(arrayAsientos[i]);
        }
    }

    console.log(asientosEscogidos); //Muestra los asientos escogidos
}
