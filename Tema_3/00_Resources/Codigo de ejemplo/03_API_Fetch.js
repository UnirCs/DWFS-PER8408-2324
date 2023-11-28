/**
 * Es muy habitual usar Promesas con peticiones HTTP con alguna libreria
 * que permita hacerlas como por ejemplo:
 * API Fetch
 * Axios
 * 
 * Usamos de prueba https://catfact.ninja/
 */

let setOfFacts = new Set();
let url = "https://catfact.ninja/fact";

for (let i = 0; i < 10; i++) {
    fetch(url)
        .then(response => response.json())
        .then(json => setOfFacts.add(json.fact));
}
console.log("Cat Facts: " + Array.from(setOfFacts.values()));

console.log("haciendo cosas...");
console.log("haciendo cosas...");
console.log("haciendo cosas...");

setTimeout(() => console.log("Cat Facts: " + Array.from(setOfFacts.values())), 5000);