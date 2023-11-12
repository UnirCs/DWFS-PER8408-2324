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

butacas[0][4].estado=true;
butacas[1][4].estado=true;
butacas[2][4].estado=true;
butacas[3][4].estado=true;
butacas[4][4].estado=true;
butacas[5][4].estado=true;
butacas[6][4].estado=true;
butacas[7][4].estado=true;
butacas[8][4].estado=true;
butacas[9][4].estado=true;

butacas[6][5].estado=true;
butacas[7][7].estado=true;
butacas[8][8].estado=true;
butacas[9][3].estado=true;


// Imprimir la matriz
console.log(butacas);

suggest(3);
function suggest(nAsientos){
    if(nAsientos>butacas[0].length){
        console.log("No se encontro "+nAsientos+" juntos ");
    }else{
        let suma;
        let posicionAsiento;
        for(let x=butacas.length-1; x>=0; x--){
            posicionAsiento=[];
            suma=0;
            for(let y=butacas[0].length-1; y >= 0; y--){
                if(butacas[x][y].estado===false && suma<nAsientos){
                    suma++;
                    posicionAsiento.push(butacas[x][y].id);
                }else if(butacas[x][y].estado===true && suma<nAsientos){
                    suma=0;
                    posicionAsiento=[];
                }else if(suma===nAsientos){
                    y=-1
                    x=-1;
                }else {
                    posicionAsiento=[];
                    suma=0;
                }

            }
        }
        if(nAsientos!==posicionAsiento.length){
            posicionAsiento=[];
        }
        console.log(posicionAsiento);
    }
}





