
 const nRows = 10;
const init_cinema = ()=>
{
    let cinema = []
    for(let i=0; i<nRows ; i++ )
    {
        let column = []

        for(let j=0; j<nRows ; j++ )
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

const exsistSeats = (nSeats, cinema)=>
{
    let count
    let seatsNotFound = true
    let tempPurchase

    for(let row= nRows-1 ; row>=0 && seatsNotFound ; row--)
    {
        tempPurchase = new Set([]);
        count = 0
        for(let seat=nRows-1 ; seat>=0 && seatsNotFound; seat--)
        {
            if(cinema[row][seat].state === false){
                count++
                tempPurchase.add(cinema[row][seat].id)
            }else{
                count = 0;
                tempPurchase.clear()
            }

            if(count===nSeats)
            {
                seatsNotFound = false
            }
        }

    }
    return tempPurchase

}


 let suggest = (nSeats, cinema)=>
 {
    if( nSeats > nRows){
        return new Set([])
    }else
        return exsistSeats(nSeats, cinema)
 }


 let cinema = init_cinema()

 let purchase = suggest(6, cinema)

 let miArray = Array.from(purchase);

 console.log("Your seats are : "+miArray);