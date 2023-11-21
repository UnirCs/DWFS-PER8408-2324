class Seat {
    constructor(id, available) {
        this.id = id;
        this.available = available;
    }
}

function setup(){
    let idCount = 1;
    let seats = [];

    for (let i = 0; i < N; i++){
        seats[i] = [];
        for(let j = 0; j < N; j++){
            seats[i][j] = new Seat(idCount,true);
            idCount++;
        }
    }
    return seats;
}

function suggest(numberSeats){
    let count;
    let availableSeats;
    let i = N-1;
    let j = 0;
    let isAvailable = false;
    if(numberSeats > N) return [];

    while (!isAvailable && i >= 0){
        count = 0;
        availableSeats = [];
        j=0;
        while (!isAvailable && j < N){
            if(seats[i][j].available){
                count++;
                availableSeats.push(seats[i][j]);
            }else{
                count = 0;
                availableSeats = [];
            }
            if(count === numberSeats){
                updateSeats(availableSeats)
                isAvailable = true;
            }
            j++;
        }
        i--;
    }
    return availableSeats;
}

function updateSeats(seatsToUpdate){
    for(let i = 0; i < seatsToUpdate.length; i++){
        for(let l = N-1; l >= 0; l--){
            for(let j = 0; j < N; j++){
                if(seatsToUpdate[i].id === seats[l][j].id) seats[l][j].available = false;
            }
        }
    }
}

const N = 4;
const seats = setup();

let seats1 = suggest(3)
console.log(seats1);
console.log(seats)

let seats2 = suggest(2);
console.log(seats2);
console.log(seats);

let seats3 = suggest(1);
console.log(seats3);
console.log(seats);

let seats4 = suggest(6);
console.log(seats4);
console.log(seats);
