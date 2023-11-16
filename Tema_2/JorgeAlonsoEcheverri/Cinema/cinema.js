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
            suggestedSeats = this._getFreeSeats(this.seats[row]/*.filter(seat => !seat.status)*/, wantedSeats);
        }

        return suggestedSeats;
    }

    _getFreeSeats(seats, wantedSeats) {
        let freeSeats = new Set();

        //Proposed solution when the array contains only the free seats (applying an array filter (seat => !seat.status))
        /*if (seats.length < wantedSeats) {
            return freeSeats;
        }

        for (let seatIndex = 0; seatIndex < seats.length && freeSeats.size < wantedSeats && (seats.length - seatIndex) >= (wantedSeats - freeSeats.size); seatIndex++) {
            if (seatIndex === (seats.length - 1) || seats[seatIndex + 1].id - seats[seatIndex].id === 1) {
                freeSeats.add(seats[seatIndex]);
            } else {
                freeSeats.clear();
            }
        }*/

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
            seat.status = Boolean(Math.floor(Math.random() * 2));
            row.push(seat);
            id++;
        }
        seats.push(row);
    }

    return seats;
}

let cinema = new Cinema(initSeats());

console.log(cinema.suggest(8));