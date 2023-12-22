// Definir el tamaño de la matriz de butacas
const N = 10; // Número de filas y columnas

document.addEventListener('DOMContentLoaded', () => {
   let butacas = crearButacas();
   let cantidadButacas = document.getElementById("cantidad-sugerida");
    cantidadButacas.addEventListener("input", () => {
        document.getElementById("butacas").querySelectorAll("button").forEach(button => {
            button.classList.remove("box--suggest");
        })
        let butacasId = suggest(cantidadButacas.value, butacas);
        butacasId.forEach(butacaId => {
            document.getElementById("butaca" + butacaId.toString()).classList.add("box--suggest");
        })
    });
});
//Declarando la clase que representa la butaca
class Butaca{
    constructor(id){
        this.id = id;
        this.estado = false;
    }
    getId(){
        return this.id;
    }
    getEstado(){
        return this.estado;
    }
    setEstado(estado){
        this.estado = estado;
    }
}

//Función que crea las butacas en memoria y las asocia a los botones en el html
function crearButacas(){
    let id = 1;
    let butacas = [];
    let butacasMem = document.getElementById("butacas");
    butacasMem.querySelectorAll("div").forEach(item => {
        let fila = [];
        item.querySelectorAll("button").forEach(button => {
            button.id = "butaca" +id.toString();
            let but = document.getElementById("butaca" +id.toString());
            but.innerText= id.toString();
            fila.push(new Butaca(id));
            id++;
        });
        butacas.push(fila);
    });
    //se marca el ultimo al ejemplo que coloca el profesor
    document.getElementById("butaca100").classList.add("box--occupied");
    butacas[9][9].setEstado(true);
    return butacas;
}

function suggest( asientosSugeridos, butacas){

    let asientos = new Set();

    if (asientosSugeridos <= N) {
        let encontrado = false;
        let fila_existe = 0;
        let start = 0;
        for (let n_filas = N - 1; n_filas >= 0 && encontrado === false; n_filas--) {
            if (encontrado === false) {
                let fila = butacas[n_filas];
                let existe = false;
                let cupos = 0;
                start = 0;
                for (let i = 0; i < 10 && existe === false; i++) {
                    if (fila[i].getEstado() === false && existe === false) {
                        cupos++;
                    } else
                        cupos = 0;

                    if (cupos === parseInt(asientosSugeridos)) {
                        existe = true;
                        start = i - (asientosSugeridos - 1);
                        fila_existe = n_filas;
                    }
                }

                if (existe === true)
                    encontrado = true;

            }
        }

        if (encontrado === true) {

            for (let i = start + 1; i <= start + asientosSugeridos; i++)
                asientos.add(fila_existe * 10 + i);
        }
    }

    return asientos;
}
