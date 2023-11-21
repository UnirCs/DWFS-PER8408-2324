function showAct(){
    let url = "https://api.chucknorris.io/jokes/random";

    fetch(url)
        .then(response => response.json())
        .then(json => document.getElementById("act").innerHTML = json.value);
}