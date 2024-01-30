/**
 * This function generates a random room with the given number of rows and columns.
 *
 * @param number
 * @returns {*[]}
 */
function generateRoom(number) {
    let room = []
    let count = 1;
    for (let y = 0; y < number; y++) {
        room[y] = []
    }
    for (let y = 0; y < number; y++) {
        for (let x = 0; x < number; x++) {
            room[y][x] = new Seat(count, generateRandom());
            count++;
        }
    }
    return room;
}

/**
 * This function generates a random boolean value.
 *
 * @returns {boolean}
 */
function generateRandom() {
    return Math.random() < 0.5; //
}

/**
 * This class represents a seat.
 */
class Seat {
    id = 0;
    state = true;

    constructor(id, state) {
        this.id = id;
        this.state = state;
    }
}


/**
 * This function validates if the number of consecutive seats are consecutive.
 *
 * @param availableSeats
 * @returns {boolean}
 */
function validateConsecutiveSeat(availableSeats) {
    // If the number of seats is less than 2, the seat is valid
    if (availableSeats.length < 2) {
        return true;
    }

    let i = 1;
    let consecutive = true;

    // verify if the number of consecutive seats are consecutive
    while (i < availableSeats.length && consecutive) {
        consecutive = availableSeats[i] === availableSeats[i - 1] + 1;
        i++;
    }

    return consecutive;
}


/**
 * This function suggests the number of seats.
 *
 * @param numberSeat
 * @returns {*[]}
 */
function suggest(numberSeat) {
    let room = generateRoom(10);
    console.log(room);
    let availableSeats = [];
    let y = room.length - 1;
    let result = [];

    while (y >= 0 && result.length === 0) {
        availableSeats = [];

        for (let x = 0; x < room[y].length; x++) {
            if (room[y][x].state === false) {
                availableSeats.push(room[y][x].id);
            } else {
                availableSeats = [];
            }

            if (availableSeats.length >= numberSeat && validateConsecutiveSeat(availableSeats)) {
                result = availableSeats.slice();
            }
        }

        y--;
    }

    return result;
}




function init() {
    let availableSeats = suggest(5)
    console.log(availableSeats);

}

init();