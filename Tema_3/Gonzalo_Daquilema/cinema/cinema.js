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
//One seat must be consecutive
    if (availableSeats.length < 2) {
        return true;
    }

    const sortedSeats = availableSeats.slice().sort((a, b) => a - b);

    for (let i = 1; i < sortedSeats.length; i++) {
        if (sortedSeats[i] !== sortedSeats[i - 1] + 1) {
            return false;
        }
    }

    return true;
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

    for (let y = 0; y < room.length; y++) {
        availableSeats = [];

        for (let x = 0; x < room.length; x++) {
            if (room[y][x].state === false) {
                availableSeats.push(room[y][x].id);
            }

            if (availableSeats.length >= numberSeat) {
                if (validateConsecutiveSeat(availableSeats)) {
                    console.log(availableSeats);
                    return availableSeats;
                }
            }
        }
    }

    console.log([]);
    return [];
}


function init() {
    let availableSeats = suggest(2)
    console.log(availableSeats);

}

init();