
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll(".available-box, .unavailable-box").forEach(element =>{
       element.id = idCount.toString();
       idCount++;
   })
    document.getElementById("input").addEventListener("input",refreshScreen)
});

const refreshScreen = () => {
    cleanBoxes();
    cleanSeats();

    let inputValue = document.getElementById("input").value;
    let selectedBoxes;

    if(inputValue === "") selectedBoxes = suggest(0);
    else selectedBoxes = suggest(parseInt(inputValue));

    selectedBoxes.forEach(e =>{
        if(e.available && e.selected){
            let selectedBox = document.getElementById(e.id)
            selectedBox.classList.remove("available-box");
            selectedBox.classList.add("selected-box");
        }
    })
}

const cleanBoxes = () => {
    for(let i = 1 ; i <= N*N; i++ ){
       let box = document.getElementById(i.toString());
        box.classList.remove("selected-box");
        box.classList.add("available-box");
    }
}

const cleanSeats = () => {
    seats.forEach(row => {
        row.forEach(e => {
            e.selected = false;
            e.available = true;
        })
    })
    seats[5][3].available=false;
    seats[5][3].selected=true;
}

class Seat {
    constructor(id, selected, available) {
        this.id = id;
        this.available = available;
        this.selected = selected;
    }
}

function setup(){
    let idCount = 1;
    let seats = [];

    for (let i = 0; i < N; i++){
        seats[i] = [];
        for(let j = 0; j < N; j++){
            seats[i][j] = new Seat(idCount,false,true);
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
    if(numberSeats > N || numberSeats === 0) return [];

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
    console.log(availableSeats)
    return availableSeats;
}

function updateSeats(seatsToUpdate){
    for(let i = 0; i < seatsToUpdate.length; i++){
        for(let l = N-1; l >= 0; l--){
            for(let j = 0; j < N; j++){
                if(seatsToUpdate[i].id === seats[l][j].id) seats[l][j].selected = true;
            }
        }
    }
}

const N = 6;
let idCount= 1;
const seats = setup();
seats[5][3].available=false;