// Definir el tamaño de la matriz de butacas
const N = 5; // Número de filas y columnas
const M = 13; // Número de filas y columnas

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
    reserva = [];
    FILA = 0;
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
                if(idInicio >= 0 && reserva.length < asientos && butacas[fila][columna].estado ){
                    idInicio = 0;
                    reserva = [];
                }
            }
            //Si hay asientos disponible actualizamos
            if(reserva.length == asientos && asientos > 0 ){
                console.log("Asientos Sugeridos: " + reserva.toString());
                break;
                // for(columna = 0;columna < M; columna++ ){
                //     if( !butacas[fila][columna].estado && reserva.find( x => x == butacas[fila][columna].id ) ){
                //         butacas[fila][columna].estado = true;
                //     }
                // }
            }
        }
    } 
}

function confirmarReserva(fila){

    for(columna = 0;columna < M; columna++ ){
        if( !butacas[fila][columna].estado && reserva.find( x => x == butacas[fila][columna].id ) ){
            butacas[fila][columna].estado = true;
        }
    }
}

let butacasHtml = document.getElementsByTagName('td');

    for(let i = 0 ; i < butacasHtml.length ; i ++ ){
        butacasHtml[i].id = "butaca_" + (i+1);
    }


function actualizaTabla(){
    let asientos = document.getElementById("asientos").value;
    suggest(asientos);
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            let butaca =  butacasHtml[ butacas[i][j].id - 1 ] ;
            butaca.className = (butacas[i][j].estado)?"seleccionado":"";
        }
        if( reserva.length == asientos && reserva.length> 0 ){
            for (let j = 0; j < reserva.length; j++) {
                let butacaSugerida =  document.getElementById("butaca_" + reserva[j]) ;
                    butacaSugerida.className = "sugerido";
            }
        }
    }
}


function inicializaButacas(){
    butacas[4][0].estado = true;
    butacas[4][1].estado = true;
    butacas[4][2].estado = true;
    butacas[4][3].estado = true;
    butacas[4][4].estado = true;
    butacas[4][5].estado = true;

    butacas[2][5].estado = true;
    butacas[2][6].estado = true;
    butacas[2][2].estado = true;
    butacas[2][7].estado = true;

    butacas[1][8].estado = true;
    butacas[1][9].estado = true;
    butacas[1][7].estado = true;
}

// Inicializar la matriz
let butacas = setup();
inicializaButacas();
actualizaTabla();
console.log("Butacas Inicializadas")
