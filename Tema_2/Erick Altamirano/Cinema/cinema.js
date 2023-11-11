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

// Imprimir la matriz
console.log(butacas);

suggest(10);
function suggest(nAsientos){
    if(nAsientos>butacas.length){
        butacas = [];
        return butacas;
    }else{
        let suma=0;
        let posicionAsiento=[];
        let fila= 0;
        for(let y = N-1;y>=0; y--){
            for (let x= 0 ; x<N; x++){
                if(butacas[y][x].estado===false && suma < nAsientos){
                    posicionAsiento.push(x);
                    suma++;
                    fila=y;
                    if(x===N-1 && suma< nAsientos){
                        posicionAsiento=[];
                        suma=0;
                    }
                }else if(butacas[y][x].estado===true && suma < nAsientos){
                    posicionAsiento=[];
                    suma=0;
                }else if(suma===nAsientos){
                    x=N;
                    y=-1;
                }
            }
        }
        for(let x=0; posicionAsiento.length>x; x++){
            butacas[fila][x].estado=true;
        }
        console.log(butacas);
    }
}





