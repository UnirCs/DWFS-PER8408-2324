
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


 document.addEventListener("DOMContentLoaded",(event)=>
 {
    event.preventDefault()

    let seatscontainer = document.getElementById("seatsContainer")

     for(let i= nRows-1 ; i>=0  ; i--)
     {
         let row = document.createElement("div")
         row.classList.add("row")
         seatscontainer.appendChild(row)

         for(let j= nRows-1 ; j>=0 ; j--)
         {
             let seat = document.createElement("div")
             seat.classList.add("col-sm")
             seat.id = String(i*nRows + j + 1)

             let image = document.createElement("i")
             image.classList.add("bi")

             if(cinema[i][j].state === false)
                 image.classList.add('bi-cart-fill')
             else
                 image.classList.add('bi-x-circle-fill')


             row.appendChild(seat)
             seat.appendChild(image)

         }
     }


     let selectSeats = document.getElementById("seats")

     selectSeats.addEventListener("input",(event)=>
     {
         event.preventDefault()
         verifyAndRecomend()



     })

      function verifyAndRecomend() {
           if( document.getElementById('seats').value > nRows || document.getElementById('seats').value<1){
               document.getElementById('seats').value = '';
               document.getElementById('aux-label').textContent = 'Error en la eleccion de asientos';
               setTimeout(()=>{
                   document.getElementById('aux-label').textContent = '';
               },2000)
           }else
           {
               const seatsRecomended = seatsDecorator(suggest(document.getElementById('seats').value, cinema));

               document.getElementById('aux-label').textContent = seatsRecomended

               return seatsRecomended
           }
       }




 })
