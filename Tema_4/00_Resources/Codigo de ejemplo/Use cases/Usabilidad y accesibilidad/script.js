/**
 * Dark mode
 * Obtenemos el elemento con el id darkSwitch.
 * Añadimos un evento change al elemento. Este evento es el mismo que onChange en HTML.
 */
document.getElementById('darkSwitch').addEventListener('change', () => toggleDarkMode());

/**
 * Text size
 * Obtenemos el elemento con el id textSize.
 * Añadimos un evento change al elemento. Este evento es el mismo que onChange en HTML.
 */
document.getElementById('textSize').addEventListener('change', function() {
    modifyFontSize(this.value); // this.value es el valor del elemento que ha disparado el evento.
});


const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode'); // Añade o elimina la clase dark-mode de la lista de clases que se ecuentran en el body.
}

const modifyFontSize = (size) => {
    document.body.classList.remove('text-small', 'text-medium', 'text-large'); // Elimina las clases text-small, text-medium y text-large de la lista de clases que se ecuentran en el body.
    document.body.classList.add(size); // Añade la clase size a la lista de clases que se ecuentran en el body.
}