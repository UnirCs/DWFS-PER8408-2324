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

function suggest(n) {
    const d = new Set();
    if (N >= n && n > 0) {
        for (let i = N -1; i >= 0 && d.size < n; i--) {
            for (let j = 0; j < N && d.size < n && N - j >= n - d.size; j++) {
                if (butacas[i][j].estado === false) {
                    d.add(butacas[i][j].id);
                }else if (d.size > 0){
                    d.clear();
                }
            }
            if (d.size < n) {
                d.clear();
            }
        }
    }
    console.log("Asientos sugeridos:" + Array.from(d));
    return d;
}

// Inicializar la matriz
let butacas = setup();

const numSillas = document.getElementById("numero");
const resultado = document.getElementById("selecion");

numSillas.oninput = function() {
    if(!isNaN(numSillas.value)){
        resultado.innerHTML = Array.from(suggest(numSillas.value)).join(', ');
    }else resultado.innerHTML = "<br/>";
}

// Imprimir la matriz
console.log(butacas);