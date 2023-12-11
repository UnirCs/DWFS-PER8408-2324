// Definir el tamaño de la matriz de butacas
const N = 5; // Número de filas y columnas

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


function suggest (nasientos) {
    let butacasReservadas = []; 
    butacas = setup();
    let foundButacas = false;
    nasientos = nasientos * 1;

    //Si el número de asientos solicitados excede el tamaño máximo de la fila, la función debe devolver un set vacío.
    if(butacas.length < nasientos){ return [];}    
        
    for (let i= butacas.length-1; i >= 0 && !foundButacas; i--)
    {
        for (let j=0; j < butacas.length && !foundButacas; j++)
        {
            if(butacas[i][j].estado === false) {
                butacasReservadas.push(butacas[i][j].id);
            } else {
                butacasReservadas = [];
            }
            if (butacasReservadas.length === nasientos)
            {
                foundButacas=true;                
                for (let k = butacasReservadas.length-1;k>=0; k--)
                {   found = false;
                    if (butacasReservadas.find((element) => element == butacas[i][j-k].id))
                    found = true;
                    
                    if(found)
                    butacas[i][j-k].estado= true;
                }
            }
        }
        //Limpiar la lista de asientos si se nos ha acabado la fila
        if (!foundButacas)
        {
            butacasReservadas = [];
        }
    }
    //return butacasReservadas;
    console.log('Asientos sugeridos: '+ butacasReservadas );
}

// Inicializar la matriz
let butacas = setup();
console.log('Butacas incializadas');
