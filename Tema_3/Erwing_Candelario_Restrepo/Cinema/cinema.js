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
				estado: false, // Estado inicial libre
			});
		}
		butacas.push(fila);
	}
	console.log('Butacas inicializadas');
	return butacas;
}

// Inicializar la matriz
// let butacas = setup();
let numberSeats = setup();

// Imprimir la matriz
// console.log(seatingAvailable(butacas, N));

function seatingAvailable(seatRequest = 0) {
	let suggestedSeats = new Set([]);
	let reservado = true;

	if (!(seatRequest > numberSeats[0].length)) {
		for (let i = numberSeats.length - 1; i >= 0 && reservado; i--) {
			for (let j = 0; j < numberSeats[i].length && reservado; j++) {
				if (!numberSeats[i][j].estado) {
					suggestedSeats.add(numberSeats[i][j].id); //Reserva
					reservado = suggestedSeats.size < seatRequest;
				} else {
					suggestedSeats.clear();
				}
			}

			if (suggestedSeats.size < seatRequest) suggestedSeats.clear();
		}
	}
	console.log('Asientos sugeridos: ' + Array.from(suggestedSeats).join(', '));
	return suggestedSeats;
}
