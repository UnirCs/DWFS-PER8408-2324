
 const nRows = 6;
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
    for(let row= nRows-1; row>=0 ; row--)
    {
        let count = 0
        let tempPurchase = new Set([]);
        for(let seat=nRows-1; seat>=0 ; seat--)
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
                return tempPurchase
            }
        }

    }
    return []

}


 let suggest = (nSeats, cinema)=>
 {
    if( nSeats > nRows)
        return []

    return exsistSeats(nSeats, cinema)
 }


 let cinema = init_cinema()

 let purchase = suggest(6, cinema)

 let miArray = Array.from(purchase);

 console.log("Your seats are : "+miArray);