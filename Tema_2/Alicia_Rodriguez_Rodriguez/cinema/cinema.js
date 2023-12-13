// Definir el tamaño de la matriz de butacas (número de filas y de columnas)
const nFilas = 5;
const nColumnas = 15;

// Función para inicializar la matriz de butacas
function setup() {
    let idContador = 1; // Iniciar el contador de IDs en 1 (los humanos no empezamos a contar desde 0)
    let butacas = [];

    for (let i = 0; i < nFilas; i++) {
        // Nueva fila
        let fila = [];
        for (let j = 0; j < nColumnas; j++) {
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

//Función para sugerir un numero determinado de asientos
function suggest(nAsientosSolicitados) {

    let asientosSugeridos = new Set();
    //Se comenzará a buscar asientos en la fila más lejana a la pantalla
    let posFila = butacas.length -1;
    while(posFila> 0 && asientosSugeridos.size< nAsientosSolicitados) {
        let fila = butacas[posFila];
        let posButaca = 0;
        while (fila.length > posButaca && asientosSugeridos.size < nAsientosSolicitados) {
            //Si la butaca no está ocupada añadimos a la respuesta y si lo está comenzamos de nuevo
            if (fila[posButaca].estado === false) {
                asientosSugeridos.add(fila[posButaca].id);
            } else {
                asientosSugeridos = new Set();
            }
            posButaca++;
        }
        //Si se acaba la fila (pero no se llega a los asientos solicitados) volvemos a empezar en nueva fila
        if(fila.length === posButaca && asientosSugeridos.size < nAsientosSolicitados){
            asientosSugeridos = new Set();
        }

        posFila--;

    }
    return asientosSugeridos;
}

function addOcuppiedSeats(seatList){
    for (let posFila in butacas) {
        let fila = butacas[posFila];
        for(let posButaca in fila){
            if(seatList.includes(fila[posButaca].id)){
                fila[posButaca].estado = true;
            }
        }
    }

}

// Inicializar la matriz
let butacas = setup();
// Añadimos sitios ocupados en varias filas
addOcuppiedSeats([36,37,38,39,47,48,54,57,62,63,68,69,70,71,72,73,74,75]);
// Imprimir la matriz
console.log(butacas);


// Test fuera de rango: respuesta Set vacío
let posicionSugerida0 = suggest(0);
console.log(posicionSugerida0);
let posicionSugerida16 = suggest(16);
console.log(posicionSugerida16);
// Test posiciones: respuesta ids posiciones sugeridas
let posicionSugerida1 = suggest(1);
console.log(posicionSugerida1);
let posicionSugerida15 = suggest(15);
console.log(posicionSugerida15);
let posicionSugerida5 = suggest(5);
console.log(posicionSugerida5);
let posicionSugerida6 = suggest(6);
console.log(posicionSugerida6);
let posicionSugerida7 = suggest(7);
console.log(posicionSugerida7);