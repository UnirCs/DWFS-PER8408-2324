const N = 10;
function setup() {
    let idContador = 1;
    let butacas = [];

    for (let i = 0; i < N; i++) {
        let fila = [];
        for (let j = 0; j < N; j++) {
            fila.push({
                id: idContador++,
                estado: false,
            });
        }
        butacas.push(fila);
    }
    return butacas;
}

function suggest(numeroAsientosDeseados, matrizButacas) {
    let asientosSugeridos = new Set([]);
    if(numeroAsientosDeseados > N || numeroAsientosDeseados <= 0){
        return asientosSugeridos;
    }
    for(let i = matrizButacas.length-1; i >= 0 && asientosSugeridos.size === 0 ; i--){
        asientosSugeridos = obtenerAsientosSiProcede(numeroAsientosDeseados, matrizButacas[i]);
    }
    return asientosSugeridos;
}

function obtenerAsientosSiProcede(numeroAsientosDeseados, filaButacas){
    let posiblesAsientos = new Set([]);
    for(let j = 0; j < N && posiblesAsientos.size !== numeroAsientosDeseados; j++){
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