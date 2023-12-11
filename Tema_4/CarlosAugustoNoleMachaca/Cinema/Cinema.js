// Definir el tamaño de la matriz de butacas
const N = 10; // Número de filas y columnas
const LETTERS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

let butacas = [];
let seatsReserved = new Set();
function initialize() {
    butacas = setup();

    let divZonaButacas = "";

    let butaca = "";
    let divRow = "";
    let divRowLast = "";
    let divCol = "";
    let divColLast = "";
    for (let i = 0; i < butacas.length; i++) {
        divRow = `<div class="row">`;
        divCol = `<div class="col">
                            ${LETTERS[i]}
                         </div>
                        <div class="col"></div>`;

        if (i === butacas.length - 1) {
            divRowLast = `<div class="row">
                            <div class="col">
                            </div>
                            <div class="col">
                    
                            </div>`
        }
        for (let j = 0; j < butacas[i].length; j++) {
            if (i === 0 && j === 3) {
                divCol += `<div id="${butacas[i][j].id}" class="col-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-wheelchair" viewBox="0 0 16 16">
                                <path d="M12 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-.663 2.146a1.5 1.5 0 0 0-.47-2.115l-2.5-1.508a1.5 1.5 0 0 0-1.676.086l-2.329 1.75a.866.866 0 0 0 1.051 1.375L7.361 3.37l.922.71-2.038 2.445A4.732 4.732 0 0 0 2.628 7.67l1.064 1.065a3.25 3.25 0 0 1 4.574 4.574l1.064 1.063a4.732 4.732 0 0 0 1.09-3.998l1.043-.292-.187 2.991a.872.872 0 1 0 1.741.098l.206-4.121A1 1 0 0 0 12.224 8h-2.79l1.903-2.854ZM3.023 9.48a3.25 3.25 0 0 0 4.496 4.496l1.077 1.077a4.75 4.75 0 0 1-6.65-6.65l1.077 1.078Z"/>
                            </svg>
                          </div>`;
                j = 6;
            } else {
                divCol += `<div class="col">
                            <div id="${butacas[i][j].id}" class="dot-available"></div>
                          </div>`;
            }

            if (i === butacas.length - 1) {
                divColLast += `<div class="col">
                                ${j + 1}
                            </div>`;
            }
        }
        divRow += divCol;
        divRow += `</div>`;
        butaca += divRow;

        divRowLast += divColLast;
        divRowLast += "</div>";
    }

    divZonaButacas = butaca + divRowLast;

    let zonaButacas = document.getElementById("zonaButacas");
    zonaButacas.innerHTML = divZonaButacas;
}

// Función para inicializar la matriz de butacas
function setup() {
    let idContador = 1; // Iniciar el contador de IDs en 1 (los humanos no empezamos a contar desde 0)
    let butacas = [];

    for (let i = 0; i < N; i++) {
        // Nueva fila
        let fila = [];
        for (let j = 0; j < N; j++) {
            // Nuevo asiento
            fila.push({
                id: idContador++,
                estado: false // Estado inicial libre
            });
        }
        butacas.push(fila);
    }
    return butacas;
}

function suggest(nroSeatsReserve) {
    let band = 0;

    butacas = setup();
    seatsReserved = new Set();

    if (nroSeatsReserve > butacas.length) {
        console.log("Excede al número de filas.");
    } else {
        for (let i = butacas.length - 1; i >= 0; i--) {
            //console.log("butaca [" + i + "]: " + butacas[i]);
            if (butacas[i] !== undefined) {
                if (validateNumberOfAvaibleRows(i, butacas, nroSeatsReserve)) {
                    for (let j = butacas[i].length - 1; j >= 0; j--) {
                        if (butacas[i][j] !== undefined && butacas[i][j].estado === false
                            && band < nroSeatsReserve) {
                            butacas[i][j].estado = true;
                            seatsReserved.add(butacas[i][j].id);
                            band++;
                        }
                    }
                }
            }
        }
    }

    avaibleSeats();
}

function validateNumberOfAvaibleRows(i, butacas, nroSeatsReserve){
let band = 0;
let result = false;
for (let j = butacas[i].length - 1; j >= 0 && band < nroSeatsReserve; j--) {
    if (butacas[i][j] !== undefined && butacas[i][j].estado === false) {
        band++;
        if (band === parseInt(nroSeatsReserve, 10)) {
            result = true;
        }
    } else {
        band = 0;
    }
}
return result;
}

function preselectSeats(seatReserved) {
    //console.log("preselectSeats");
    let preselectSeatReserved = document.getElementById(seatReserved);
    preselectSeatReserved.classList.remove("dot-available");
    preselectSeatReserved.classList.add("dot-active");
}

function avaibleSeats() {
    //console.log("avaibleSeats");
    for (let i = butacas.length - 1; i >= 0; i--) {
        for (let j = butacas[i].length - 1; j >= 0; j--) {
            if (butacas[i][j].id !== undefined && butacas[i][j].id !== null) {
                let preselectSeatReserved = document.getElementById(butacas[i][j].id);
                if (preselectSeatReserved !== null && preselectSeatReserved !== undefined) {
                    if (isSeatReserved(butacas[i][j].id)) {
                        if(preselectSeatReserved.classList.contains("dot-available")) {
                            preselectSeatReserved.classList.remove("dot-available");
                        }
                        preselectSeatReserved.classList.add("dot-active");
                    } else {
                        if(preselectSeatReserved.classList.contains("dot-active")) {
                            preselectSeatReserved.classList.remove("dot-active");
                        }
                        preselectSeatReserved.classList.add("dot-available");
                    }
                }
            }
        }
    }
}

function isSeatReserved(idFind) {
    let result = false;
    for (let item of seatsReserved) {
        if (item === idFind) {
            result = true;
            break;
        }
    }
    return result;
}