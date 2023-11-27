# Programación orientada a componentes con React

## 1. Objetivo
El objetivo de este ejercicio es comenzar a familiarizarnos con React. Crearemos un nuevo proyecto que contendrá toda la implementación del FrontEnd de un cine.
En algún momento, por supuesto, tendremos que incluir toda la lógica y diseño de gestión de butacas que ya hemos implementado hasta ahora.

En este ejercicio nos centraremos en realizar una vista orientada a componentes.

## 2. Instrucciones
Crearemos una vista para nuestro FrontEnd dentro de un archivo que puede llamarse ``movies.js``.

- Crearemos un componente funcional ``Header`` que contendrá el banner que querremos mostrar en todas las páginas.
- Crearemos un componente funcional ``Footer`` que contendrá el pie que querremos mostrar en todas las páginas.
- Crearemos un componente funcional ``MovieList`` que contendrá la lista de películas que queremos mostrar en la página principal.
- Crearemos un componente funcional ``Movie`` que contendrá la información de una película en concreto. A saber:
    - Título.
    - Imagen (de Internet o en local, lo que prefieras).
    - Sinopsis.
    - Duración.
    - Género.
    - Puntuación.
    - Botón para ir a la página de selección de asientos (botón sin efecto por el momento).
- Las diferentes ocurrencias de ``Movie`` se generarán a partir de un array de objetos que contendrá la información de las películas en el componente ``MovieList``.
