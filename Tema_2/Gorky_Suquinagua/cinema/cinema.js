

function validarNumeroEntero(numero, nombreParam) {
    const validador = { 
        mensaje: '',
        tieneError: true
    };
    if (typeof numero !== "number") {
        validador.mensaje = `El parámetro ${nombreParam} debe se un número`;
        return validador;
    }
    if (!Number.isInteger(numero)) {
        validador.mensaje = `El parámetro ${nombreParam} debe se un número entero`;
        return validador;
    }
    validador.tieneError = false;
    return validador;
}

/**
 * La dimension es un campo de tipo entero y
 * corresponde a la representación de una distribución
 * de matriz cuadrada dimension = n_filas = n_columnas
 * 
 * @param dimension 
 */
function setup(dimension) {
    const validacion = validarNumeroEntero(dimension);
    if (validacion.tieneError) {
        console.error(validacion.mensaje);
        return [];
    }
    const N = dimension;
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

function suggest(numeroAsientos) {
   const validacion = validarNumeroEntero(numeroAsientos);
   if (validacion.tieneError) {
        console.error(validacion.mensaje);
        return [];
   }
   if (!Array.isArray(butacas)) {
        console.error('El parámetro butaca debe ser una lista');
        return [];
   }
   let butacasSugeridas = new Set();
   for(
       let n_fila = butacas.length - 1;
       n_fila >= 0 && butacasSugeridas.size < numeroAsientos;
       n_fila--
   ) {
    const fila = butacas[n_fila];
    if (Array.isArray(fila) && fila.length >= numeroAsientos) {
        for(
            let n_columna = fila.length - 1;
            n_columna >= 0 && butacasSugeridas.size < numeroAsientos;
            n_columna--
        ) {
            const butaca = butacas[n_fila][n_columna];
            if (typeof butaca === "object") {
                /**
                 * true => se encuentra ocupada
                 * false => se encuentra disponible
                 */
                const butacaOcupada = butaca.estado;
                if (!butacaOcupada) {
                    butacasSugeridas.add(butaca.id);
                } else {
                    // Vaciar sugerencia ya que no ha llegado
                    // al número de asientos contiguos en la fila (Asientos contiguos ocupados)
                    butacasSugeridas.clear();
                }
            }
        }
    }
    if (butacasSugeridas.size < numeroAsientos) {
        butacasSugeridas.clear(); // Nueva fila - se debe vaciar las sugerencias
    }
   }
   if (butacasSugeridas.size === 0) {
    console.info('Asientos no disponibles');
   }
   return butacasSugeridas;
}

/**
 * 
 * Funcion para pruebas
 * Cambiar estado de un asiento
 * 
 * @param fila 
 * @param columna 
 * @param estado
 * @returns 
 */
function definirEstadoButaca(fila, columna, estado) {
    butacas[fila - 1][columna - 1].estado = estado;
    return butacas;
}

/**
 * 
 * Funcion para pruebas
 * Llenar la sala de cine
 *
 * @returns 
 */
function llenarSala() {
    for (let n_fila = 0; n_fila < butacas.length; n_fila++) {
        for (let n_col = 0; n_col < butacas[n_fila].length; n_col++) {
            butacas[n_fila][n_col].estado = true;
        }
    }

    return butacas;
}

/* Numero de asientos en la sala tanto en filas como columnas */
const N = 5;
const butacas = setup(N);

// Pruebas haciendo asignaciones individuales
// definirEstadoButaca(5,5, true);
// definirEstadoButaca(5,4, true);
// definirEstadoButaca(5,3, true);
// definirEstadoButaca(4,4, true);
// definirEstadoButaca(4,2, true);

// Pruebas verificando asientos no disponibles
// llenarSala();

// Pruebas dejando solo libre los extremos en una sala de 5 x 5
// definirEstadoButaca(5,2, true);
// definirEstadoButaca(5,3, true);
// definirEstadoButaca(5,4, true);
// definirEstadoButaca(4,2, true);
// definirEstadoButaca(4,3, true);
// definirEstadoButaca(4,4, true);
// definirEstadoButaca(3,2, true);
// definirEstadoButaca(3,3, true);
// definirEstadoButaca(3,4, true);
// definirEstadoButaca(2,2, true);
// definirEstadoButaca(2,3, true);
// definirEstadoButaca(2,4, true);
// definirEstadoButaca(1,2, true);
// definirEstadoButaca(1,3, true);
// definirEstadoButaca(1,4, true);

const ids = suggest(2);
console.log('Butacas sugeridas: ', ids);