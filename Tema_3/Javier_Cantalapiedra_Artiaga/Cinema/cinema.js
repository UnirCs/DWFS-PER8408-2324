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


    if (numero > Ncols){
        return new Set();
    }

    for (let fila of butacas.toReversed()){

        let asientosJuntos = 0;
        let asientos = new Set();

        for (let butaca of fila){

            if(butaca.ocupado === false){
                asientos.add(butaca);
                asientosJuntos++;
            }

            else{
                asientos = new Set();
                asientosJuntos = 0;
            }
            
            if (asientosJuntos===numero){
                console.log(asientos)
                return asientos;
            }

        }
    }
    
    return new Set();
}


// Inicializar la matriz
let matriz= setup();

