const N = 10;
function setup() {
    let idContador  = 1;
    let butacas  = [];

    for (let i = 0; i < N; i++) {
        let row = [];
        for (let j = 0; j < N; j++) {
            row.push({
                id: idContador ++,
                booked: false
            });
        }
        butacas .push(row);
    }
    return butacas ;
}
function suggest(numberOfSeats, seatsArray) {
    let selectedSeats = new Set();
    if (numberOfSeats > N) {
        return selectedSeats;
    }
    for(let rowNumber = N; rowNumber > 0; rowNumber--) {
        let row = seatsArray[rowNumber-1];
        for(let columnNumber = 0; columnNumber < N; columnNumber++) {
            if (selectedSeats.size < numberOfSeats) {
                let currentColumnId = rowNumber*N - columnNumber;
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

let butacas  = setup();
let suggestedSeats = suggest(12, butacas );

console.log('seats', butacas );
console.log('suggestedSeats', suggestedSeats);