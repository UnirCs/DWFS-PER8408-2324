//DWFS-PER8408-2324
//Tema 2: Implementación de un algoritmo de selección de butacas de cine
//Autor: Antonio Cañellas Coll


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

function suggest(nAsientos){
    let aSugeridos=new Set(); //Set que contiene los asientos sugeridos, si vuelve blanco no hay sugerencias
    if (nAsientos>N){
        return aSugeridos
    }
    else{
        sugerencia=false; /* Variable booleana que nos indicara si hay sugerencia de asientos, mientras sea False, no hay sugerencia*/
        buscarFila=N-1; /* Fila en la que estamos buscando */
        buscarColumna=0; /* Columna en la que estamos buscando*/
        pButaca=buscarColumna; /* Variable donde almacenaremos la columna de la primera butaca disponible*/


        /* El siguiente While recorrera toda la sala mientras no haya ninguna sugerencia o queden filas sin explorar*/
        while (!sugerencia && buscarFila>0){
            acumulado=0; /*asientos juntos que hemos encontrado*/
            //Buscamos dentro de una fila si hay el numero de asientos consecutivos que buscamos
            while (acumulado<nAsientos && buscarColumna<N){
                if (!butacas[buscarFila][buscarColumna].estado){
                    aSugeridos[acumulado]=butacas[buscarFila][acumulado].id;
                    acumulado++;
                    buscarColumna++;
                }
                else{
                    acumulado=0;
                    buscarColumna++;
                    aSugeridos.clear();

                }
            }
            /*Si hemos encontrado tantos asientos juntos como buscabamos en esta fila, la variable sugerencia se volvera true para indicarnos que SI hay sugerencia
            De lo contrario pasaremos a la siguiente fila
            */
            if (acumulado===nAsientos){
                sugerencia=true;
            }
            else{
                buscarFila--;
                buscarColumna=0;
                acumulado=0;
            }
        }
    }
    return aSugeridos;
}



// Inicializar la matriz
let butacas = setup();

// Imprimir la matriz
//console.log(butacas);

butacas[9][4].estado=true;
butacas[8][7].estado=true;
butacas[7][4].estado=true;

console.log(suggest(7));

