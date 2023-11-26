const FILAS = 5;
const COLUMNAS = 13;
let butacas = [];
let matrizButacasDOM = [];
document.addEventListener('DOMContentLoaded', () => {
    matrizButacasDOM = document.querySelectorAll("div.chair");
    butacas = setup(matrizButacasDOM);
});
document.getElementById('chairsNumber').addEventListener('change', function () {
    const asientosSugeridos = suggest(Number(this.value), butacas);
    matrizButacasDOM.forEach((asiento)=>{
        asiento.classList.replace('chair-selected','chair-available');
    })
    asientosSugeridos.forEach((asiento)=>{
        matrizButacasDOM[asiento-1].classList.replace('chair-available','chair-selected');
    })
});

function setup() {
    let idContador = 1;
    let butacas = [];

    for (let i = 0; i < FILAS; i++) {
        let fila = [];
        for (let j = 0; j < COLUMNAS; j++) {
            const available = (Math.random() < 0.3)
            fila.push({
                id: idContador++,
                estado: available,
            });
            if(!available){
                matrizButacasDOM[i*COLUMNAS+j].classList.add('chair-available');
            }else{
                matrizButacasDOM[i*COLUMNAS+j].classList.add('chair-unavailable');
            }
        }
        butacas.push(fila);
    }
    return butacas;
}

function suggest(numeroAsientosDeseados, matrizButacas) {
    let asientosSugeridos = new Set([]);
    if(numeroAsientosDeseados > COLUMNAS || numeroAsientosDeseados <= 0){
        return asientosSugeridos;
    }
    for(let i = matrizButacas.length-1; i >= 0 && asientosSugeridos.size === 0 ; i--){
        asientosSugeridos = obtenerAsientosSiProcede(numeroAsientosDeseados, matrizButacas[i]);
    }
    return asientosSugeridos;
}

function obtenerAsientosSiProcede(numeroAsientosDeseados, filaButacas){
    let posiblesAsientos = new Set([]);
    for(let j = 0; j < COLUMNAS && posiblesAsientos.size !== numeroAsientosDeseados; j++){
        if(filaButacas[j].estado === false){
            posiblesAsientos.add(filaButacas[j].id);
        }
        if(filaButacas[j].estado === true && posiblesAsientos.size !== 0){
            posiblesAsientos.clear();
        }
    }
    if(posiblesAsientos.size !== numeroAsientosDeseados){
        posiblesAsientos.clear();
    }
    return posiblesAsientos;
}