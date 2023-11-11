// Definir el tamaño de la matriz de butacas
const N = 10; // Número de filas y columnas

// Función para inicializar la matriz de butacas
function setup() {
    let idContador = 1; // Iniciar el contador de IDs en 1 (los humanos no empezamos a contar desde 0)
    let butacas = [];
    let randomCeroOne;
    let estado;

    for (let i = 0; i < N; i++) {
        // Nueva fila
        let fila = [];
        for (let j = 0; j < N; j++) {
            // Nuevo asiento
            randomCeroOne = Math.floor(Math.random() * 2);
            if (randomCeroOne == 0) {
                estado = false;
            } else {
                estado = true;
            }
            fila.push({
                id: idContador++,
                estado: estado // Estado inicial libre
            });
        }
        butacas.push(fila);
    }
    return butacas;
}

function suggest(butacas, n) {
    let butacasReservadas = []; 
    counter = 0;
    for (i = butacas.length - 1; i >= 0; i--) {
        for (j = 0; j < butacas[i].length; j++) {
            //Cuando empieza una fila nueva se resetea la cuenta a 0 para que todos estén en la misma fila
            if (j == 0)
            {
                butacasReservadas = [];
                counter = 0;
            }
            //Si el asiento está vacío, se añade a la lista de butacas reservadas y se suma 1 al contador (si ya hay n butacas reservadas, se devuelve la lista)
            if (butacas[i][j].estado == false) {
                butacasReservadas.push(butacas[i][j].id);
                counter++;
                if(counter == n) {
                    return butacasReservadas;
                }
            }
            //Si la butaca está ocupada, se resetea la lista de butacas reservadas y el contador
            else {
                butacasReservadas = [];
                counter = 0;
            }
        }
    }
}

// Inicializar la matriz
let butacas = setup();

// Imprimir la matriz
console.log(butacas);
console.log(suggest(butacas, 3));