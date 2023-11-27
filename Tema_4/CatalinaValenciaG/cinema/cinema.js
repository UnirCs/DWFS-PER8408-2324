window.onload = function () {
//ELEMENTOS DE LA PÁGINA
    document.getElementById("darkSwitch").addEventListener("change", () => toggleDarkMode());

    const toggleDarkMode = () => {
        document.body.classList.toggle("dark-mode"); // Añade o elimina la clase dark-mode de la lista de clases que se ecuentran en el body.
    }
    let contador = 1;

    let sillas = document.getElementById("sillas");
    sillas.querySelectorAll("button").forEach(element => {
    element.id = "asiento_" + contador;
    contador++;
    });

    pintarAsientos(reservados);
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("cantidadsillas").addEventListener("change", suggest);
});

const validarCantidad = () => {
    let cantidad = document.getElementById("cantidadsillas").value;
    let cantidadRegex = /^\d+$/;
    if (!cantidadRegex.test(cantidad)) {
        createErrorMessage("cantidad", "Solo se permiten números enteros positivos");
        return false;
    }
    else if (cantidad>N) {
        createErrorMessage("cantidad", "El valor supera la cantidad de asientos por fila");
        return false;
    }
    else {
        removeErrorMessage("cantidad");
        return true;
    }
};

const createErrorMessage = (id, message) => {
    let existingMessage = document.getElementById(id + "Error");
    if (!existingMessage) {
        let errorMessage = document.createElement("p");
        errorMessage.id = id + "Error";
        errorMessage.textContent = message;
        errorMessage.classList.add("error");
        document.getElementById("form").appendChild(errorMessage);
    }
};

// Eliminar el mensaje de error si ya no es necesario
const removeErrorMessage = (id) => {
    let existingMessage = document.getElementById(id + "Error");
    if (existingMessage) {
        existingMessage.remove();
    }
};

//----------------LÓGICA DE PRE-SELECCION DE SILLAS----------------//
// Defino los IDs de las sillas ya reservadas para ejecutar los diferentes casos
const reservados = new Set().add(64);

// Definir el tamaño de la matriz de sillas
const N = 8; // Número de filas y columnas

// Función para inicializar la matriz de sillas
function setup() {
    let idContador = 1; // Iniciar el contador de IDs en 1 (los humanos no empezamos a contar desde 0)
    let asientos = [];

    for (let i = 0; i < N; i++) {
        // Nueva fila
        let asiento = [];
        for (let j = 0; j < N; j++) {
            let id = idContador++; 
            // Nuevo asiento
            asiento.push({
                id: id,
                estado: reservados.has(id) ? true:false // Estado inicial de la silla
            });
        }
        asientos.push(asiento);
    }

    return asientos;
}

// Inicializar la matriz
let asientosCinema = [];

function suggest (){
    asientosCinema = setup();
    let cantidadAsientos = document.getElementById("cantidadsillas").value;
    despintarAsientos(asientosCinema);
    let result = validarCantidad();
    if(result ===false){
        return;
    }

    const asientosReservados = search(cantidadAsientos);
    //Si en ninguna fila hay suficientes asientos disponibles juntos, la función debe devolver un set vacío.
    if (asientosReservados.size < cantidadAsientos){
        return new Set();
    } 
    //Si se logró la reserva de los asientos juntos entonces se imprime el Set con los ids.
    if (asientosReservados.size = cantidadAsientos){
        pintarAsientos(asientosReservados);
    }
}

function search(cantidadAsientos){
    let asientosFaltantes = cantidadAsientos;
    let idUltimoAsientoReservado = 0;
    const asientosReservados = new Set();

    //se elegiría siempre la más lejana a la pantalla
    for (let i = asientosCinema.length-1; i >= 0 && asientosFaltantes >0; i--) {
        for (let j = asientosCinema[i].length-1; j >= 0 && asientosFaltantes >0;j--) {
            //Se valida que el asiento esté disponible para reservar
            if (asientosCinema[i][j].estado == false){
                asientosFaltantes = asientosFaltantes -1;
                asientosReservados.add(asientosCinema[i][j].id);
                idUltimoAsientoReservado = asientosCinema[i][j].id;
            }
            //Se valida que el asiento que se está reservando sea un asiento junto al anterior
            if (idUltimoAsientoReservado+1 != asientosCinema[i][j].id+1){
                asientosFaltantes = cantidadAsientos;
                asientosReservados.clear();
            }
        }
        //Si en ninguna fila hay suficientes asientos disponibles juntos, la función debe devolver un set vacío.
        /*Si en la fila donde se buscaron los asientos no se encontraron los asientos disponibles juntos suficientes
        entonces se reinicia la búsqueda para una siguiente final*/
        if (asientosFaltantes > 0)
        {
            asientosFaltantes = cantidadAsientos;
            asientosReservados.clear();
        }
    }

    return  asientosReservados;
}

function pintarAsientos(filas){
    filas.forEach(asiento => {
    let elemento = document.getElementById("asiento_" + asiento);
    elemento.classList.replace("btn-outline-success","btn-success");
    });
}

function despintarAsientos(cinema){
    cinema.forEach(filas => {
        filas.forEach(asiento => {
        if (asiento.estado===false)
        {
            let elemento = document.getElementById("asiento_" + asiento.id);
            elemento.classList.replace("btn-success","btn-outline-success");
        }
        })
    });
}