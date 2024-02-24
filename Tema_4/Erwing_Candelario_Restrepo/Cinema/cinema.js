// Definir el tamaño de la matriz de butacas
const N = 7; // Número de filas y columnas
let numberSeats;
let reservedSeating = null;

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
				estado: false,
			});
		}
		butacas.push(fila);
	}
	console.log('Butacas inicializadas');
	return butacas;
}

window.onload = function () {
	var list = document.querySelectorAll('.border.border-primary.cuadrado.thumbnail');
	list.forEach((element, index) => {
		element.setAttribute('id', index + 1);
	});
	numberSeats = setup(list.length);
};

// Funcion que devuelve un objeto de asiento
function suggest(seatRequest) {
	let suggestedSeats = new Set();
	numberSeats[6][6].estado = true;

	if (seatRequest > N) {
		return new Set();
	} else {
		let decreaseSeat = seatRequest;

		for (let i = N - 1; i >= 0 && decreaseSeat > 0; i--) {
			decreaseSeat = seatRequest;
			suggestedSeats.clear();
			for (let j = N - 1; j >= 0 && decreaseSeat > 0; j--) {
				if (!numberSeats[i][j].estado) {
					decreaseSeat = decreaseSeat - 1;
					suggestedSeats.add({ id: numberSeats[i][j].id, estado: true });
				} else {
					decreaseSeat = seatRequest;
					suggestedSeats.clear();
				}
			}
		}

		//console.log('Asientos sugeridos: ' + Array.from(suggestedSeats).join(', '));
		return suggestedSeats;
	}
}

let AsientoReservado = (idReservado) => {
	document.getElementById(idReservado).classList.remove('border', 'border-primary', 'thumbnail');
	document.getElementById(idReservado).classList.add('default');
};

let AsientoDisponible = (idReservado) => {
	document.getElementById(idReservado).classList.remove('default');
	document.getElementById(idReservado).classList.add('border', 'border-primary', 'thumbnail'); //'border', 'border-primary', 'thumbnail'
};

document.getElementById('InputReserva1').addEventListener('change', (event) => {
	event.preventDefault();

	let vacantSeat = suggest(event.target.valueAsNumber);

	if (reservedSeating != null) {
		reservedSeating.forEach((reserved) => {
			AsientoDisponible(reserved.id);
		});
	}

	vacantSeat.forEach((vacant) => {
		AsientoReservado(vacant.id);
	});
	reservedSeating = vacantSeat;
});
