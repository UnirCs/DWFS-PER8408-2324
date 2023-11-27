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
    console.log("Butacas inicializadas");
    return butacas;
}

// Inicializar la matriz
let butacas = setup();

function llenar(butacas){
    butacas[9][3].estado = true;
    //butacas[8][6].estado = true;
    butacas[7][5].estado = true;
    butacas[6][6].estado = true;
    butacas[5][4].estado = true;
    butacas[4][6].estado = true;
    butacas[3][5].estado = true;
    butacas[2][6].estado = true;
    butacas[1][6].estado = true;
    butacas[0][6].estado = true;
}
function suggest( asientosSugeridos){

    if (asientosSugeridos <= N) {
        let encontrado = false;
        let fila_existe = 0;
        let start = 0;
        for (let n_filas = N - 1; n_filas >= 0; n_filas--) {
            if (encontrado === false) {
                let fila = butacas[n_filas];
                let existe = false;
                let cupos = 0;
                start = 0;
                for (let i = 0; i < 10; i++) {
                    if (fila[i].estado === false && existe === false) {
                        cupos++;
                    } else
                        cupos = 0;

                    if (cupos === asientosSugeridos) {
                        existe = true;
                        start = i - (asientosSugeridos - 1);
                        fila_existe = n_filas;
                    }
                }

                if (existe === true)
                    encontrado = true;

            }
        }

        if (encontrado === true) {
            let asientos = [];
            for (let i = start + 1; i <= start + asientosSugeridos; i++)
                asientos.push(fila_existe * 10 + i);

            return asientos;
        }
        else
            return {};

    }
    else
        return {};
}
// Imprimir la matriz
//console.log(butacas);
//llenar(butacas);
//console.log(butacas);
console.log("Asientos sugeridos: " + suggest(7).toString());