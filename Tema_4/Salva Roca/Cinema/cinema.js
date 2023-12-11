// Funciones a ejecutar una vez el body del HTML esté disponible
const seatMap = setup(); // Inicializamos matriz de butacas
assignSeatIds(); // Asignamos id a cada asiento
unavailableSeatsTest(seatMap); // Simulamos que el backend nos indica que ya hay asientos ocupados
displayUnavailableSeats(seatMap); // Mostramos asientos ocupados

// Ejecutar la función de sugerir asientos cuando modifiquemos el número de asientos a reservar
document.getElementById('seatsInput').addEventListener('input', function() {
    let inputRegex = /^([1-9]|10|)$/;
    if(!inputRegex.test(this.value)) {
        createErrorMessage('seatsInput', 'Por favor, indique un valor numérico válido');
    } else {
        removeErrorMessage('seatsInput');
    }

    suggest(seatMap, parseInt(this.value)); // Llamar a la función suggest con el valor numérico ingresado
});

// Función para inicializar la matriz de butacas
function setup() {
    const N = 10; // Número de filas y columnas
    let seatId = 1;
    let seatMap = [];

    for (let i = 0; i < N; i++) {
        // Nueva fila
        let row = [];
        for (let j = 0; j < N; j++) {
            // Nuevo asiento
            row.push({
                id: seatId++,
                estado: false // Estado inicial libre
            });
        }
        seatMap.push(row);
    }
    return seatMap;
}

// Función para asignar a cada asiento un id de forma dinámica
function assignSeatIds() {
    const seats = document.querySelectorAll('.td__btn');

    seats.forEach((element, index) => {
        element.id = `seat_${index + 1}`;
    });
}

// Función para mostrar asientos no disponibles
function displayUnavailableSeats(seatMap) {
    const unavailableSeats = new Set();

    for (let i = 0; i < seatMap.length; i++) {
        for (let j = 0; j < seatMap[i].length; j++) {
            if (seatMap[i][j].estado) {
                unavailableSeats.add(seatMap[i][j].id);
            }
        }
    }

    // Modificamos la clase de los asientos ocupados para que se muestren según el estilo correspondiente (rojo)
    unavailableSeats.forEach(seatId => {
        const seatElement = document.getElementById(`seat_${seatId}`);
        if (seatElement) {
            seatElement.classList.toggle("td__btn--unavailable");
        }
    });
}


// Función para sugerir butacas, tomando como argumento el número de asientos a reservar
function suggest(seatMap, nSeats) {
    const selectedSeats = new Set(); // Inicializamos el set que contendrá los asientos sugeridos

    // Quitamos asientos que hayan sido seleccionados anteriormente
    const seats = document.querySelectorAll('.td__btn');

    seats.forEach((element) => {
        element.classList.remove("td__btn--selected");
    });

    if (nSeats <= seatMap[0].length) {
        for (let i = seatMap.length - 1; i >= 0 && selectedSeats.size < nSeats; i--) {
            selectedSeats.clear(); // Vaciamos el set al saltar de fila
            for (let j = 0; j < seatMap[i].length && selectedSeats.size < nSeats; j++) {
                if (!seatMap[i][j].estado) {
                    selectedSeats.add(seatMap[i][j].id); // Añadimos asiento disponible al set
                } else {
                    selectedSeats.clear(); // Vaciamos el set si un asiento no está disponible (no consecutivos)
                }
            }
        }
    }

    // Modificamos la clase de los asientos sugeridos para que se muestren según el estilo correspondiente (verde)
    selectedSeats.forEach(seatId => {
        const seatElement = document.getElementById(`seat_${seatId}`);
        if (seatElement) {
            seatElement.classList.add("td__btn--selected");
        }
    });
}

// Test: marcamos diferente disponibilidad de asientos juntos por filas
function unavailableSeatsTest() {
    // Fila 10: numAsientos = 1
    seatMap[9][0].estado = true;
    seatMap[9][1].estado = true;
    seatMap[9][3].estado = true;
    seatMap[9][5].estado = true;
    seatMap[9][7].estado = true;
    seatMap[9][9].estado = true;

// Fila 9: numAsientos = 2
    seatMap[8][0].estado = true;
    seatMap[8][3].estado = true;
    seatMap[8][6].estado = true;
    seatMap[8][9].estado = true;

// Fila 8: numAsientos = 3
    seatMap[7][0].estado = true;
    seatMap[7][4].estado = true;
    seatMap[7][8].estado = true;

// Fila 7: numAsientos = 4
    seatMap[6][0].estado = true;
    seatMap[6][3].estado = true;
    seatMap[6][4].estado = true;
    seatMap[6][9].estado = true;

// Fila 6: numAsientos = 5
    seatMap[5][0].estado = true;
    seatMap[5][3].estado = true;
    seatMap[5][9].estado = true;

// Fila 5: numAsientos = 6
    seatMap[4][0].estado = true;
    seatMap[4][2].estado = true;
    seatMap[4][9].estado = true;

// Fila 4: numAsientos = 7
    seatMap[3][0].estado = true;
    seatMap[3][8].estado = true;
    seatMap[3][9].estado = true;

// Fila 3: numAsientos = 8
    seatMap[2][0].estado = true;
    seatMap[2][9].estado = true;

// Fila 2: numAsientos = 9
    seatMap[1][9].estado = true;

// Fila 1: numAsientos = 10 (dejamos la fila vacía)
}

// Crear un mensaje de error y mostrarlo bajo el campo correspondiente
const createErrorMessage = (id, message) => {
    let existingMessage = document.getElementById(id + 'Error');
    if (!existingMessage) {
        let errorMessage = document.createElement('p');
        errorMessage.id = id + 'Error';
        errorMessage.textContent = message;
        errorMessage.classList.add('error');
        document.getElementById(id).insertAdjacentElement('afterend', errorMessage);
    }
};

// Eliminar el mensaje de error si ya no es necesario
const removeErrorMessage = (id) => {
    let existingMessage = document.getElementById(id + 'Error');
    if (existingMessage) {
        existingMessage.remove();
    }
};