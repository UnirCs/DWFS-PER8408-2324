// Definir el tamaño de la matriz de butacas
const N = 12; // Número de filas y columnas

// Función para inicializar la matriz de butacas
function setup() {
    let idContador = 1; // Iniciar el contador de IDs en 1 (los humanos no empezamos a contar desde 0)
    let butacas = [];
    let butacasOcupadas;
    let estadoAsignado;

    for (let i = 0; i < N; i++) {
        // Nueva fila
        let fila = [];
        for (let j = 0; j < N; j++) {
                butacasOcupadas = Math.floor(Math.random() * 2);//obtiene valor aleatorio 1 o 0
            if(butacasOcupadas==1){
                estadoAsignado=true;
            }else{
                estadoAsignado=false;
            }
            // Nuevo asiento
            fila.push({
                id: idContador++,
                estado: estadoAsignado // Estado inicial libre
            });
        }
        butacas.push(fila);
    }
    return butacas;
}

// Inicializar la matriz
let butacas = setup();
// Imprimir la matriz
console.log(butacas);

function suggest(n=2) {
    let butacasReservadas = [];
    if(n>butacas.length ){
        return butacasReservadas;
    }
    let i = butacas.length - 1; // Asignamos la ultima fila
    let j = butacas.length - 1; // Se buscara por la ultima butaca de la fila
    
    while(i >= 0 && butacasReservadas.length < n) {//recorremos el array desde el final y solo saldra si recorre todas als filas o si llenamos las butacas reservadas
        butacasReservadas = []; //Reseteamos las butacas reservadas
        while (j >=0 && butacasReservadas.length < n) {
            if (butacas[i][j].estado == false) {
                butacasReservadas.push(butacas[i][j].id);//Agregamos a butacas reservadas si el id esta disponible
            }
            else {
                butacasReservadas = [];//reseteamos los asientos no estan juntos
            }
            j--;
        }
        i--;
        j = butacas.length - 1;
    }

    if(butacasReservadas.length < n){//Esta condicion se agrego por si en el array anterior estando en la primera fila no llega a resetear las butacas por que ya no hay mas filas que recorrer
        butacasReservadas = []
    }
    return butacasReservadas;
}
console.log("##################################################");
console.log("El usuario elije reservar 14 asientos")
console.log(suggest(14));

console.log("##################################################");
console.log("El usuario elije reservar 6 asientos")
console.log(suggest(6));
