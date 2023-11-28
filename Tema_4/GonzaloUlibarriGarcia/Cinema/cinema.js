
 const nRows = 6;
const init_cinema = ()=>
{
    let cinema = []
    for(let i= 0 ; i<nRows  ; i++)
    {
        let column = []

        for(let j= 0 ; j<nRows ; j++)
        {
            if(i>=0 && i<=4){
                //Descomentar para probar que se escogen las filas mas lejanas
                let chair
                if(j>3){
                     chair = {
                        id: i*nRows + j + 1,
                        state: true
                    }
                }else{
                     chair = {
                        id: i*nRows + j + 1,
                        state: false
                    }
                }

            column.push(chair)

            }
           else
            {
               let chair = {
                   id: i*nRows + j + 1,
                   state: true
               }
               column.push(chair)
            }
        }
        cinema.push(column)
    }
    return cinema
}

 let cinema = init_cinema()

const exsistSeats = (nSeats, cinema)=>
{
    let count=0
    let tempPurchase
    let found= false


    for(let row= nRows-1 ; row>=0 && count<nSeats ; row--)
    {
        tempPurchase = new Set([]);
        count = 0
        tempPurchase.clear()
        for(let seat=nRows-1 ; seat>=0 && count<nSeats; seat--)
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

    if(nSeats > count){
        tempPurchase.clear()
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
     //console.log("Your seats are : "+Array.from(purchase).join(', '))
     return "Tus asientos son : "+Array.from(purchase).join(', ');
 }

 ///seatsDecorator(purchase)

 function createVisualCinema(){
     let seatscontainer = document.getElementById("seatsContainer")

     for(let i= 0 ; i<nRows  ; i++)
     {
         let row = document.createElement("div")
         row.classList.add("row")
         seatscontainer.appendChild(row)

         for(let j= 0 ; j<nRows ; j++)
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
 }

 document.addEventListener("DOMContentLoaded",(event)=>
 {
    event.preventDefault()

     createVisualCinema()


     let selectSeats = document.getElementById("seats")

     selectSeats.addEventListener("input",(event)=>
     {
         let seatscontainer = document.getElementById("seatsContainer")
         while (seatscontainer.firstChild) {
             seatscontainer.removeChild(seatscontainer.firstChild);
         }
         createVisualCinema()
         event.preventDefault()
         let listOfSeats = verifyAndRecomend(selectSeats.value)

         listOfSeats.forEach((iSeat)=>
         {
             let selectedSeat = document.getElementById(iSeat).firstChild
             selectedSeat.classList.remove("bi")
             selectedSeat.classList.remove("bi-cart-fill")

             selectedSeat.classList.add("bi")
             selectedSeat.classList.add("bi-check-all")
         }
         )



     })

      function verifyAndRecomend(value) {
           if( value > nRows || value<1){
               document.getElementById('seats').value = '';
               document.getElementById('aux-label').textContent = 'Error en la eleccion de asientos';
               setTimeout(()=>{
                   document.getElementById('aux-label').textContent = '';
               },2000)
           }else
           {
               let seatsRecomended = suggest(value, cinema);
               console.log(seatsRecomended )
                if(seatsRecomended.size)
                    document.getElementById('aux-label').textContent = seatsDecorator(seatsRecomended)
                else
                    document.getElementById('aux-label').textContent = "No hay asientos suficientes"

               return seatsRecomended
           }
       }







    let releaseSeats = document.getElementById("releaseSeats")
     releaseSeats.addEventListener("click",(event)=>
     {
         let numberOfSeats = document.getElementById('seats').value
         if(numberOfSeats !== "") {
             let listOfSeats = verifyAndRecomend(Number(numberOfSeats))

             listOfSeats.forEach((iSeat) => {
                     let selectedSeat = document.getElementById(iSeat).firstChild
                     selectedSeat.classList.remove("bi-check-all")
                     selectedSeat.classList.add("bi-cart-fill")
                     let aux_label = document.getElementById("aux-label")
                     aux_label.textContent = ""


                 }
             )
             let aux_label = document.getElementById("seats")
             aux_label.value = ""
         }

     })

 })
