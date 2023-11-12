const n_filas = 5;
const n_columnas = 10;
const butacas_not_available=[
    1,2,9,10,
    15,16,
    26,27,28,
    32,33,34,38,39,
    43,44,48,
    55,56,59,60
];

function setup() {
    let n_butaca = 1;
    let butacas = [];

    for (let i = 0; i < n_filas; i++) {
        let fila = [];
        for (let j = 0; j < n_columnas; j++) {
            fila.push({
                id: n_butaca,
                estado: true ? butacas_not_available.includes(n_butaca) : false
            });
            n_butaca++;
        }
        butacas.push(fila);
    }
    return butacas;
}

function count_free(butacas_totales) {
    let butacas_libres = [];

    for (let i = n_filas-1; i >= 0; i--) {
        for (let butaca of butacas_totales[i]){
            if (butaca.estado === false){
                butacas_libres.push(butaca.id);
            } 
        }
    }
    return butacas_libres;
}

let butacas=setup();
let butacas_libres=count_free(butacas);

function areTogether(n_reservas, butaca, butacas_disponibles) {
    const butaca_index = butacas_libres.indexOf(butaca);

    if (butaca_index === -1) {
        return false;
    }

    for (let i=1; i < n_reservas; i++){
        if (butaca+i !== butacas_disponibles[butaca_index+i]){
            return false;
        }
    }

    return true;
}

function suggest(n_tickets) {
    let set_butacas = [];

    if (n_tickets > n_columnas) {
        return set_butacas;
    }

    for (let butaca of butacas_libres){
        if (areTogether(n_tickets, butaca, butacas_libres)){
            for(let index=0; index < n_tickets; index++){
                set_butacas.push(butaca+index);
            }
        }
        
        if (set_butacas.length === n_tickets){
            break;
        }
        
    }

    return set_butacas;
}

console.log(butacas_libres);
console.log(suggest(1));
console.log(suggest(3));
console.log(suggest(4));
console.log(suggest(6));
console.log(suggest(9));
console.log(suggest(17));