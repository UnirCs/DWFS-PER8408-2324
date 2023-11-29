const api = "https://api.chucknorris.io/jokes/random";
    function chuck(){ fetch(api).then((response)=>{
    return response.json();
}).then((data)=> {
    document.getElementById("respuesta").innerHTML = data.value;
})
}