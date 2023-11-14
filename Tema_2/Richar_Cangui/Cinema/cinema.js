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
        estado: Math.random() < 0.5, // Estado inicial libre
      });
    }
    butacas.push(fila);
  }
  return butacas;
}

function suggest(numeroAsientos) {
  // check if there are enough seats
  if (numeroAsientos > N) {
    return {};
  }

  return butacas.map((fila, index) => {
    return checkRow(numeroAsientos, butacas.length - index - 1);
  });
}

function checkRow(numeroAsientos, position) {
  //Revisar si la ultima butaca tiene el numero de asientos disponibles juntos
  let butacaFila = butacas[position];
  let suggested = [];
  butacaFila.forEach((butaca, index) => {
    if (butaca.estado) {
      // Si la butaca está libre
      let asientosLibres = 1;
      let j = index + 1;
      while (j < butacaFila.length && butacaFila[j].estado) {
        asientosLibres++;
        j++;
      }
      if (asientosLibres >= numeroAsientos) {
        suggested.push(butaca.id);
      }
    }
  });

  if (suggested.length === 0) {
    return {};
  }

  let firstSuggestion = suggested[0];
  let indexOfSuggestions = butacaFila.findIndex(
    (butaca) => butaca.id === firstSuggestion
  );
  let suggestedSeats = [];
  for (let i = 0; i < numeroAsientos; i++) {
    suggestedSeats.push(butacaFila[indexOfSuggestions + i].id);
  }
  return {
    fila: position + 1,
    suggest: suggestedSeats,
  };
}

// Inicializar la matriz
let butacas = setup();

// let suggestedSeats;

// Imprimir la matriz
console.log(butacas);

// Función para reservar una butaca
let available = suggest(7);
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
console.log(butacas[firstSuggestion.fila - 1]);
