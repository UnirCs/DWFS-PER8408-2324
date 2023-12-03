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
    console.log('Butacas inicializadas');
    return seats;
}
function suggest(numberOfSeats, seatsArray) {
    let selectedSeats = new Set();
    clearStyleForSeats();
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
    if (selectedSeats.size > 0 ) {
        setStyleForSelectedSeats(selectedSeats);
    } else {
        clearStyleForSeats();
    }
    console.log('Asientos sugeridos: '+ Array.from(selectedSeats).join(', '));
    return selectedSeats;
}

function assignIdsToSeats() {
    let seats = document.getElementsByClassName('seat');
    for (let seatNumber = 0; seatNumber < seats.length; seatNumber++) {
        seats[seatNumber].id = seatNumber + 1;
    }
}

function clearStyleForSeats() {
    const seats = Array.from(document.getElementsByClassName('seat'));
    seats.forEach((seat) => seat.classList.add('seat--free'));
}

function setStyleForSelectedSeats(selectedSeats) {
    selectedSeats.forEach(seatId => {
       document.getElementById(seatId).classList.remove('seat--free')
    });
}

const suggestInput = document.getElementById('suggestInput');
suggestInput.addEventListener('input', (event) => {
    event.stopImmediatePropagation();
    suggest(parseInt(suggestInput.value), seats);
})

let seats = setup();
assignIdsToSeats();

