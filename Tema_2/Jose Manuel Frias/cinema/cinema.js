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
    let asientos = [];
    let foundButacas = false;
    if(butacas.length<numButacas){
        console.log("No hay tantos asientos disponibles en una fila");
    }
    else
    {
        for (let i= butacas.length-1; i >= 0 ; i--)
        {
            let filaElegida = butacas.at(i);
            //A partir de un numero de butacas no tiene sentido seguir mirando ya que no van a entrar
            for (let j=0; j < butacas.length ; j++)
            {
                //Si encontramos una butaca  libre
                if (filaElegida.at(j).estado===false)
                {
                    asientos.push(filaElegida.at(j).id);
                }
                //Solo puede estar disponible u ocupada
                else {
                    asientos = [];
                }

                //Si tras aumentar el counter, tenemos el numero suficiente, salimos de los bucles
                if (asientos.length===numButacas)
                {
                    //Loop para marcar como cogidas las butacas
                    for (let k =asientos.length-1;k>=0; k--)
                    {
                        butacas[i][j-k].estado= true;
                    }



                    break;
                }
            }

            //Primero comprobarmos si tras mirar la fila hayamos obtenido los asientos
            if (asientos.length===numButacas)
            {
                foundButacas =true;
                break;
            }
            //Si no los hemos obtenido, limpiamos la variable
            else
            {
                asientos = [];
            }
        }
    }
    if (!foundButacas)
    {
        console.log("No se encontraron butacas que cubriesen esa peticion")
    }
    return asientos;
}




//Tests añadidos
let cogidas = suggest (4);
console.log(cogidas);

cogidas = suggest (2);
console.log(cogidas);

cogidas = suggest (9);
console.log(cogidas);
cogidas = suggest (7);
console.log(cogidas);
cogidas = suggest (8);
console.log(cogidas);
cogidas = suggest (6);
console.log(cogidas);
cogidas = suggest (6);
console.log(cogidas);

cogidas = suggest (6);
console.log(cogidas);
cogidas = suggest (6);
console.log(cogidas);

cogidas = suggest (6);
console.log(cogidas);
cogidas = suggest (6);
console.log(cogidas);

cogidas = suggest (1);
console.log(cogidas);
cogidas = suggest (2);
console.log(cogidas);

cogidas = suggest (1);
console.log(cogidas);
cogidas = suggest (2);
console.log(cogidas);



cogidas = suggest (70);
console.log(cogidas);




