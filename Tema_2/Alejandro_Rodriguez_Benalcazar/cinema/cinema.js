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

function suggest(butacas, Nasientos){
    let count=1;
    let butacasOcupadas = [];
    let operator = true;
    if (Nasientos>N) {
        return new Set([])
    }else {
        for (let i = N-1; i>=0; i--){
            for (let j = N-1; j>=0; j--){
                if(butacas[i][j].estado===false){
                    count++;
                    butacas[i][j].estado=true
                    butacasOcupadas.push(butacas[i][j])
                }else {
                    count = 0;
                }
                if (butacasOcupadas.length>=Nasientos) {
                    return butacasOcupadas;
                }
            }
        }

    }
}

// Inicializar la matriz
let butacas = setup();
let asientosOcupados = suggest(butacas,6)


// Imprimir la matriz
console.log(asientosOcupados);
