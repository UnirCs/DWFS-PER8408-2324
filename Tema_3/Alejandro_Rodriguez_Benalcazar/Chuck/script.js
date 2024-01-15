function getChucK() {
    let url = "https://api.chucknorris.io/jokes/random";

    fetch(url)
        .then(response => response.json())
        .then(json => document.getElementById("chiste").innerHTML = json.value);
}

