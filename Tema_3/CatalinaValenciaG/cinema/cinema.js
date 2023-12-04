// Definir el tamaño de la matriz de sillas
const N = 8; // Número de filas y columnas
// Defino los IDs de las sillas ya reservadas para ejecutar los diferentes casos
const reservados = [] 

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
        console.log("Se reservaron los asientos Nros. " + Array.from(asientosReservados))
    }
}

function search(cantidadAsientos){
    let asientosFaltantes = cantidadAsientos;
    const asientosReservados = new Set();
    let fila = asientosCinema.length-1;
    let columna = asientosCinema[fila].length-1;

    //Siempre deberían aparecer en el Set resultado las butacas de la última fila, o vacío.
    while (asientosFaltantes >0 && columna >= 0){
        asientosFaltantes = asientosFaltantes -1;
        asientosReservados.add(asientosCinema[fila][columna].id);
        columna --;
    }

    return  asientosReservados;
}
/*Escenarios de Pruebas
La matriz va de 1 a 64 porque está de 8X8, de la siguiente manera:
T = ocupado; F = disponible
1(T)	2	3	4	5	6	7	8
9	10	11	12(T)	13	14	15	16
17	18	19	20(T)	21	22	23	24
25(T)	26(T)	27(T)	28(T)	29	30	31	32
33	34	35	36(T)	37	38	39	40
41	42	43(T)	44	45	46	47	48
49	50	51(T)	52	53	54	55	56
57	58	59	60	61(T)	62(T)	63(T)	64(T)*/
//suggest(4); //Se reservan los valores 60,59,58,57 porque están contiguos y son los últimos.
//suggest(5); //Se reservan los valores 56,55,54,54,52 porque están contiguos y son los últimos. La última fila ya no tenía disponibles para 5
//suggest(6); //Se reservan los valores 8,7,6,5,4,3 porque las filas anteriores no los tenían seguidos en la misma fila.
//suggest(8); //set vacío porque no hay asientos disponibles contiguos en la misma fila
//suggest(9); // Debe retornar vacío porque se salta de fila