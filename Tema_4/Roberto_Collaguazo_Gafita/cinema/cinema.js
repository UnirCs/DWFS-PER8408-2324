document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("whiteSwitch").addEventListener("change", () => toggleWhiteMode());
    const toggleWhiteMode = () => {
        document.body.classList.toggle("white-mode");
        let tables = document.getElementsByTagName('table');
        for (let i = 0; i < tables.length; i++) {
            if (document.body.classList.contains("white-mode")) {
                tables[i].className = "table table-secondary table-borderless";
            } else {
                tables[i].className = "table table-dark table-borderless";
            }
        }
    }

    document.getElementById("numeroAsientos").addEventListener("input", suggest);
    asignarIdAsientos();
});

const obtenerAsientos = () => {
    let tabla = document.getElementsByTagName('table')[0];
    return tabla.getElementsByTagName('div');
}

const asignarIdAsientos = () => {
    let divs = obtenerAsientos();
    for (let i = 0; i < divs.length; i++) {
        divs[i].id = 'asientoS1_' + (i + 1);
    }
}

const deshacerSeleccionPendientes = () => {
    let divs = obtenerAsientos();
    for (let i = 0; i < divs.length; i++) {
        if(divs[i].className !== "asiento-reservado"){
            divs[i].className = "asiento";
        }
    }
}

// Definiendo el Set
const asientosEscogidos = new Set();

// Función para inicializar la matriz de butacas
const setup = () => {
    let idContador = 1;
    let butacas = [];
    let visualizar = "";

    for (let i = 0; i < 5; i++) {
        let fila = [];
        for (let j = 0; j < 6; j++) {
            let esOcupado = i === 4 && j === 5;
            visualizar += (esOcupado ? "O " : "L ") + idContador + "\t";
            fila.push({
                id: idContador++,
                estado: esOcupado
            });
        }
        butacas.push(fila);
        visualizar += "\n";
    }
    return butacas;
}


// Inicializar la matriz
let butacas = setup();

function suggest() {
    let asientos = parseInt(document.getElementById("numeroAsientos").value);
    let arrayAsientos = [];
    let asientosSeguidos = 0;
    let validadorSet = false;

    deshacerSeleccionPendientes();

    if (asientos > 0 && asientos <= butacas[0].length) {
        for (let i = butacas.length - 1; i >= 0 && !validadorSet; i--) {
            for (let j = butacas[0].length - 1; j >= 0 && !validadorSet; j--) {
                if (butacas[i][j].estado === false) {
                    arrayAsientos.push(butacas[i][j].id);
                    asientosSeguidos++;
                    validadorSet = asientos === asientosSeguidos;
                }
            }
            if (!validadorSet) {
                asientosSeguidos = 0;
                arrayAsientos = [];
            }
        }
    }

    if (validadorSet) {
        arrayAsientos.forEach(id => {
            asientosEscogidos.add(id);
            document.getElementById("asientoS1_" + id).className = "asiento-pendiente";
        });
        asientosEscogidos.clear();
    }
}

