
 const nRows = 6;
const init_cinema = ()=>
{
    let cinema = []
    for(let i= nRows-1 ; i>=0  ; i--)
    {
        let column = []

        for(let j= nRows-1 ; j>=0 ; j--)
        {
            //if(i>=0 && i<=4){ Descomentar para probar que se escogen las filas mas lejanas
            let chair = {
                id: i*nRows + j + 1,
                state: false
            }
            column.push(chair)

            //}
            //else
            //{
            //    let chair = {
            //        id: i*nRows + j + 1,
            //        state: true
            //    }
            //    column.push(chair)
            // }
        }
        cinema.push(column)
    }
    return cinema
}

 let cinema = init_cinema()

const exsistSeats = (nSeats, cinema)=>
{
    let count=0
    let seatsNotFound = true
    let tempPurchase

    for(let row= 0 ; row<nRows && count<nSeats ; row++)
    {
        tempPurchase = new Set([]);
        count = 0
        for(let seat=0 ; seat<nRows && count<nSeats; seat++)
        {
            if(cinema[row][seat].state === false){
                ++count
                tempPurchase.add(cinema[row][seat].id)
            }else{
                count = 0;
                tempPurchase.clear()
            }

        }
    }

    return tempPurchase

}


 function suggest(nSeats, cinema)
 {
    if( nSeats > nRows){
        return new Set([])
    }else
        return exsistSeats(nSeats, cinema)
 }



 ///let purchase = suggest(6, cinema)

 function seatsDecorator(purchase){
     console.log("Your seats are : "+Array.from(purchase).join(', '))
     return "Your seats are : "+Array.from(purchase).join(', ');
 }

 ///seatsDecorator(purchase)

