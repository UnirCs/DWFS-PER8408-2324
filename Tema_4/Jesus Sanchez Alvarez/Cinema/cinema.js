// Definir el tamaño de la matriz de butacas
const N = 10; // Número de filas y columnas

class Asiento {
    constructor(id, estado) {
        this.id = id;
        this.estado = estado;
      }
}

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

// Funcion que devuelve los asientos vacíos en forma de obj
function suggest(num_butacas){
    let asientos = new Set()
   
    butacas[9][5].estado = true
    butacas[9][6].estado = true
    butacas[9][7].estado = true
    butacas[9][8].estado = true
    butacas[9][3].estado = true
    butacas[9][4].estado = true
    butacas[9][0].estado = true
    butacas[9][9].estado = true

    butacas[8][9].estado = true

    
    if(num_butacas > N){
        return new Set()
    }else{
        let pivot = num_butacas
        let fila = 0
        for(let i = N - 1; i>=0 && pivot > 0;i--){
            pivot = num_butacas
            asientos.clear()
            for(let j = N - 1; j>=0 && pivot > 0;j--){
                if(!butacas[i][j].estado){
                        pivot = pivot - 1
                        fila = i
                        // Asigno al id el numero del asiento que sea
                        asientos.add(new Asiento(butacas[i][j].id,true))
                }else{
                    pivot = num_butacas
                    asientos.clear()
                }
                
            }
        }
        console.log("Fila: ",fila)
        console.log("Asientos: ",asientos)
        return asientos

    }
}

window.onload = function () {
    var list = document.querySelectorAll(".col.border.border-secondary.m-1");
    list.forEach( (element,index) => {
        element.setAttribute("id",index + 1);
    })
}
const selectElement = document.querySelector(".reserva_input");

let libres_ant = null
selectElement.addEventListener("change", (event) => {
//   console.log(selectElement.value)
  let libres = suggest(selectElement.value)
  
  if(libres_ant != null){
    libres_ant.forEach((libre) => {
        let element = document.getElementById(libre.id)
        element.classList.remove("active")
    })
  }

  libres.forEach((libre) => {
    let element = document.getElementById(libre.id)
    element.classList.add("active")
  })
  libres_ant = libres
});
// Imprimir la matriz
// suggest(5)