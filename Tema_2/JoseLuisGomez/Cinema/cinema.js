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
    const d = new Set([]);
    for (let i = 9; i >= 0; i--) {
        if (butacas[i].length >= n) {
            for (let j = 0; j < 10; j++) {
                if (butacas[i][j].estado === false) {
                    d.add(butacas[i][j].id);
                    j++;
                    while (butacas[i].length > j && butacas[i][j].estado === false && d.size !== n) {
                        d.add(butacas[i][j].id);
                        if (d.size !== n) {
                            j++;
                        }
                    }
                    if (d.size === n) {
                        if (j < 9) {
                            j += 9 - j;
                        }
                        if (i>= 1) {
                            i -= i;
                        }
                    } else d.clear();
                }
            }
        }
    }
    return d;
}

// Inicializar la matriz
let butacas = setup();

// Imprimir la matriz
console.log(butacas);
console.log(suggest(3));