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
//console.log(butacas);

// Cantidad de Butacas
//console.log(butacas.length);

// Ocupando asientos
const NRO_SEAT_RESERVED = 7;
testCase1(butacas);//nroSeatReserve = 7;
//testCase2(butacas)//nroSeatReserve = 3;
//testCase3(butacas)//nroSeatReserve = 2;

let idSeatReserved = suggest(NRO_SEAT_RESERVED);
console.log("idSeatReserved: " + idSeatReserved.size);
idSeatReserved.forEach (function(value) {
    /*
    * 90 89 88 87 86 85 84
    * 90 89 88
    * */
    console.log(value);
});

function suggest(nroSeatsReserve) {
    let band = 0;
    const seatsReserved = new Set();

    if (nroSeatsReserve > butacas.length) {
        console.log("Excede al número de filas.");
        return seatsReserved;
    } else {
        for (let i = butacas.length - 1; i >= 0; i--) {
            //console.log("butaca [" + i + "]: " + butacas[i]);
            if (butacas[i] !== undefined) {
                if (validateNumberOfAvaibleRows(i, butacas, nroSeatsReserve)) {
                    for (let j = butacas[i].length - 1; j >= 0; j--) {
                        if (butacas[i][j] !== undefined && butacas[i][j].estado === false
                            && band < nroSeatsReserve) {
                            butacas[i][j].estado = true;
                            seatsReserved.add(butacas[i][j].id);
                            //printButaca(i, j, butacas)
                            band++;
                        }
                    }
                }
            }
        }
    }
    return seatsReserved;
}

function validateNumberOfAvaibleRows(i, butacas, nroSeatsReserve){
    let band = 0;
    let result = false;
    for (let j = butacas[i].length - 1; j >= 0 && band < nroSeatsReserve; j--) {
        //console.log("i-" + i + "\tj-" + j);
        if (butacas[i][j] !== undefined && butacas[i][j].estado === false) {
            band++;
            if (band === nroSeatsReserve) {
                result = true;
            }
        } else {
            band = 0;
        }
        //console.log("band-" + band);
    }
    return result;
}

function printButacas(butacas) {
    for (let i = 0; i < butacas.length; i++) {
        for (let j = i; j < butacas[i]; j++) {
            printButaca(i, j, butacas);
        }
    }
}

function printButaca(i, j, butacas) {
    console.log("butacas [" + i + "][" + j + "]: " + butacas[i][j]);
    console.log("id: " + butacas[i][j].id);
    console.log("estado: " + butacas[i][j].estado);
}

function testCase1(butacas) {
    butacas[9][6].estado = true;
    butacas[9][7].estado = true;
    butacas[9][8].estado = true;
    butacas[9][9].estado = true;
}

function testCase2(butacas) {
    testCase1(butacas);
    butacas[9][5].estado = true;
    butacas[9][4].estado = true;
    butacas[9][3].estado = true;
    butacas[9][2].estado = true;
    butacas[9][1].estado = true;
    butacas[9][0].estado = true;
    butacas[8][6].estado = true;
    butacas[8][5].estado = true;
    butacas[8][4].estado = true;
    butacas[8][3].estado = true;
    butacas[8][2].estado = true;
}

function testCase3(butacas) {
    testCase2(butacas);
    butacas[8][9].estado = true;
    butacas[8][8].estado = true;
    butacas[8][7].estado = true;
}