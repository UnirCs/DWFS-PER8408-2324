let saludo = () => {
    console.log("Hello there!");
}
saludo.from = "Obi-Wan Kenobi";

console.log(saludo.name);
console.log(saludo.from);
saludo();

saludo = () => {
    console.log("Hello there from Tatooine!")
}
saludo();


/**
 * Callbacks
 * 
 * Un callback es algo tan simple como pasar como argumento a una función otra función
 * Esto puede parecer una locura en algunos lenguajes de programacion
 * En JS las funciones SON OBJETOS. Si las definimos con modificadores, se recomienda usar const.
 */
const isPar = (n, parCallBack, imparCallback) => {
    if (n%2 === 0) {
        parCallBack();
    } else {
        imparCallback();
    }
}
isPar(4, () => console.log("El numero es par"));

const parCallBack = () => console.log("El numero es par");
const imparCallBack = () => console.log("El numero es impar");

isPar(6, parCallBack, imparCallBack);
isPar(7, parCallBack, imparCallBack);
