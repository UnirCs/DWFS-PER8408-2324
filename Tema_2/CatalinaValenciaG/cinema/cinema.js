// Definir el tamaño de la matriz de sillas
const N = 8; // Número de filas y columnas
// Defino los IDs de las sillas ya reservadas para ejecutar los diferentes casos
const reservados = [1,12,20,25,26,27,28,36,43,51,61,62,63,64] 

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
                estado: reservados.includes(id) ? true:false // Estado inicial de la silla
            });
        }
        asientos.push(asiento);
    }
    return asientos;
}

// Inicializar la matriz
let asientosCinema = setup();

function suggest (cantidadAsientos){
    //Si el número de asientos solicitados excede el tamaño máximo de la fila, la función debe devolver un set vacío.
    if (cantidadAsientos > N)
    {
        return new Set();
    }

    const asientosReservados = search(cantidadAsientos);
    //Si en ninguna fila hay suficientes asientos disponibles juntos, la función debe devolver un set vacío.
    if (asientosReservados.size < cantidadAsientos){
        return new Set();
    } 
    //Si se logró la reserva de los asientos juntos entonces se imprime el Set con los ids.
    if (asientosReservados.size = cantidadAsientos){
        console.log("Se reservaron los asientos Nros.")
        asientosReservados.forEach(asiento => {
            console.log(asiento);
        });
    
        return asientosReservados;
    } 
}

function search(cantidadAsientos){
    let asientosFaltantes = cantidadAsientos;
    let asientoReservado = 0;
    const asientosReservados = new Set();
    //se elegiría siempre la más lejana a la pantalla
    for (const fila of asientosCinema.reverse()) {
        for (const asiento of fila.reverse()) {
            //Se valida que el asiento esté disponible para reservar
            if (asiento.estado == false){
                asientosFaltantes = asientosFaltantes -1;
                asientosReservados.add(asiento.id);
                asientoReservado = asiento.id;
            }
            //Se valida que el asiento que se está reservando sea un asiento junto al anterior
            if (asientoReservado+1 != asiento.id+1){
                asientosFaltantes = cantidadAsientos;
                asientosReservados.clear();
            }
            //Si en la fila se logran reservar los asientos se finaliza la búsqueda de asientos
            if (asientosFaltantes == 0)
            {
                break;
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
        //Si en la fila se logran reservar los asientos se finaliza la búsqueda de asientos
        if (asientosFaltantes == 0)
        {
            break;
        }
    }

    return  asientosReservados;
}

suggest(7);