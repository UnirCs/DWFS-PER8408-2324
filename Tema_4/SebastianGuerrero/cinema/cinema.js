// Definir el tamaño de la matriz de butacas
const N =10; // Número de filas y columnas

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


// Inicializar la matriz
let butacas = setup();
// Se obtienen todos los botones
let buttons = document.querySelectorAll('td > button');
const clearSeats= () =>{
    for(let filas of butacas){
        for(let asiento of filas){
            buttons[asiento.id-1].classList.remove('seat-inactive','seat-active');
            if(asiento.estado === false){
                buttons[asiento.id-1].classList.add('seat-inactive');
            }else{
                buttons[asiento.id-1].classList.add('seat-reserved');
            }
        }
    }
}

//Para pruebas con sillas reservadas.
butacas[9][9].estado = true;
butacas[9][6].estado = true;
butacas[9][1].estado = true;
butacas[8][6].estado = true;
butacas[8][2].estado = true;
butacas[8][1].estado = true;

clearSeats();

for (let i=0; i<(N*N)  ;i++){
    buttons[i].id="Seat_"+(i+1);
}


const inputSeats= document.getElementById('inputSeats')

inputSeats.addEventListener('input',(event) =>{
    event.stopPropagation();
    if(parseInt(inputSeats.value) > N){
        alert("No es posible asignar automaticamente " + inputSeats.value + " sillas, ingrese un valor entre 1 y " +N);
        inputSeats.value =0;
    }else{
        let seats = suggest(parseInt(inputSeats.value));
        clearSeats();
        for(let i=0; i<seats.size; i++){
            let button = document.getElementById("Seat_"+ Array.from(seats)[i]);
            button.classList.add('seat-active');
        }
        console.log("Las sillas preseleccionadas son: "+ [...seats]);
    }

});




function suggest(asientos){
    let resultadoAsientos = new Set();
    let disponibilidad = true;
    let asignacionCompleta = false;
    let fila = butacas.length-1;
    while((resultadoAsientos.size < asientos) && disponibilidad && !asignacionCompleta) {
        if (asientos > N){
            disponibilidad = false;
        }else{
            for(let i =butacas.length - 1; i >= 0; i--){
                if(butacas[fila][i].estado === false && (resultadoAsientos.size !== asientos)) {
                    resultadoAsientos.add(butacas[fila][i].id);
                }else if (resultadoAsientos.size !== asientos){
                    resultadoAsientos.clear();
                }
            }
            if(resultadoAsientos.size === asientos){
                asignacionCompleta = true;
            }else{
                resultadoAsientos.clear();
                fila -=1;
                if(fila < 0){
                    disponibilidad = false;
                }
            }
        }
    }
    return resultadoAsientos;
}



