const N = 7;
const SELECTED_SEAT_CLASS = "section__seat-selected";
const RESERVED_SEAT_CLASS = "section__seat-reserved";
let seatsId = 1;
let seatsSetup = [];

// Configuración inicial
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll(".section__seat").forEach( seats => {
        seats.id = seatsId.toString();
        seatsId++;
    });
    seatsSetup = setUp();
    document.getElementById("suggested_seats").addEventListener("input", (e) => {
        clearSelection()
        let seats = suggest(e.target.value);
        updateSelection(seats);
    });

});

// Cargar estilos de sillas reservadas
const reservedSeats = (seatId) => {
    document.getElementById(seatId).classList.add(RESERVED_SEAT_CLASS);
}

const updateSelection = (seats) => {
    seats.forEach( seat => {
        let silla = document.getElementById(seat);
        silla.classList.add(SELECTED_SEAT_CLASS)
    })
}

const clearSelection = () => {
    Array.from(document.getElementsByClassName(SELECTED_SEAT_CLASS)).forEach( seat => {
       seat.classList.remove(SELECTED_SEAT_CLASS);
    });
}

const setUp = () => {
    let idContador = 1;
    let seats = [];

    for (let i = 0; i < N; i++) {
        let row = [];
        for (let j = 0; j < N; j++) {
            if (idContador === 49) {
                reservedSeats(idContador);
                row.push({
                    id: idContador++,
                    status: true
                });
            } else {
                row.push({
                    id: idContador++,
                    status: false
                });
            }
        }
        seats.push(row)
    }
    return seats;
}

const suggest = (seatsToReserve) => {
    seatsSetup = setUp()
    let reservedSeats = [];
    if (seatsToReserve > N ) {
        console.log(`No es posible reservar ${seatsToReserve} en una fila de ${N} asientos`);
        return new Set();
    }

    seatsSetup.reverse().every( row => {
        let seatsGroup = checkRowAvailability(row, seatsToReserve);
        // Si encuentra un grupo de sillas disponible termina la búsqueda
        if (seatsGroup) {
            reservedSeats = seatsGroup
            return false;
        }
        return true;
    })

    if (reservedSeats.length === 0) {
        console.log("No hay sillas disponibles");
        return new Set();
    }

    // Del grupo de sillas seleccionado, retorna el id correspondiente a la cantidad de sillas solicitadas
    return new Set(reservedSeats.slice(0, seatsToReserve).map(({id}) => id));

}

const checkRowAvailability = (row, seatsToReserve) => {
    let availableSeatsGroups = [];
    let currentGroup = []

    // Agrupa sillas vacías de una fila
    for (const {id, status} of row) {
        if (status === false ) {
            currentGroup.push({id, status});
        } else {
            availableSeatsGroups.push(currentGroup);
            currentGroup = [];
        }
    }

    // Agrega último grupo de sillas disponible en la fila
    if (currentGroup.length > 0){
        availableSeatsGroups.push(currentGroup);
    }

    // De los grupos de sillas vacías de la fila busca el que pueda alojar las sillas solicitadas
    return availableSeatsGroups.reverse().find( (availableSeatsGroup) => availableSeatsGroup.length >= seatsToReserve);
}