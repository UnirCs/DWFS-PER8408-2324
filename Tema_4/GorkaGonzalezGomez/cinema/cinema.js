// Definir el tamaño de la matriz de butacas
const N = 10; // Número de filas y columnas
const M = 21; // Número de filas y columnas
butacas = [];

document.addEventListener('DOMContentLoaded', () => {
    butacas = setup();
});

document.getElementById('POST-seats').addEventListener('input', () => {
    clearSeats();
    let numberOfSeats = Number(document.getElementById('POST-seats').value);
    let suggestedSeats = suggest(numberOfSeats);
    selectSeats(suggestedSeats);
});

// Función para inicializar la matriz de butacas
function setup() {
    let idContador = 0; // Iniciar el contador de IDs en 1 (los humanos no empezamos a contar desde 0)
    let rows = document.querySelectorAll('tr');

    rows.forEach((row) => {
        let seats = row.querySelectorAll('button')
        seats.forEach((seat) => {
            const available = (Math.random() < 0.3)
            seat.id = idContador++;
            seat.estado = available;
            if(!available){
                seat.classList.add('seats__seat');
            }else{
               seat.classList.add('seats__seat--occupied');
            }
        });
    });
    return rows;
}

const clearSeats = () => {
    butacas.forEach((row) => {
        let seats = row.querySelectorAll('button')
        seats.forEach((seat) => {
            seat.classList.replace('seats__seat--selected', 'seats__seat')
        });
    });
}

const selectSeats = (suggestedSeats) => {
    suggestedSeats.forEach((suggestedSeatId) => {
        document.getElementById(suggestedSeatId).classList.replace('seats__seat' , 'seats__seat--selected');
    });
}

function suggestRow(asientos, idsAsientos, i) {
    for (let j = 0; j < M && idsAsientos.size < asientos; j++) {
        seat = document.getElementById(i*M+j);
        if (seat.estado !== true) {
            idsAsientos.add(seat.id);
        } else if (idsAsientos.size !== 0) {
            idsAsientos.clear();
        }
    }
    if (asientos !== idsAsientos.size) {
        idsAsientos.clear();
    }
    return idsAsientos
}

function suggest(asientos) {
    let idsAsientos = new Set()
    if (asientos > M) {
        return idsAsientos;
    }
    for (let i = 9; i >= 0 && idsAsientos.size < asientos; i--) {
        idsAsientos = suggestRow(asientos, idsAsientos, i);
    }
    return idsAsientos;
}




