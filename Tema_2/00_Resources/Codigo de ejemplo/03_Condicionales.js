//OPERACIONES CON BOOLEANOS BASICAS - AND Y OR

let verdadero = true;
let falso = false;
console.log(verdadero && verdadero); //AND
console.log(verdadero && falso);
console.log(falso && verdadero);
console.log(falso && falso);

console.log(verdadero || verdadero); //OR
console.log(verdadero || falso);
console.log(falso || verdadero);
console.log(falso || falso);

/*
5 - APROBADO
6 - APROBADO
7, 8 - NOTABLE
9 - SOBRESALIENTE
10 - MH
 */

let nota = 4;
let resultado;

if(nota <= 0 && nota <= 10) {
    if(nota < 5) {
        resultado = "SUSPENSO";
    } else {

        if(nota >= 5 && nota < 7) {
            resultado = "APROBADO";
        } else if(nota >= 7 && nota < 9) {
            resultado = "NOTABLE";
        } else if(nota >= 9 && nota < 10) {
            resultado = "SOBRESALIENTE";
        } else {
            resultado = "MH";
        }
    }
} else {
    resultado = "NOTA INVALIDA";
}

let textoCorreo;

if(resultado === "APROBADO" || resultado === "NOTABLE" ||resultado === "SOBRESALIENTE" ||resultado === "MH") {
    textoCorreo = "Enhorabuena has aprobado";
} else {
    textoCorreo = "Hay que estudiar mas";
}

console.log("variable var: " + variableDentroDeBloque);


if(resultado !== "SUSPENSO" || resultado !== "NOTA INVALIDA") {

    var variableDentroDeBloque = 5;
    textoCorreo = "Enhorabuena has aprobado";
} else {
    textoCorreo = "Hay que estudiar mas";
}

console.log("variable var: " + variableDentroDeBloque);
console.log(resultado);

console.log("----")
let dos = 2;
let dosCadena = "2";
console.log(dos === dosCadena);
console.log(dos == dosCadena);