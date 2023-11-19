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

    let asientos = new Set();
    let asientosJuntos = 0;

    if (numero > Ncols){
        return asientos;
    }

    for (let i = butacas.length - 1; i >= 0 && asientosJuntos!==numero ;i--){

        asientosJuntos = 0;
        asientos = new Set();

        for(let j = 0; j<butacas[i].length && asientosJuntos!==numero ;j++){

            if(butacas[i][j].ocupado === false){
                asientos.add(butacas[i][j]);
                asientosJuntos++;
            }

            else{
                asientos = new Set();
                asientosJuntos = 0;
            }

        }
    }
    
    return asientos;
}


// Inicializar la matriz
let matriz= setup();

// Imprimir la matriz
console.log(butacas[0][0]);

let solucion = suggest(3);

console.log(solucion)