const n_filas = 5;
const n_columnas = 10;
const butacas_ocupadas = new Set([3,4,6,7,8,15,16,17,33,34,39,40,42,43,46,47]);


function setup() {
    let idContador = 1;
    let butacas = [];

    for (let i = 0; i < n_filas; i++) {
        let fila = [];
        for (let j = 0; j < n_columnas; j++) {
            fila.push({
                id: idContador,
                estado: butacas_ocupadas.has(idContador)
            });

            if (butacas_ocupadas.has(idContador)){
                document.getElementById(idContador.toString()).setAttribute("type", "reserved");
            } else {
                document.getElementById(idContador.toString()).setAttribute("type", "available");
            }

            idContador++
        }
        butacas.push(fila);
    }
    
    return butacas;
}

let butacas = setup();

function buscar_butacas_libres() {
    let butacas_libres = new Array();

    for (let i = n_filas-1; i >= 0; i--) {
        for (let j = 0; j <= n_columnas-1; j++) {
            if (butacas[i][j].estado === false) {
                butacas_libres.push(butacas[i][j].id);
            }
        }
    }

    return butacas_libres
}

let butacas_libres = buscar_butacas_libres();

function suggest(tickets) {
    let butacas_recomendadas = new Set();
    let n_tickets = Number(tickets);
    
    if (n_tickets > n_columnas) {
        return butacas_recomendadas;
    }

    for (let i = 0; i < butacas_libres.length; i++) {
        let j = 0;
        while (j < n_tickets){
            if (butacas_libres[i]+j === butacas_libres[i+j] && butacas_recomendadas.size !== n_tickets){
                butacas_recomendadas.add(butacas_libres[i+j]);
            }
            else if (butacas_libres[i]+j !== butacas_libres[i+j] && butacas_recomendadas.size !== n_tickets){
                butacas_recomendadas.clear();
            }
            j++;
        }
        
    }

    for (const butaca of butacas_recomendadas){
        document.getElementById(butaca.toString()).setAttribute("type","recommended");
    }

    console.log(`Asientos sugeridos: ${Array.from(butacas_recomendadas).join(', ')}`);
}

const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
}

document.getElementById('seats_selected').addEventListener('input', function() {
    setup();
    suggest(this.value);
});

document.getElementById('darkSwitch').addEventListener('change', () => toggleDarkMode());