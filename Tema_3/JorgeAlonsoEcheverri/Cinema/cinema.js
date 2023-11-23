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
 * Load seats array (with random free/busy)
 */
const initSeats = () => {
    let seats = [];
    let id = 1;
    let seatsByRow = 8;

    for (let i = 0; i < seatsByRow; i++) {
        let row = [];
        for (let j = 0; j < seatsByRow; j++) {
            let seat = new Seat(id);
            row.push(seat);
            id++;
        }
        seats.push(row);
    }

    console.log('Asientos inicializados');

    return seats;
}

let cinema = new Cinema(initSeats());