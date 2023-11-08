// Definir el tamaño de la matriz de butacas
const N = 10; // Número de filas y columnas

function suggest(numberOfSeats) {
	let seatsUsed = new Set()
	if(numberOfSeats > N) return seatsUsed;

	for (let rowIdx = 0; rowIdx < butacas.length; rowIdx++) {
		const row = butacas[rowIdx];

		let tempSeatsIdxs = [];
		let seatIdx = 0;
		while(seatIdx < row.length && tempSeatsIdxs.length < numberOfSeats) {
			const seat = row[seatIdx];
			if(!seat.estado) {
				tempSeatsIdxs.push(seatIdx);
			} else {
				tempSeatsIdxs = [];
			}
			seatIdx++;
		}

		if(tempSeatsIdxs.length === numberOfSeats) {
			tempSeatsIdxs.forEach(seatIdx => {
				butacas[rowIdx][seatIdx].estado = true;
				seatsUsed.add(butacas[rowIdx][seatIdx].id);
			});
			break;
		}
	}

	return seatsUsed;
}


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

let seats = suggest(9);
let seats2 = suggest(1);
let seats3 = suggest(3);
let seats4 = suggest(10);
let seats5 = suggest(11);
let seats6 = suggest(3);
// Imprimir la matriz
console.log(butacas);