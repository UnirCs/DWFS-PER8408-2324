// Definir el tamaño de la matriz de butacas
const N = 10; // Número de filas y columnas

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


function suggest (numButacas) {
    let intButacas=Number(numButacas)
    let asientos = [];
    let foundButacas = false;
    if(butacas.length<intButacas){
        console.log("No hay tantos asientos disponibles en una fila");
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
                butacas[i][j].estado===false ? asientos.push(butacas[i][j].id) : asientos = [];

                //Si tenemos el numero deseado de butacas, marcamos para salir de los bucles
                if (asientos.length===intButacas)
                {
                    foundButacas=true;
                    //Loop para marcar como cogidas las butacas
                    for (let k =asientos.length-1;k>=0; k--)
                    {
                        butacas[i][j-k].estado= true;
                    }
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
            console.log("No se encontraron butacas que cubriesen esa peticion")
        }
        else{
            console.log('Los asientos elegidos son : '+ Array.from(asientos).join(', '));
        }
    }
    return asientos;
}




