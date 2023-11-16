// Definir el tamaño de la matriz de butacas
const N = 10; // Número de filas y columnas

// Función para inicializar la matriz de butacas
let butacas = [];
function setup() {
    let idContador = 1; // Iniciar el contador de IDs en 1 (los humanos no empezamos a contar desde 0)

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

function suggest(Nasientos){
    // Inicializar la matriz
    butacas = setup();
    let butacasOcupadas = [];
    let butacasAsignadas =[]
    let operator = true;
    if (Nasientos>N) {
        return new Set([])
    }else {
        for (let i = N-1; i>=0 && operator; i--){
            for (let j = N-1; j>=0 && operator; j--){
                if(butacas[i][j].estado===false){
                    butacasOcupadas.push(butacas[i][j].id)
                }else{
                    butacasOcupadas = [];
                }
                if (butacasOcupadas.length>=Nasientos) {
                    operator=false;
                    butacasAsignadas = butacasOcupadas;
                }
            }
                butacasOcupadas = [];
        }

    }
    console.log('Asientos sugeridos: '+ butacasAsignadas +'.');
}
