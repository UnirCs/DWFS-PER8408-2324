
// Definimos las variables globales
const N = 10; // Número de filas y columnas
let butacas; //Mapa de butacas general
let seats = document.querySelectorAll(".seats__seat"); //Todos los asientos
let globalAsientos = []; //Array de asientos reservados

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    //Cargamos primero el mapa de butacas
    butacas=setup();
    //Metemos el id a cada uno de los asientos
    let counter =1;
    seats.forEach(function(seat) {
        seat.id= "seat_"+counter;
        seat.classList.add("seat--free");
        counter++;
    });
});

//Añadimos el comportamiento del botón de inputs
let entradaAsientos = document.getElementById('seleccion__input');
entradaAsientos.onclick = () => {
    selectSeats(entradaAsientos.value);
}

function  selectSeats (numSeats){
    let suggestion=suggest(numSeats);
    seats.forEach(function(seat){
        //Siempre limpiar la clase para que aparezca como free
        seat.classList.remove("seat--selected");

        if (suggestion.includes(seat.id)){
            seat.classList.toggle("seat--free");
            seat.classList.toggle("seat--selected");
        }
    })
}

//Añadimos el comportamiento del botón de confirmar Reserva
let confirmarReserva = document.getElementById('seleccion__confirmar');
confirmarReserva.onclick = () => {
    var asientosReservados=document.querySelectorAll(".seat--selected");
    asientosReservados.forEach(function(seat){
        seat.classList.remove("seat--free","seat--selected");
        seat.classList.add("seat--occupied");
    })
    //Además de actualizar el HTML, actualizamos la el mapa de asientos propio
    reservarButacas(globalAsientos);

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
    //Modificamos la que está ya reservada
    butacas[9][9].estado=true;//Estado inicial cogido
    return butacas;
}


function suggest (numButacas) {
    let intButacas=Number(numButacas);
    let asientos = [];
    let foundButacas = false;
    if(butacas.length<intButacas){
        alert('No hay tantos asientos disponibles en una fila');
    }
    else
    {
        //Meter en la condicion de iteracion lo del break
        for (let i= butacas.length-1; i >= 0 && !foundButacas; i--)
        {
            for (let j=0; j < butacas.length && !foundButacas; j++)
            {
                //Si encontramos una butaca  libre, meterla en la lista.
                //Si no, vaciamos la lista que tengamos
                butacas[i][j].estado===false ? asientos.push("seat_"+butacas[i][j].id) : asientos = [];

                //Si tenemos el numero deseado de butacas, marcamos para salir de los bucles
                if (asientos.length===intButacas)
                {
                    foundButacas=true;
                    globalAsientos=asientos;
                }
            }
            //Limpiar la lista de asientos si se nos ha acabado la fila
            if (!foundButacas)
            {
                asientos = [];
            }
        }
        //Mensaje para el caso en que no hayamos encontrado huecos suficientes
        if (!foundButacas)
        {
            alert('No se encontraron butacas que cubriesen esa peticion');
        }
    }
    return asientos;
}

function reservarButacas(asientos) {
    let reservedButacas =false;
    let reservedCounter=0;
    //Loop para marcar como cogidas las butacas
    for (let i= butacas.length-1; i >= 0 && !reservedButacas; i--)
    {
        for (let j=0; j < butacas.length && !reservedButacas; j++)
        {
            //Si encontramos el asiento en la selección de butacas lo marcamos como ocupado
            if(asientos.includes("seat_"+butacas[i][j].id)){
                butacas[i][j].estado=true;
                reservedCounter++;
            }
            //Si tenemos el numero deseado de butacas, marcamos para salir de los bucles
            if (asientos.length===reservedCounter)
            {
                reservedButacas=true;
            }
        }
    }
}




