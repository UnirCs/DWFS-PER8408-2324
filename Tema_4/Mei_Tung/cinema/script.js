// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Asignar manejadores de eventos a los campos del formulario
    document.getElementById('fullName').addEventListener('change', validateFullName);
    document.getElementById('username').addEventListener('change', validateUsername);
    document.getElementById('password').addEventListener('change', validatePassword);
    document.getElementById('confirmPassword').addEventListener('change', validateConfirmPassword);
    document.getElementById('email').addEventListener('change', validateEmail);
});

// Crear un mensaje de error y mostrarlo bajo el campo correspondiente
const createErrorMessage = (id, message) => {
    document.getElementById(id).classList.add("is-invalid");
    let existingMessage = document.getElementById(id + 'Error');
    if (!existingMessage) {
        let errorMessage = document.createElement('span');
        errorMessage.id = id + 'Error';
        errorMessage.textContent = message;
        errorMessage.classList.add('invalid-feedback');
        document.getElementById(id).insertAdjacentElement('afterend', errorMessage);
    }
};

// Eliminar el mensaje de error si ya no es necesario
const removeErrorMessage = (id) => {
    document.getElementById(id).classList.remove("is-invalid");
    let existingMessage = document.getElementById(id + 'Error');
    if (existingMessage) {
        existingMessage.remove();
    }
};

// Validar el campo de nombre completo
const validateFullName = () => {
    let fullName = document.getElementById('fullName');
    if (fullName.value.trim() === '') {
        createErrorMessage('fullName', 'El nombre y apellidos son obligatorios.');
    } else {
        removeErrorMessage('fullName');
    }
};

// Validar el campo de nombre de usuario
const validateUsername = () => {
    let username = document.getElementById('username');
    if (username.value.trim() === '') {
        createErrorMessage('username', 'El nombre de usuario es obligatorio.');
    } else {
        removeErrorMessage('username');
    }
};

// Validar el campo de contraseña
const validatePassword = () => {
    let password = document.getElementById('password').value;
    let passwordRegex = /^[A-Za-z0-9]{8,}$/;
    if (!passwordRegex.test(password)) {
        createErrorMessage('password', 'La contraseña debe tener mínimo 8 caracteres y contener números y letras.');
    } else {
        removeErrorMessage('password');
    }
};

// Validar el campo de confirmación de contraseña
const validateConfirmPassword = () => {
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        createErrorMessage('confirmPassword', 'Las contraseñas no coinciden.');
    } else {
        removeErrorMessage('confirmPassword');
    }
};

// Validar el campo de email
const validateEmail = () => {
    let email = document.getElementById('email');
    if (!email.value.includes('@') || !email.value.includes('.')) {
        createErrorMessage('email', 'Por favor, introduce un email válido.');
    } else {
        removeErrorMessage('email');
    }
};

// Manejar el evento de envío del formulario
document.getElementById('userForm').addEventListener('submit', (event) => {
    event.preventDefault();

    // Ejecutar todas las validaciones antes de enviar el formulario
    validateFullName();
    validateUsername();
    validatePassword();
    validateConfirmPassword();
    validateEmail();

    // Comprobar si hay mensajes de error
    let errorMessages = document.querySelectorAll('form .invalid-feedback');
    if (errorMessages.length === 0) {
        // No hay errores, se puede procesar el formulario
        // Evitar regresar a la página de registro
        location.replace("cinema.html");
    }
});