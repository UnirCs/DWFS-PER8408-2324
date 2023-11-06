
/**
 * Podemos crear objetos de forma literal
 * Las propiedades pueden ser de cualquier tipo (basicos, objeto)
 * 
 * Algunas propiedades pueden ser funciones o metodos y dentro de ellas podemos
 * usar this, que es una referencia al propio objeto.
 * 
 * No podemos usar this en funciones flecha.
 */
let jimmy = {
    nombre: "jimmy",
    tipo: "perro",
    raza: "Bulldog",
    edad: 3,
    sexo: "M",
    castrado: false,

    esSemental() {
        return "M" === this.sexo && !this.castrado;
    }

}
console.log(jimmy.nombre + " es un " + jimmy.tipo + " " + jimmy.raza + " de " + jimmy.edad + " años.");
console.log(jimmy.esSemental() ? "Jimmy es semental": "Jimmy ya esta castrado");


/**
 * Podemos declarar objetos a traves de clases, de forma similar a como se hace
 * en otros lenguajes de programacion
 * 
 * JS Soporta herencia pero no herencia multiple
 */
class Persona {

    constructor(n, e, p) {
        this.nombre = n;
        this.edad = e;
        this.peso = p;
    }

    birthday() {
        this.edad += 1;
    }
}

class Estudiante extends Persona {

    constructor(n, e, p, t) {
        super(n, e, p);
        this.titulacion = t;
    }

    estudiar() {
        return this.nombre + " estudia " + this.titulacion;
    }
}

let pepe = new Persona("Pepe", 17, 65);
console.log(pepe);

pepe = new Estudiante("Pepe", 17, 65, "MISSI");
console.log(pepe);
console.log(pepe.estudiar());