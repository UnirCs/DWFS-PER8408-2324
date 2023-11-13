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
                booked: false
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
        let row = seatsArray[rowNumber-1];
        for(let columnNumber = 0; columnNumber < numberOfColumns; columnNumber++) {
            if (selectedSeats.size < numberOfSeats) {
                let currentColumnId = rowNumber*numberOfColumns - columnNumber;
                let currentColumn = row.filter(column => column.id === currentColumnId)[0];

                if (currentColumn.booked === true) {
                    selectedSeats.clear();
                } else {
                    selectedSeats.add(currentColumn.id);
                }
            }
        }
    }
    return selectedSeats;
}

let seats = setup();
let suggestedSeats = suggest(12, seats);

console.log('seats', seats);
console.log('suggestedSeats', suggestedSeats);