
const N = 10; // Número de filas y columnas


function setup() {
    let idContador = 1; 
    let butacas = [];

    for (let i = 0; i < N; i++) {
       
        let fila = [];
        for (let j = 0; j < N; j++) {
           
            fila.push({
                id: idContador++,
                estado: false 
            });
        }
        butacas.push(fila);
    }
   
    butacas[9][9].estado = true;
    butacas[9][2].estado = true;
    butacas[9][5].estado = true;
    return butacas;
}


let butacas = setup();


function suggest(numerobutacas) {
    let suggestedSeats = new Set();

    for (let i = N - 1; i >= 0; i--) {
        
        let fila = butacas[i];
        let consecutivos = 0;
        let consecutivosIds = new Set();

        for (let j = 0; j < N; j++) {
            
            if (!fila[j].estado) {
                consecutivosIds.add(fila[j].id);
                consecutivos++;

                if (consecutivos === numerobutacas) {
                    
                    suggestedSeats = consecutivosIds;
                    return suggestedSeats;
                }
            } else {
            
                consecutivos = 0;
                consecutivosIds.clear();
            }
        }
    }

   
    return suggestedSeats;
}



console.log(butacas);


let numeroAsientosSolicitados = 5;
let asientosSugeridos = suggest(numeroAsientosSolicitados);
console.log(`Asientos sugeridos para ${numeroAsientosSolicitados} personas: ${[...asientosSugeridos]}`);


