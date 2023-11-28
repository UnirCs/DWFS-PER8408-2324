const N = 10; // Number of rows and columns

// Function to setup the matrix
function setup() {
  let idCounter = 1; 
  let armchairs = [];

  for (let i = 0; i < N; i++) {
    // New row
    let fila = [];
    for (let j = 0; j < N; j++) {
      // New seat
      fila.push({
        id: idCounter++,
        estado: Math.random() < 0.5, 
      });
    }
    armchairs.push(fila);
  }
  return armchairs;
}

function suggest(numberSeats) {
  // check if there are enough seats
  if (numberSeats > N) {
    return {};
  }

  return armchairs.map((_, index) => {
    return checkRow(numberSeats, armchairs.length - index - 1);
  });
}

function checkRow(numberSeats, position) {
  //Revisar si la ultima butaca tiene el numero de asientos disponibles juntos
  let armchairRow = armchairs[position];
  let suggested = [];
  armchairRow.forEach((armchair, index) => {
    if (armchair.estado) {
      let freeSeats = 1;
      let j = index + 1;
      while (j < armchairRow.length && armchairRow[j].estado) {
        freeSeats++;
        j++;
      }
      if (freeSeats >= numberSeats) {
        suggested.push(armchair.id);
      }
    }
  });

  if (suggested.length === 0) {
    return {};
  }

  let firstSuggestion = suggested[0];
  let indexOfSuggestions = armchairRow.findIndex(
    (armchair) => armchair.id === firstSuggestion
  );
  let suggestedSeats = [];
  for (let i = 0; i < numberSeats; i++) {
    suggestedSeats.push(armchairRow[indexOfSuggestions + i].id);
  }
  return {
    fila: position + 1,
    suggest: suggestedSeats,
  };
}

// Inicializar la matriz
let armchairs = setup();

// let suggestedSeats;

// Imprimir la matriz
console.log(armchairs);

// Función para reservar una butaca
let available = suggest(2);
console.log("SUGERENCIA");
const firstSuggestion = available.find(
  (element) => element?.suggest !== undefined && element?.suggest.length > 0
);
if (firstSuggestion === undefined) {
  console.log("No hay sugerencias");
  return;
}
console.log(`FILA: ${firstSuggestion.fila}`);
console.log(`BUTACAS: ${firstSuggestion.suggest}`);
console.log(`STATUS_FILA:`);
console.log(armchairs[firstSuggestion.fila - 1]);
