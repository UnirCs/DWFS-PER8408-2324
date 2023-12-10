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
    //asignar una butaca seleccioda para pruebas
    butacas[4][4].estado=true;

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
        reservarvisualmenteasientos(butacasReservadas);
    console.log('Asientos sugeridos: '+ butacasReservadas);
    return butacasReservadas;
}

function asignarid(butacas) {
    const resume_table = document.getElementById("rwd-table");

    for (var i = 0, row; row = resume_table.rows[i]; i++) {
        for (var j = 0, col; col = row.cells[j]; j++) {
            if (j > 0){ // solo asignara id a la matriz al etiqueta fila # no
                col.id = butacas[i][j-1].id;
                if (butacas[i][j-1].estado == false)
                    col.setAttribute('estilo','desocupado');
                else
                    col.setAttribute('estilo','ocupado');
            }
        }
    }
}

function reservarvisualmenteasientos(asientos) {
    asignarid(butacas);
}

// Inicializar la matriz
let butacas = setup();
console.log('Butacas incializadas');

//asignar una butaca seleccioda para pruebas
butacas[4][4].estado=true;

// atributo del imput para max y min
let inputn = document.getElementById("numerodeasientos");
inputn.setAttribute("max", 5);
inputn.setAttribute("min", 0);

//- Modificar el archivo JS asociado a la página HTML de reserva de butacas. Deberás asignar un ``id`` a cada uno de los asientos. **Esto debe realizarse de forma dinámica (mediante el DOM)**.
asignarid(butacas);

// eliminar referencia a JS
document.getElementById("numerodeasientos").addEventListener('input', () => {
    suggest(document.getElementById("numerodeasientos").value);
});