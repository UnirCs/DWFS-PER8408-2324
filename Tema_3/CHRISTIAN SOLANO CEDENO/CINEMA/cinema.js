document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('reservation-form');
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let selectedSeats = [];

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            const seat = this.id;
            if (this.checked) {
                selectedSeats.push(seat);
            } else {
                const index = selectedSeats.indexOf(seat);
                if (index !== -1) {
                    selectedSeats.splice(index, 1);
                }
            }
        });
    });

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const numAsientos = parseInt(document.getElementById('num-asientos').value);
        if (numAsientos > selectedSeats.length) {
            alert('Selecciona al menos ' + numAsientos + ' asientos.');
        } else {
            // Guardar los asientos seleccionados en caché o realizar otra acción aquí
            alert('Asientos reservados: ' + selectedSeats.slice(0, numAsientos).join(', '));
            
            // Bloquear la selección de los asientos reservados
            selectedSeats.forEach(seat => {
                document.getElementById(seat).disabled = true;
                document.getElementById(seat).classList.add('reserved');
            });
            
            // Borrar el contenido del campo de entrada de "Número de asientos"
            document.getElementById('num-asientos').value = '';
        }
    });
    
    // Calcular el número de checkboxes seleccionados
    function countSelectedCheckboxes() {
        return document.querySelectorAll('input[type="checkbox"]:checked').length;
    }
});
