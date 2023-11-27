// Definir el tamaño de la matriz de butacas
const rows              = 5; // Número de filas 
const columns           = 10; // Número de columnas
const inputNumberOfSits = document.getElementById("numberOfSits");

// Función para inicializar la matriz de butacas
function setup() {
    let idContador = 1; // Iniciar el contador de IDs en 1 (los humanos no empezamos a contar desde 0)
    let butacas = [];
    let randomCeroOne;
    let estado;

    for (let i = 0; i < rows; i++) {
        // Nueva fila
        let fila = [];
        for (let j = 0; j < columns; j++) {
            // Nuevo asiento
            randomCeroOne = Math.floor(Math.random() * 2);
            if (randomCeroOne == 0) {
                estado = false;
            } else {
                estado = true;
            }
            fila.push({
                id: idContador++,
                estado: estado // Estado inicial aleatorio
            });
        }
        butacas.push(fila);
    }
    return butacas;
}

function suggest(butacas, n) {
    let butacasReservadas = []; 
    let i = butacas.length - 1; // Empieza a buscar desde la última fila
    let j = 0; // Empieza a buscar desde la primera butaca de la fila
    while(i >= 0 && butacasReservadas.length < n) {
        //Cuando empieza una fila nueva se resetea la cuenta a 0 para que todos estén en la misma fila
        butacasReservadas = [];
        while (j < butacas[i].length && butacasReservadas.length < n) {
            //Si el asiento está vacío, se añade a la lista de butacas reservadas y se suma 1 al contador (si ya hay n butacas reservadas, se devuelve la lista)
            if (butacas[i][j].estado == false) {
                butacasReservadas.push(butacas[i][j].id);
            }
            //Si la butaca está ocupada, se resetea la lista de butacas reservadas
            else {
                butacasReservadas = [];
            }
            j++;
        }
        i--;
        j = 0;
    }
    return butacasReservadas;
}

inputNumberOfSits.addEventListener("input", function () {
    let butacas = setup();
    // Si fuese dinámico lo haríamos así:
    // let n = inputNumberOfSits.value;
    // let butacasReservadas = suggest(butacas, n);
    let butacasReservadas = suggest(butacas, 4);
    console.log(butacas);
    console.log(butacasReservadas);
});