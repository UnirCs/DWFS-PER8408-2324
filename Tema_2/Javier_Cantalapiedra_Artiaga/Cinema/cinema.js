const Ncols = 16;
const Nrows = 5;
console.log("Hola Mundo");
let butacas = [];

function setup(){

    for(let i = 0; i< Nrows; i++ ){

        let fila =[];

        for (let j = 0; j < Ncols; j++) {

            let butaca = {
                id: (i+1).toString() + (j+1).toString(),
                ocupado: Math.random() < 0.5
            }
            fila.push(butaca);
        }

        butacas.push(fila);
    }

}

const suggest = (numero) => {

    let asientos =[]

    if (numero > Ncols){
        return [];
    }


    for (let i in butacas){
        let asientosJuntos = 0;
        let row = Nrows-i-1
        for (let j in butacas[row]){

            if(butacas[row][j].ocupado === false){
                asientos.push(butacas[row][j]);
                asientosJuntos++;
            }

            else{
                asientos = [];
                asientosJuntos = 0;
            }
            
            if (asientosJuntos===numero){
                return asientos;
            }

        }
    }

    return [];

}

const suggest2 = (numero) => {

    let asientos =[]

    if (numero > Ncols){
        return [];
    }

    for (let fila of butacas.reverse()){

        let asientosJuntos = 0;
        let asientos = [];

        for (let butaca of fila){

            if(butaca.ocupado === false){
                asientos.push(butaca);
                asientosJuntos++;
            }

            else{
                asientos = [];
                asientosJuntos = 0;
            }
            
            if (asientosJuntos===numero){
                return asientos;
            }

        }
    }


    return [];
}


// Inicializar la matriz
let matriz= setup();

// Imprimir la matriz
console.log(butacas[0][0]);

let solucion = suggest2(2);

for(i in solucion){
    console.log(solucion[i])
}