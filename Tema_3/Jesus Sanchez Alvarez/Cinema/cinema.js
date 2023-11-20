// Definir el tamaño de la matriz de butacas
const N = 10; // Número de filas y columnas

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

var obj = {
    id : 0,
    estado:false,
}

// Funcion que devuelve los asientos vacíos en forma de obj
function suggest(num_butacas){
    let asientos = new Set()

    // butacas[9][5].estado = true
    // butacas[9][6].estado = true
    // butacas[9][7].estado = true
    // butacas[9][8].estado = true
    // butacas[9][3].estado = true
    // butacas[9][4].estado = true
    // butacas[9][0].estado = true

    // butacas[8][5].estado = true
    // butacas[8][6].estado = true
    // butacas[8][7].estado = true
    // butacas[8][8].estado = true
    // butacas[8][9].estado = true
    // butacas[8][4].estado = true
    // butacas[8][0].estado = true

    // butacas[7][5].estado = true
    // butacas[7][6].estado = true
    
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
                        asientos.add(butacas[i][j].id)
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

// Imprimir la matriz
// suggest(5)