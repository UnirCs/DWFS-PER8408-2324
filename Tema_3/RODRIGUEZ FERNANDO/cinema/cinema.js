// Definir el tamaño de la matriz de butacas
const N = 10; // Número de filas y columnas

const numberSeatsSelected = document.getElementById("seatsSelected");

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
        estado: j % 5 === 0 || j % 9 === 0, // Estado inicial libre
      });
    }

    butacas.push(fila);
  }
  return butacas;
}

// Inicializar la matriz
// let butacas = setup();

//suggest

const suggest = (butacas, numberOfSeats) => {
  let rowSeats = butacas.length;

  if (numberOfSeats > rowSeats) {
    return {};
  }
  const seats = [];
  let i = butacas.length - 1;
  while (i >= 0 && seats.length !== numberOfSeats) {
    let j = butacas.length - 1;
    while (j >= 0 && seats.length !== numberOfSeats) {
      if (!butacas[i][j].estado) {
        seats.push(butacas[i][j]);
      }
      if (butacas[i][j].estado) {
        seats.length = 0;
      }

      if (seats.length === numberOfSeats) capacity = true;

      j--;
    }

    i--;
  }
  return seats;
};

numberSeatsSelected.addEventListener("input", function () {
  // Inicializar la matriz

  let butacas = setup();
  console.log("Butacas inicializadas");

  let seats = suggest(butacas, 3);

  console.log(
    seats
      .map(function (seat) {
        return seat.id;
      })
      .join(","),
  );
});
