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


function suggest(nAsientos) {

    let filas = butacas.length;

    if (nAsientos > butacas.length) {
        return [];
    }
    let result = [];
    let isThereArmchairs = false;
    for (let i = filas - 1; i >= 0; i--) {

        for (let j = butacas[i].length - 1; j >= 0 && !isThereArmchairs; j--) {
            if ((j + 1 - nAsientos) >= 0 && !isThereArmchairs) {

                let aux = 1;
                let aux2 = j;
                while (aux <= nAsientos) {
                    if (!butacas[i][aux2].estado && aux == nAsientos) { // Is the seat unoccupied?
                        isThereArmchairs = true;
                    } else if (butacas[i][aux2].estado) { // Is the seat occupied??
                        isThereArmchairs = false;
                        aux = nAsientos + 1;
                    }
                    aux++;
                    aux2--;
                }

                if (isThereArmchairs) {
                    let x = j;
                    for (let z = 1; z <= nAsientos; z++) {
                        butacas[i][x].estado = true;
                        result.push(butacas[i][x].id)
                        x--;
                    }
                }
            }

        }
    }
    return result;

}

// Imprimir la matriz
console.log(butacas);

console.log(suggest(2));
console.log(suggest(5));
console.log(suggest(4));
console.log(suggest(5));
console.log(suggest(3));
console.log(suggest(4));
console.log(suggest(6));
console.log(suggest(7));
console.log(suggest(9));
console.log(suggest(2));
console.log(suggest(9));
console.log(suggest(2));
console.log(suggest(8));
console.log(suggest(9));
console.log(suggest(4));
console.log(suggest(9));
console.log(suggest(8)); // empty
console.log(suggest(2));
console.log(butacas);