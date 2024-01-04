// Definir el tamaño de la matriz de butacas
    const N = 10; // Número de filas y columnas

// Función para inicializar la matriz de butacas
    function setup() {
        let idContador = 1; // Iniciar el contador de IDs en 1
        let butacas = [];

        // Crear matriz de butacas
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

        // Establecer algunos asientos como ocupados (true)
        const asientosOcupados = [100];
        for (let i = 0; i < asientosOcupados.length; i++) {
            const numeroAsiento = asientosOcupados[i];
            const fila = Math.floor((numeroAsiento - 1) / N);
            const columna = (numeroAsiento - 1) % N;
            butacas[fila][columna].estado = true;
        }

        return butacas;
    }


// Función para sugerir asientos para reservar
    function suggest(numAsientos) {
        const asientosSugeridos = [];
        let asientosOk = "No"

        for (let fila = butacas.length - 1; fila >= 0 && asientosOk == "No"; fila--) {
            let asientosContiguos = 0;

            for (let columna = 0; columna < butacas[fila].length && asientosOk == "No"; columna++) {
                if (!butacas[fila][columna].estado) {
                    // El asiento está libre
                    asientosContiguos++;

                    if (asientosContiguos == numAsientos) {
                        // Se encontraron suficientes asientos contiguos en esta fila
                        for (let i = columna - numAsientos + 1; i <= columna; i++) {
                            asientosSugeridos.push(butacas[fila][i].id);
                        }
                        asientosOk = "Yes"
                    }
                } else {
                    // Reiniciar el conteo si se encuentra un asiento ocupado
                    asientosContiguos = 0;
                }
            }
        }
        console.log("Asientos sugeridos: " + asientosSugeridos)
        return asientosSugeridos;

    }

// Función para asignar IDs a los asientos en el HTML y añadir listener al input
window.onload = function () {
    let numeroEntero = document.getElementById('numeroEntero');
    const asientos = document.querySelectorAll('.asiento');
    const asientosDisponibles = document.querySelectorAll('.asiento-vacio');

    // Asignar IDs a los asientos
    asientos.forEach((asiento, index) => {
        asiento.id = index + 1;
    });

    // Mostrar butacas reservadas
    numeroEntero.addEventListener('input', function() {
        let numAsientos = numeroEntero.value;
        let asientosSugeridos = suggest(numAsientos);

        asientosDisponibles.forEach((asiento) => {
            const idAsiento = parseInt(asiento.id);
            if (asientosSugeridos.includes(idAsiento)) {
                asiento.classList.add('asiento-reservado');
            } else {
                asiento.classList.remove('asiento-reservado');
                asiento.classList.add('asiento-vacio');
            }
        });
    });
};

// Inicializar la matriz
let butacas = setup();

