let matrizDOM = [];
let butacasAsignadas =[];
document.querySelectorAll('.filas__butacas').
forEach(function (element, indice) {
    element.id = 'butaca_' + (indice + 1);
    matrizDOM.push(element);
    // Imprimir el nuevo id en la consola
    //console.log('Nuevo ID para', elemento.innerText, ':', elemento.id);
    });

//console.log(matrizDOM)
document.getElementById('imput-reserva')
document.getElementById('imput-reserva').addEventListener('change', function () {
    butacas=[];
    butacasAsignadas.forEach(function (idButaca) {
        var elementoButaca = document.getElementById(idButaca);
        if (elementoButaca) {
            elementoButaca.classList.remove('pre__selection');
        }
    });
    suggest(this.value)
});

//Marcar la butaca 49 como ocupada
document.addEventListener('DOMContentLoaded', function () {
    // Obtener el elemento con el id "butaca_49"
    var butaca49 = document.getElementById('butaca_49');

    // Agregar un event listener para el clic en el elemento
   // butaca49.addEventListener('click', function () {
        // Toggle de la clase "selection"
        butaca49.classList.toggle('selection');
   // });
});

document.addEventListener('DOMContentLoaded', function () {

});
function elementos_ocupados() {

}

// Definir el tamaño de la matriz de butacas

const N = 7; // Número de filas y columnas

// Función para inicializar la matriz de butacas
let butacas = [];
function setup(matrizDOM) {
    let idContador = 1; // Iniciar el contador de IDs en 1 (los humanos no empezamos a contar desde 0)

    for (let i = 0; i < N; i++) {
        // Nueva fila
        let fila = [];
        for (let j = 0; j < N; j++) {
            // Nuevo asiento
            fila.push(matrizDOM[i * N + j]);
        }
        butacas.push(fila);
    }
    return butacas;

}

function suggest(Nasientos){
    // Inicializar la matriz
    butacas = setup(matrizDOM);
    let comparar = document.querySelector(".selection")
    let butacasOcupadas = [];
    let operator = true;
    if (Nasientos>N) {
        return new Set([])
    }else {
        for (let i = N-1; i>=0 && operator; i--){
            for (let j = N-1; j>=0 && operator; j--){
                if(!butacas[i][j].id.includes(comparar.id)){
                    butacasOcupadas.push(butacas[i][j].id)
                }else{
                    butacasOcupadas = [];
                }
                if (butacasOcupadas.length>=Nasientos) {
                    operator=false;
                    butacasAsignadas = butacasOcupadas;
                }
            }
                butacasOcupadas = [];
        }

    }
    butacasAsignadas.forEach(function (idButaca) {
        var elementoButaca = document.getElementById(idButaca);
        if (elementoButaca) {
            elementoButaca.classList.toggle('pre__selection');
        }
    });
    console.log('Asientos sugeridos: '+ butacasAsignadas +'.');
}
