const numberOfRows = 8;
const numberOfColumns = 12;
function setup() {
    let counter = 1;
    let seats = [];

    for (let i = 0; i < numberOfRows; i++) {
        let row = [];
        for (let j = 0; j < numberOfColumns; j++) {
            row.push({
                id: counter++,
                booked: counter > false
            });
        }
        seats.push(row);
    }
    return seats;
}
function suggest(numberOfSeats, seatsArray) {
    let selectedSeats = new Set();
    if (numberOfSeats > numberOfColumns) {
        return selectedSeats;
    }
    for(let rowNumber = numberOfRows; rowNumber > 0; rowNumber--) {
        if (selectedSeats.size === numberOfSeats) {
            return selectedSeats;
        }

        let row = seatsArray[rowNumber-1];
        let minColumnIdLimitThatMustBeAvailable = rowNumber*numberOfColumns - numberOfColumns + 1 + numberOfSeats;
        selectedSeats = new Set();

        for(let columnNumber = 0; columnNumber < numberOfColumns; columnNumber++) {
            if (selectedSeats.size === numberOfSeats) {
                return selectedSeats;
            }

            let currentColumnId = rowNumber*numberOfColumns - columnNumber;
            let currentColumn = row.filter(column => column.id === currentColumnId)[0];

            if (currentColumn.booked === true) {
                selectedSeats = new Set();
                if (minColumnIdLimitThatMustBeAvailable > currentColumnId) {
                    columnNumber = numberOfColumns + 2
                }
            } else {
                selectedSeats.add(currentColumn.id);
            }
        }
    }
    return selectedSeats;
}

let seats = setup();
let suggestedSeats = suggest(2, seats);

console.log('suggestedSeats', suggestedSeats);