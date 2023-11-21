
const url= "https://api.chucknorris.io/jokes/random";
let parrafo = document.getElementById("chiste");

function nuevoChiste(){
    fetch(url)
        .then((response)=>response.json())
        .then((data=> parrafo.innerHTML=data.value ))
        .catch((err)=>console.log(err));
}




