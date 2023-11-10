// Definición de la matriz
const numFilas = 8;
const numAsientosFila = 14;

// Clase seat, para definir las propiedades de un asiento
class Seat {
  constructor(id) {
    this.id = id;
    this.status = false;
  }

  isAvailable() {
    return !this.status;
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
    for (let fila = numFilas - 1; fila >= 0; fila--) {
      suggestedSeats = findSeatsInFila(numAsientos, seatsArray[fila]);
      if (suggestedSeats.size > 0) {
        // Hay asientos disponibles
        break;
      }
    }
  }
  return suggestedSeats;
}

// Inicializar la matriz de butacas
let seats = createSeatMatrix();

// Generar ocupaciones de butacas


// PRUEBA: búsqueda de butacas
let requestedSeats = 14;
let suggestedSeats = new Set();
suggestedSeats = suggest(requestedSeats, seats);
console.log(suggestedSeats);
