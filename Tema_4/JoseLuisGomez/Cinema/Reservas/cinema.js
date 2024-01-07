const N = 10; // Número de filas y columnas


function setId(){
    let idContador = 1;
    asientos.forEach(function (silla) {
        silla.setAttribute("id", idContador);
        idContador++;
    })
}

function sillasLibres(n){
    const l = new Set();
    if (N >= n && n > 0) {
        for (let i = N -1; i >= 0 && l.size < n; i--) {
            for (let j = 0; j < N && l.size < n && N - j >= n - l.size; j++) {
                if (asientos[(i * N) + (j)].className === "col") {
                    l.add(asientos[(i * N) + (j)].id);
                }else if (l.size > 0){
                    l.clear();
                }
            }
            if (l.size < n) {
                l.clear();
            }
        }
    }
    l.forEach(changeSelect);
    return l;
}

function changeSelect(n) {
    document.getElementById(n).className = "col--selected";
}

function deselect(r) {
    for (let i = 0; i < r.length; i++) {
        r[i].className = "col";
    }
}
    

// Inicializar la matriz
const numSillas = document.getElementById("numero");
const resultado = document.getElementById("selecion");
const asientos = document.querySelectorAll('#seats [class^=col]');

setId();

numSillas.oninput = function() {
    let reversed = document.querySelectorAll('#seats [class^=col--selected]');
    if(!reversed.length == 0) {
        deselect(reversed);
    }
    resultado.innerHTML = Array.from(sillasLibres(numSillas.value)).join(', ');
}