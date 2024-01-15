const N = 10;

function setup() {
    let idContador = 1;
    let butacas    = [];
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
    return butacas;
}

let butacas = setup();

/**Solution*/

function findNextPossibleSeats(nSeats, butacas) {
    return butacas.reduce((prev, cur) => {
        if (prev.length >= nSeats) {
            return prev;
        }
        if (cur.estado === false) {
            prev.push(cur)
        }
        return prev
    }, []);
}

function areTheSeatsTogether(possibleSeats) {
    return new Set(possibleSeats.map(value => (value.id / N+1).toString().charAt(0))).size === 1
}

function matrixToArray(butacas) {
    return butacas.flatMap(m => m)
}
/**
 * to find the last possible Seat
 * Testing Propose
    function reverseArrayOrder(butacas) {
        reverseOrder = butacas.reverse();
        reverseOrder.forEach(value => {
            if (value.id > 99) {
                value.estado = true;
            }
        });
        return reverseOrder
    }
 */

function getCleanedArrayOfSeats(newButacas, possibleSeats) {
    return newButacas.slice((100 - possibleSeats[possibleSeats.length - 1].id), newButacas.length).reverse();
}

function enoghSeats(possibleSeats, nummerSeekSeats) {
    return possibleSeats.length === nummerSeekSeats;
}

function suggest(nummerSeekSeats, seatsArray) {
    if (nummerSeekSeats > N) {
        throw new Error("No es posible poner juntos ese numero de asientos");
    }
    let possibleSeats = findNextPossibleSeats(nummerSeekSeats, seatsArray.reverse())
    if (possibleSeats.length === 0) {
        throw new Error("No hay suficientes Asientos");
    }
    return enoghSeats(possibleSeats, nummerSeekSeats) && areTheSeatsTogether(possibleSeats) ?
           possibleSeats :
           suggest(nummerSeekSeats, getCleanedArrayOfSeats(orderData.reverse(), possibleSeats))
}