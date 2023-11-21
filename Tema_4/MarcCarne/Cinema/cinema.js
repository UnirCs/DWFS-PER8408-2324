document.addEventListener('DOMContentLoaded', () => {
    // Inicializar la matriz de butacas
    let seats = createSeatMatrix();
    seats[7][7].setStatus(true);

    // Adquirir la parte del HTML en la que se definen la matrix de botones
    let seatsMatrix = document.getElementById("seats");
    // Recorrer todas las filas y todos los botones para modificar el ID.
    // El boton superior izquierda de la matriz es el id 1 y el boton inferior derecho
    // el 64 (ya que es una matriz 8*8)
    let idx = 1;
    seatsMatrix.querySelectorAll("div").forEach(row => {
        row.querySelectorAll("button").forEach(button => {
            button.id = "button" + idx.toString();
            idx++;
        })
    });

    // Añadir el listener a input
    let seatsNumElem = document.getElementById("seats-num")
    seatsNumElem.addEventListener("input", () => {
        // Eliminar la clase que muestra la selección a todos los asientos
        document.getElementById("seats").querySelectorAll("button").forEach(button => {
            button.classList.remove("seat-candidate")
        })
        let seatsIds = suggest(seatsNumElem.value, seats)
        seatsIds.forEach(seatId => {
            document.getElementById("button" + seatId.toString()).classList.toggle("seat-candidate")
        })
    });

});

// Definición de la matriz
const numFilas = 8;
const numAsientosFila = 8;

// Clase seat, para definir las propiedades de un asiento
class Seat {
    constructor(id) {
        this.id = id;
        this.status = false;
    }

    isAvailable() {
        return !this.status;
    }

    setStatus(status) {
        this.status = status;
    }

    getId() {
        return this.id;
    }
}

// Función para generar la matriz
function createSeatMatrix() {
    let idButaca = 1;
    let seats = []; // Array vacío

    for (let fila = 0; fila < numFilas; fila ++) {
        let fila = []; // Array de la fila
        for (let asiento = 0; asiento < numAsientosFila; asiento++) {
            fila.push(
                new Seat(idButaca)
            );
            idButaca++;
        }
        seats.push(fila);
    }
    return seats;
}

// Función para buscar asientos juntos en una fila
function findSeatsInFila(numAsientos, filaArray) {
    let suggestedSeats = new Set(); // Array vacío
    let seatCount = 0; // Control de los asientos asignados
    // Búsqueda desde la izquierda
    let seat = 0;
    while ((seatCount < numAsientos) && (seat < numAsientosFila)) {
        if (filaArray[seat].isAvailable()) {
            seatCount++;
            suggestedSeats.add(filaArray[seat].getId());
        } else {
            seatCount = 0;
            suggestedSeats.clear()
        }
        seat++;
    }
    if (suggestedSeats.size < numAsientos) {
        suggestedSeats.clear();
    }
    console.log(suggestedSeats);
    return suggestedSeats;
}

// Función del ejercicio para sugerir asientos a una petición de N asientos
// contiguos
function suggest(numAsientos = 0, seatsArray) {
    let suggestedSeats = new Set();
    // Comprobación de tamaño de fila
    if (numAsientos > numAsientosFila) {
        return suggestedSeats;
    } else {
        // Busqueda desde la última fila
        for (let fila = numFilas - 1; fila >= 0 && suggestedSeats.size == 0; fila--) {
            suggestedSeats = findSeatsInFila(numAsientos, seatsArray[fila]);
        }
    }
    return suggestedSeats;
}
