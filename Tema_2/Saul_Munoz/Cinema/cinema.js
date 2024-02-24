// Definir el tamaño de la matriz de butacas
const N_rows = 5; // Número de filas
const N_columns = 20; // Número de columnas
// Función para inicializar la matriz de butacas
function setup() {
    let idContador = 1; // Iniciar el contador de IDs en 1 (los humanos no empezamos a contar desde 0)
    let butacas = [];

    for (let i = 0; i < N_rows; i++) {
        // Nueva fila
        let fila = [];
        for (let j = 0; j < N_columns; j++) {
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


//Funcion para sugerir las butacas, tomando como entrada la matriz de butacas y el numero de asientos a reservar
function suggest(seats){
    let seats_set=[];//inicializamos los asientos
    let flag_checker=false;
    if(butacas[0].length<seats){
        flag_checker=true;
    }else{
        for(let row=butacas.length-1; row>=0;row--){
            if(flag_checker===false){
                let seatsFalse=0;

                for (let column = 0; column < butacas[0].length; column++) {
                    if (butacas[row][column].estado === false && seatsFalse<seats) {
                        seatsFalse++;
                        seats_set.push(id=butacas[row][column].id);//Anadimos un asiento disponible al set
                        }
                    else if(seatsFalse<seats){
                        seatsFalse=0;
                        seats_set.splice(0,seats_set.length);//vaciamos el set al saltar la fila
                    }
                }

                if(seatsFalse>=seats){
                    flag_checker=true;
                    }
                else{
                    seats_set.splice(0,seats_set.length);//vaciamos el set al saltar la fila
                    }
                }


            }
        }
    console.log("Sus asientos son: "+seats_set.join(', '));
    return seats_set;
    }
function unavailableTest(butacas){
    butacas[4][2].estado=true;
    butacas[4][8].estado=true;
    butacas[4][14].estado=true;
}
// Inicializar la matriz
let butacas = setup();
unavailableTest(butacas);
let userSeats = 6;
let seats_selected=suggest(userSeats);
console.log(seats_selected);