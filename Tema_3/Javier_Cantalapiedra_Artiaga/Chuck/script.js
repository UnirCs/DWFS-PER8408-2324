const getChiste = () => {
    fetch("https://api.chucknorris.io/jokes/random")
    .then(response => response.json())
    .then(json => document.getElementById("chiste").innerHTML=json.value)
}