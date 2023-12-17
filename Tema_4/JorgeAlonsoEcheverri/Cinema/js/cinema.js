addEventListener("DOMContentLoaded", (event) => {
    /*
    * Init check-box and labels for dynamic design
     */
    let id = 1;

    document.querySelectorAll(".seat").forEach(element => {
        element.id = `seat-${id}`;
        id++;
    });

    id = 1;
    document.querySelectorAll(".seat-label").forEach(element => {
        element.htmlFor = `seat-${id}`;
        id++;
    });

    let wantedSeatsInput = document.getElementById("seats-num");

    // By default the min is 0
    wantedSeatsInput.min = 0;

    // Add listener for wanted seats input
    wantedSeatsInput.addEventListener("input", (event) => {
        resetSuggest();

        let suggested = cinema.suggest(event.target.valueAsNumber);

        if (suggested.size !== 0) {
            suggested.forEach(id => {
                document.getElementById(`seat-${id}`).checked = true;
            });
        }
    });
});

class Seat {

    constructor(id) {
        this.id = id;
        this.status = false;
    }

}

class Cinema {

    constructor(seats) {
        this.seats = seats;
        this.seatsByRow = seats.length;
    }

    suggest(wantedSeats) {
        if (wantedSeats > this.seatsByRow) {
            return new Set();
        }

        let suggestedSeats = new Set();

        for (let row = (this.seatsByRow - 1); row >= 0 && suggestedSeats.size < wantedSeats; row--) {
            suggestedSeats = this._getFreeSeats(this.seats[row], wantedSeats);
        }

        console.log('Asientos sugeridos: ' + Array.from(suggestedSeats).join(", "));

        return suggestedSeats;
    }

    _getFreeSeats(seats, wantedSeats) {
        let freeSeats = new Set();

        //Proposed solution when the array contains free and busy seats
        for (let seatIndex = 0; seatIndex < seats.length && freeSeats.size < wantedSeats; seatIndex++) {
            if (!seats[seatIndex].status) {
                freeSeats.add(seats[seatIndex].id);
            } else {
                freeSeats.clear();
            }
        }

        if (freeSeats.size !== wantedSeats) {
            freeSeats.clear();
        }

        return freeSeats;
    }
}

/**
 * Load seats array
 */
const initSeats = () => {
    let seats = [];
    let id = 1;
    let seatsByRow = 8;
    // Proposed for get the seats status from backend services
    let busySeats = [1, 3, 6, 8, 19, 20, 21, 22, 33, 34 ,39, 40, 49, 56, 57, 58, 63, 64];

    for (let i = 0; i < seatsByRow; i++) {
        let row = [];
        for (let j = 0; j < seatsByRow; j++) {
            let seat = new Seat(id);
            row.push(seat);
            id++;
        }
        seats.push(row);
    }

    // Update seats' statuses
    busySeats.forEach(seat => {
        seats.flat()[seat - 1].status = true;
    })

    console.log('Asientos inicializados');

    return seats;
}

let cinema = new Cinema(initSeats());

/**
 * Función que recorre el array original para eliminar las sugerencias previas
 */
const resetSuggest = () => {
    cinema.seats.flat()
        .filter(seat => seat.status === false)
        .forEach(freeSeat => {
            document.getElementById(`seat-${freeSeat.id}`).checked = false;
        })
}