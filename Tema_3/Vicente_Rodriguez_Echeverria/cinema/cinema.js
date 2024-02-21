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
                estado:false // Math.random() < 0.5 // Estado inicial libre
            });
        }
        butacas.push(fila);
    }
    return butacas;
}

function suggest(numeroAsiento){
    butacas=setup();
    let asientoReservado=new Set([]);
    let completado=false;
    let filaButaca,contadorReserva;
    if(numeroAsiento>N) return asientoReservado;
    for(let butaca=(N-1);butaca>=0;butaca--){
        filaButaca=butacas[butaca];
        //asientoReservado.clear();
        for(let fila=0;fila<N;fila++){
            contadorReserva=0;
            for(let i=0;i<numeroAsiento;i++){
                if((fila+numeroAsiento)<N){
                    if(filaButaca[fila+i].estado===false){
                        asientoReservado.add(filaButaca[fila+i].id);
                        contadorReserva++;
                    }
                    else{
                        asientoReservado.clear();
                        i=numeroAsiento;
                    }
                }
            }
            if(contadorReserva===numeroAsiento){
                butaca=-1;
                fila=N;
            }
        }
    }
    console.log(asientoReservado);
    return asientoReservado;
}
// Inicializar la matriz
//let butacas = setup();
//imprime butaca
//console.log(butacas);
//Inicializa reserva
//let reservado=
//suggest(5);
// Imprimir la reserva
//console.log(reservado);
