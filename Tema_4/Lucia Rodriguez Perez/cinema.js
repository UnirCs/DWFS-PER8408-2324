const rows    = 5; // Número de filas 
const columns = 10; // Número de columnas
const butacas = setup();

window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('numberOfSits').addEventListener('change', suggestSits);
    printSits(butacas);
});

// Función para inicializar la matriz de butacas
function setup() {
    let idContador = 1; // Iniciar el contador de IDs en 1 (los humanos no empezamos a contar desde 0)
    let butacas = [];
    let randomCeroOne;
    let estado;

    for (let i = 0; i < rows; i++) {
        // Nueva fila
        let fila = [];
        for (let j = 0; j < columns; j++) {
            // Nuevo asiento
            randomCeroOne = Math.floor(Math.random() * 2);
            if (randomCeroOne == 0) {
                estado = false;
            } else {
                estado = true;
            }
            fila.push({
                id: idContador++,
                estado: estado // Estado inicial aleatorio
            });
        }
        butacas.push(fila);
    }
    console.log(butacas);
    return butacas;
}

// Función para imprimir la matriz de butacas
function printSits(butacas) {
    // Asignar a cada elemento del dom el id de la butaca correspondiente
    let sits = document.getElementsByClassName('sit');
    let id = 1;
    for (let i = 0; i < sits.length; i++) {
        sits[i].id = id++;
    }

    // Imprimir la matriz de butacas
    for (let i = 0; i < butacas.length; i++) {
        for (let j = 0; j < butacas[i].length; j++) {
            let sit = document.getElementById(butacas[i][j].id);
            if (butacas[i][j].estado) {
                sit.classList.add('sit-lock');
                sit.classList.remove('sit-free');

                
                sit.classList.remove('sit-suggestion');
            } else {
                sit.classList.add('sit-free');
                sit.classList.remove('sit-lock');
                sit.classList.remove('sit-suggestion');
            }
        }
    }
}

const suggestSits = () => {
    // Borrar la sugerencia anterior (si la hubiese)
    printSits(butacas);
    let n = document.getElementById('numberOfSits').value;
    let butacasReservadas = suggest(butacas, n);
    if (butacasReservadas.length == 0) {
        // Crear mensaje de error debajo del campo de número de butacas
        let errorMessage = document.createElement('p');
        errorMessage.id = 'suggestionError';
        errorMessage.textContent = 'No hay suficientes butacas libres seguidas.';
        errorMessage.classList.add('error');
        document.getElementById('numberOfSits').insertAdjacentElement('afterend', errorMessage);
    }
    else
    {
        // Eliminar mensaje de error (si lo hubiese)
        let existingMessage = document.getElementById('suggestionError');
        if (existingMessage) {
            existingMessage.remove();
        }
    }
    // Resaltar las butacas sugeridas
    for (let i = 0; i < butacasReservadas.length; i++) {
        document.getElementById(butacasReservadas[i]).classList.remove('sit-free');
        document.getElementById(butacasReservadas[i]).classList.add('sit-suggestion');
    }
}

function suggest(butacas, n) {
    let butacasReservadas = []; 
    let i = butacas.length - 1; // Empieza a buscar desde la última fila
    let j = 0; // Empieza a buscar desde la primera butaca de la fila
    while(i >= 0 && butacasReservadas.length < n) {
        //Cuando empieza una fila nueva se resetea la cuenta a 0 para que todos estén en la misma fila
        butacasReservadas = [];
        while (j < butacas[i].length && butacasReservadas.length < n) {
            //Si el asiento está vacío, se añade a la lista de butacas reservadas y se suma 1 al contador (si ya hay n butacas reservadas, se devuelve la lista)
            if (butacas[i][j].estado == false) {
                butacasReservadas.push(butacas[i][j].id);
            }
            //Si la butaca está ocupada, se resetea la lista de butacas reservadas
            else {
                butacasReservadas = [];
            }
            j++;
        }
        i--;
        j = 0;

        if(butacasReservadas.length < n) {
            butacasReservadas = [];
        }
    }
    return butacasReservadas;
}
