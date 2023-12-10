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

// Imprimir la matriz
console.log(butacas);




function suggest(num_Asientos,matriz_asientos){

    let reserva = [];  //array para retornar asientos reservados
    let index_reserva =0;  


    for (let i=N-1; i>=0 && num_Asientos-1 < matriz_asientos.length && index_reserva<num_Asientos ;i--){                     
        reserva = [];
        index_reserva = 0;
        
        for (let j=0; j<N && index_reserva<num_Asientos; j++){  
            if(matriz_asientos[i][j].estado === false){
                console.log("index_reserva es: "+ index_reserva);
                reserva[index_reserva] = matriz_asientos[i][j].id;
                index_reserva = index_reserva+1;
                console.log("encontré id "+ matriz_asientos[i][j].id);
            }
            else {
                console.log("entreé aquíiiiii verdaderoooo");
                console.log("encontré id "+ matriz_asientos[i][j].id);
                index_reserva = 0;
                reserva = [];
            }
        }
        console.log("se acabó la filaaaaaaaaaaaaaaa");
        

       //al terminar una fila sin encontrar puesto, se reinicia el contador 
    }

console.log("para empezar a validar, index reserva es: "+ index_reserva + " y num_Asientos es: " + num_Asientos);
if(index_reserva===num_Asientos){
    console.log("ganéeeeeeeeeeeee");
    return reserva;
    
}
else {
    reserva = [];
    console.log("Perdíiiiiiiiiiiiiii");
    console.log("reserva lenght es: " + reserva.length);
    console.log(index_reserva);

 
    return [];
}


      //si sale del ciclo for sin encontrar asientos disponibles, retorna vacío
}




//ASIGNACIÓN MANUAL DE ASIENTOS PARA PRUEBA


butacas[9][0].estado=true;
butacas[9][1].estado=true;
butacas[9][2].estado=true;

butacas[8][0].estado=true;
butacas[8][1].estado=true;
butacas[8][2].estado=true;

butacas[7][9].estado=true;
butacas[7][8].estado=true;
butacas[7][7].estado=true;

// butacas[6][0].estado=true;
// butacas[6][1].estado=true;
// butacas[6][2].estado=true;

// butacas[5][0].estado=true;
// butacas[5][1].estado=true;
// butacas[5][2].estado=true;

// // butacas[4][0].estado=true;
// // butacas[4][1].estado=true;
// // butacas[4][2].estado=true;

// butacas[3][0].estado=true;
// butacas[3][1].estado=true;
// butacas[3][2].estado=true;

// butacas[2][0].estado=true;
// butacas[2][1].estado=true;
// butacas[2][2].estado=true;

// butacas[1][0].estado=true;
// butacas[1][1].estado=true;
// butacas[1][2].estado=true;

// butacas[0][0].estado=true;
// butacas[0][1].estado=true;
// butacas[0][2].estado=true;



let asientos_reservados=[]; //arreglo para almacenar los asientos disponibles
asientos_reservados=suggest(7,butacas);    //obtiene asientos disponibles, se debe indicar el número de asientos y la matriz original de los asientos.
console.log(asientos_reservados);
//console.log(asientos_reservados[0]);
