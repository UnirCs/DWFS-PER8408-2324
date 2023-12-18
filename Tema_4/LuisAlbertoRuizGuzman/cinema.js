const nFilas=5; //Numero de Columnas
const nColumnas = 13; // Numero de Filas
const butacas=setup();

window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('numeroAsiento').addEventListener('change', reservarButacas);
    estadoInicial(butacas);
});

// Función para inicializar la matriz de butacas
function setup() {
    let idContador = 1; // Iniciar el contador de IDs en 1 (los humanos no empezamos a contar desde 0)
    let butacas = [];
    let butacasOcupadas;
    let estadoAsignado;

    for (let i = 0; i < nFilas; i++) {
        // Nueva fila
        let fila = [];
        for (let j = 0; j < nColumnas; j++) {
                butacasOcupadas = Math.floor(Math.random() * 2);//obtiene valor aleatorio 1 o 0
            if(butacasOcupadas==1){
                estadoAsignado=true;
            }else{
                estadoAsignado=false;
            }
            // Nuevo asiento
            fila.push({
                id: idContador++,
                estado: estadoAsignado // Estado inicial libre
            });
        }
        butacas.push(fila);
    }
    return butacas;
}

function estadoInicial(butacas){
    let asientos = document.getElementsByClassName('asiento');
    let id = 1;
    for (let i = 0; i < asientos.length; i++) {
        asientos[i].id = id++;
    }
    for (let i = 0; i < nFilas ; i++) {
        for (let j = 0; j < nColumnas; j++) {
            let asignarAsientop = document.getElementById(butacas[i][j].id);
            if (butacas[i][j].estado) {
                asignarAsientop.classList.add('ocupado');
                asignarAsientop.classList.remove('libre');
                asignarAsientop.classList.remove('reservado');
            } else {
                asignarAsientop.classList.add('libre');
                asignarAsientop.classList.remove('ocupado');
                asignarAsientop.classList.remove('reservado');
            }
        }
    }
}


const reservarButacas=()=>{
    let cntAsientos = document.getElementById('numeroAsiento').value;
    estadoInicial(butacas);
    let butacasReservadas = suggest(butacas,cntAsientos);
    if (butacasReservadas.length == 0 ) {
        alert("No hay "+cntAsientos+" asientos juntos disponibles")
    }
    //asigna las butacas reservadas
    for (let i = 0; i < butacasReservadas.length; i++) {
        document.getElementById(butacasReservadas[i]).classList.add('reservado');
        document.getElementById(butacasReservadas[i]).classList.remove('libre');
        
    }
}


function suggest(butacas,n) {
    let butacasReservadas = [];
    if(n>nColumnas ){
        return butacasReservadas;
    }
    let i = nFilas - 1; // Asignamos la ultima fila
    let j = nColumnas - 1; // Se buscara por la ultima butaca de la fila
    
    while(i >= 0 && butacasReservadas.length < n) {//recorremos el array desde el final y solo saldra si recorre todas als filas o si llenamos las butacas reservadas
        butacasReservadas = []; //Reseteamos las butacas reservadas
        while (j >=0 && butacasReservadas.length < n) {
            if (butacas[i][j].estado == false) {
                butacasReservadas.push(butacas[i][j].id);//Agregamos a butacas reservadas si el id esta disponible
            }
            else {
                butacasReservadas = [];//reseteamos los asientos no estan juntos
            }
            j--;
        }
        i--;
        j = nColumnas - 1;
    }

    if(butacasReservadas.length < n){//Esta condicion se agrego por si en el array anterior estando en la primera fila no llega a resetear las butacas por que ya no hay mas filas que recorrer
        butacasReservadas = []
    }
    return butacasReservadas;
}


document.getElementById('numeroAsiento').addEventListener('input', function(e) {
    if (this.value < 0) {
      this.value = '';
      alert('Por favor, introduce un número mayor que 0.');
    }
  });