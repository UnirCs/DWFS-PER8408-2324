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

//Solución
function suggest(numAsientos){
    const asientosElegidos = new Set();
    let asientosSeguidos = 0;
    let asientosEncontrados = false;
    if(numAsientos <= butacas.length) { //Compruebo que el número de asientos es menor al de la fila
        for (let fila = butacas.length - 1; fila >= 0 && asientosEncontrados === false; fila--) {
            for (let columna = 0; columna < butacas[fila].length && asientosEncontrados === false; columna++) {
                if (butacas[fila][columna].estado === false && asientosSeguidos < numAsientos) {
                    asientosSeguidos++;
                    asientosElegidos.add(butacas[fila][columna].id);
                    if (asientosSeguidos === numAsientos) {
                        asientosEncontrados = true;
                    }
                } else {
                    asientosSeguidos = 0;
                    asientosElegidos.clear();
                }
            }
        }
        if(asientosEncontrados === false){
            asientosElegidos.clear();
        }
    }
    return asientosElegidos;
}
butacas[0][0].estado = true;
butacas[1][0].estado = true;
butacas[2][0].estado = true;
butacas[3][0].estado = true;
butacas[4][0].estado = true;
butacas[5][0].estado = true;
butacas[6][0].estado = true;
butacas[7][0].estado = true;
butacas[8][0].estado = true;
butacas[9][0].estado = true;
butacas[9][2].estado = true;
butacas[9][8].estado = true;
butacas[9][9].estado = true;

// Imprimir la matriz
let fila = "";
let estado;
for(let i = 0; i < butacas.length ; i ++){
    for(let j = 0; j < butacas[i].length ; j ++) {
        if (butacas[i][j].estado === false){
            estado = "libre";
        }else{
            estado = "ocupado";
        }
        fila += butacas[i][j].id + ":" + estado + " ";
    }
    fila += "\n";
}
console.log(fila);

console.log(suggest(8));