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
console.log(butacas);
/* Se ajusta valor de disponibilidad de asientos para pruebas */
butacas[4][4].estado = false;
butacas[4][3].estado = true;
butacas[4][2].estado = false;
butacas[4][1].estado = true;
butacas[4][0].estado = true;

butacas[3][4].estado = true;
butacas[3][3].estado = false;
butacas[3][2].estado = true;
butacas[3][1].estado = false;
butacas[3][0].estado = true;

butacas[2][4].estado = true;
butacas[2][3].estado = false;
butacas[2][2].estado = true;
butacas[2][1].estado = false;
butacas[2][0].estado = true;

butacas[1][4].estado = true;
butacas[1][3].estado = false;
butacas[1][2].estado = true;
butacas[1][1].estado = false;
butacas[1][0].estado = true;

butacas[0][4].estado = true;
butacas[0][3].estado = true;
butacas[0][2].estado = true;
butacas[0][1].estado = false;
butacas[0][0].estado = false;


function suggest(asientos){
    let resultadoAsientos = new Set();
    let disponibilidad = true;
    let asignacionCompleta = false;
    let fila = butacas.length-1;
    let silla = butacas[N-1][N-1].id;
    while((resultadoAsientos.size < asientos) && disponibilidad && !asignacionCompleta) {
        if (asientos > N){
            disponibilidad = false;
        }else{
            for(let i =butacas.length - 1; i >= 0; i--){
                if(butacas[fila][i].estado === false && (resultadoAsientos.size !== asientos)) {
                    resultadoAsientos.add(butacas[fila][i].id);
                }else if (resultadoAsientos.size !== asientos){
                    resultadoAsientos.clear();
                }
            }
            if(resultadoAsientos.size === asientos){
                asignacionCompleta = true;
            }else{
                resultadoAsientos.clear();
                fila -=1;
                if(fila < 0){
                    disponibilidad = false;
                }
            }
        }
    }
    console.log("El resultado es: "+ [...resultadoAsientos]);
    return resultadoAsientos;
}
let resultado = [...suggest(2)];
console.log(resultado.length === 0 ? "No hay disponibilidad de sillas": "Los numeros de las sillas asignadas son: " + resultado);