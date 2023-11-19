window.onload = function () {

    //En este momento la pagina ha cargado completamente (HTML, CSS, imagenes...)
    alert("La pagina ha cargado.");

    //Obtenemos el primer elemento de tipo button y le añadimos texto y accion.
    let button = document.querySelector('button');
    button.innerHTML = "Hazme click";
    button.onclick = () => {
        button.innerHTML = "Desactivado";
        button.disabled = true;
    }

    //Creamos un nuevo elemento button y lo incluimos dentro de article
    let button2 = document.createElement('button');
    button2.innerHTML = "Boton 2";
    document.getElementById("articulo").appendChild(button2);

    //Eliminamos el primer parrafo
    document.getElementById("primerParrafo").remove();


    //Event bubbling: Eventos que se ven.
    //Se traera todos los elementos li que se tengan en el codigo.
    document.querySelectorAll("li").forEach(element => {
        element.addEventListener('click', () => {
            alert("Click en Li")
        })
    });
    //Se traera todos los elementos li que se tengan en el codigo.

    document.querySelectorAll("ul").forEach(element => {
        element.addEventListener('click', () => {
            alert("Click en Ul")
        })
    });
    //Se traera todos los elementos li que se tengan en el codigo.

    document.getElementById("articulo").addEventListener('click', (event) => {
            alert("Click en Article")
            event.stopPropagation();
        }
    );
    //Se traera todos los elementos li que se tengan en el codigo.

    document.body.addEventListener('click', () => {
            alert("Click en Body")
        }
    );

    //Mostramos todos los hijos del body
    console.log(document.body.childNodes);
    console.log(document.body.children);

}