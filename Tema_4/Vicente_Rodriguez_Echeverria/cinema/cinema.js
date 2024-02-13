// Definir el tamaño de la matriz de butacas
const N = 7; // Número de filas y columnas
let butacasx=[];
// Función para inicializar la matriz de butacas
function setup() {
    let idContador = 1; // Iniciar el contador de IDs en 1 (los humanos no empezamos a contar desde 0)
    let butacas = [];
    let celdaID=0;
    for (let i = 0; i < N; i++) {
        // Nueva fila
        let fila = [];
        const celdas = document.querySelectorAll('.butacas-row TD');
        let boolx;
        for (let j = 0; j < N; j++) {
            // Nuevo asiento
            boolx = Math.random() < 0.5; //genera aleatoriamente true o false
            fila.push({
                id: idContador++,
                estado: boolx//false // Math.random() < 0.5 // Estado inicial libre
            });
            // Obtener el elemento por su ID
            celdaID++;
            let elemento = document.getElementById('cel-' + celdaID);
            if (boolx) {
                elemento.classList.remove(elemento.classList[0]);
                elemento.classList.add('butaca2');
            }
            else {
                elemento.classList.remove(elemento.classList[0]);
                elemento.classList.add('butaca1');
            }
        }
        butacas.push(fila);
    }
    return butacas;
}

function suggest(numeroAsiento) {
    let butacas = butacasx;
    let asientoReservado = new Set([]);
    asientoReservado.clear();
    let filaButaca, contadorReserva;
    if (numeroAsiento > N) return asientoReservado;
    for (let butaca = (N - 1); butaca >= 0; butaca--) {
        filaButaca = butacas[butaca];
        for (let fila = 0; fila < filaButaca.length; fila++) {
            contadorReserva = 0;
            for (let i = 0; i < numeroAsiento; i++) {
                if ((fila + i) < filaButaca.length) {
                    if (filaButaca[fila + i].estado == false) {
                        asientoReservado.add(filaButaca[fila + i].id);
                        contadorReserva++;
                    }
                    else {
                        asientoReservado.clear();
                        i = numeroAsiento;
                    }
                }
            }

            if (contadorReserva == numeroAsiento) {
                butaca = -1;
                fila = N;
            }
        }
    }
    return asientoReservado;
}

// Iterar sobre cada celda y asignar un ID único a cada una
document.addEventListener('DOMContentLoaded', () => {
    console.log('El DOM ha sido completamente cargado');
    asignarIDsACeldas();
    butacasx=setup();
});
//crea ID en las butacas-row TD
function asignarIDsACeldas() {
    // Obtener todas las celdas de la tabla butacas-row de las TD
    const celdas = document.querySelectorAll('.butacas-row TD');
    celdas.forEach((celda, index) => {
        // Crear un ID único para la celda
        const idCelda = 'cel-' + (index + 1);
        // Asignar el ID a la celda
        celda.setAttribute('id', idCelda);
    });
}
//Obtiene el valor ingresado de la butaca a reservar de la txt "Indicar cuantos asientos quieres reservar"
function obtenerValorButaca() {
    // Obtener el valor del campo de texto
    var valor = document.getElementById("txtNumeroButaca").value;
    muestraButacaReservada(suggest(valor));
}

function muestraButacaReservada(asientoReservado){
    let arraySet=Array.from(asientoReservado.values());
    let col=6;
    let fil=6;
    for(let i=1;i<=arraySet.length;i++){
        fil=Math.floor(arraySet[i-1]/7)==7 ? Math.floor(arraySet[i-1]/7)-1 : Math.floor(arraySet[i-1]/7)
        col=(arraySet[i-1]%7)===0 ? N-1 : ((arraySet[i-1]%7)-1);        
        
        elemento=document.getElementById('cel-'+arraySet[i-1]);
        elemento.classList.remove(elemento.classList[0]);
        elemento.classList.add('butaca3');

        butacasx[fil][col].estado=true;
    }
}
