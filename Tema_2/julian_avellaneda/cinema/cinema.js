const N = 10;

const setUp = () => {
    let idContador = 1;
    let seats = [];

    for (let i = 0; i < N; i++) {
        let row = [];
        for (let j = 0; j < N; j++) {
                row.push({
                    id: idContador++,
                    status: false
                });
        }
        seats.push(row)
    }
    return seats;
}

const suggest = (seatsToReserve, seats) => {
    let reservedSeats = [];
    if (seatsToReserve > N ) {
        console.log(`No es posible reservar ${seatsToReserve} en una fila de ${N} asientos`);
        return new Set();
    }

    seats.reverse().every( row => {
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

let seatsSetup =  setUp();

let seats = suggest(4, seatsSetup);

console.log(seats);