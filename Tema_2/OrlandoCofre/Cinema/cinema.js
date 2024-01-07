// Definir el tamaño de la matriz de butacas
const N = 3; // Número de filas y columnas
const M = 5; // Número de filas y columnas

let reserva = [];
// Función para inicializar la matriz de butacas
function setup() {
    let idContador = 1; // Iniciar el contador de IDs en 1 (los humanos no empezamos a contar desde 0)
    let butacas = [];

    for (let i = 0; i < N; i++) {
        // Nueva fila
        let fila = [];
        for (let j = 0; j < M; j++) {
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

function suggest(asientos){
    let reserva = [];
    if(asientos > M){
        return [];
    }
    else{
        let fila = 0;
        let columna = 0;
        let idInicio = 0;

        for(fila = (N-1);fila >= 0; fila-- ){
            reserva = [];
            idInicio = 0;
            for(columna = 0;columna < M; columna++ ){
                if( !butacas[fila][columna].estado && reserva.length < asientos ){
                    if(idInicio == 0) {idInicio = butacas[fila][columna].id  }
                    reserva.push(idInicio++);
                }
            }
            console.log(reserva);
            //Si hay asientos disponible actualizamos
            if(reserva.length == asientos ){
                for(columna = 0;columna < M; columna++ ){
                    if( !butacas[fila][columna].estado && reserva.find( x => x == butacas[fila][columna].id ) ){
                        butacas[fila][columna].estado = true;
                    }
                }    
                break;
            } 
        }
    } 
} 

// Inicializar la matriz
let butacas = setup();

reserva = suggest(3);
console.log(butacas);

reserva = suggest(2);
console.log(butacas);

reserva = suggest(4);
console.log(butacas);

reserva = suggest(5);
console.log(butacas);
