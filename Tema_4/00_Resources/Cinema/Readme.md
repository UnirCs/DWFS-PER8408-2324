# Uso del DOM

## 1. Objetivo
El objetivo de este ejercicio es trabajar con la API del DOM para modificar el contenido de una página web.

Trabajaremos con los recursos que hemos venido desarrollando hasta ahora para el ejemplo del cine. Concretamente, la página HTML de reserva de butacas, su código CSS y el archivo JavaScript que contenía el método para arrojar una sugerencia de butacas.

## 2. Instrucciones
Interconectaremos dos páginas HTML. La primera será un formulario de registro. Puedes usar el que se muestra en el código de apoyo o crear uno por tu cuenta. Si eliges la segunda opción, las validaciones que realices deben ser similares a las que se realizan en el código de apoyo. La segunda página será la que ya tenemos creada, la de reserva de asientos. Introduciremos un número de asientos a reservar y, cuando cambiemos el valor del ``input``, veremos un cambio en algunas de las butacas, pasando a estar en un estado de "preselección". Serán, por supuesto, las butacas que la función ``suggest`` ha devuelto.
Para ello, debemos:

- Utilizar el formulario de registro del código de apoyo o uno creado por ti. En el JS asociado a ese formulario incluiremos una redirección a la página de reserva de butacas. Para ello hay dos opciones, usar el método ``window.location.href`` [(aquí tienes más información sobre este método)](https://www.w3schools.com/jsref/prop_loc_href.asp) o usar el método ``window.location.replace`` [(aquí tienes más información sobre este método)](https://www.w3schools.com/jsref/met_loc_replace.asp). La diferencia entre ambos es que el primero añade una entrada en el historial del navegador, mientras que el segundo no. **¿Cuál crees que es el adecuado en este caso?**
- Modificar el archivo JS asociado a la página HTML de reserva de butacas. Deberás asignar un ``id`` a cada uno de los asientos. **Esto debe realizarse de forma dinámica (mediante el DOM)**.
- Modificar el archivo JS asociado a la página HTML de reserva de butacas. En él añadirás los listeners que consideres para que cuando se haga un cambio en el ``input`` se consiga el efecto deseado. Recuerda que tendrás que trabajar en este punto con la API del DOM y con clases CSS.
- Asegurarnos de que no hay **ninguna referencia** a código JS o CSS en las páginas HTML. Únicamente las referencias a archivos externos JS y CSS. No se aceptarán soluciones que incluyan código JS o CSS en las páginas HTML.

Recuerda depurar en el navegador para facilitar tu proceso de desarrollo.

## 3. Ejemplo de resultado

Puedes tomar como ejemplo el siguiente vídeo.

Para el Look and feel del formulario se ha usado [Materialize CSS](https://materializecss.com/). Es algo totalmente opcional, pero si no tienes experiencia en diseño es recomendable utilizar librerías como esta para agilizar el desarrollo y tener resultados profesionales.

https://github.com/UnirCs/DWFS-PER8408-2324/assets/115072043/f5e55356-5953-4e89-b975-de8227b0e269

