document.addEventListener("DOMContentLoaded", () => {
    // Asignar manejadores de eventos a los campos del formulario
    document.getElementById("fullName").addEventListener("change", validateFullName);
    document.getElementById("username").addEventListener("change", validateUsername);
    document.getElementById("password").addEventListener("change", validatePassword);
    document.getElementById("confirmPassword").addEventListener("change", validateConfirmPassword);
    document.getElementById("email").addEventListener("change", validateEmail);
});

const createErrorMessage = (id, message) => {
    let existingMessage = document.getElementById(id + "Error");
    if(!existingMessage){
        let errorMessage = document.createElement("p");
        errorMessage.id=id + "Error";
        errorMessage.textContent = message;
        errorMessage.classList.add("error");
        document.getElementById(id).insertAdjacentElement("afterend",errorMessage);
    }
};

const removeErrorMessage = (id) =>{
    let existingMessage = document.getElementById(id + "Error");
    if(existingMessage) {
        existingMessage.remove();
    }
}

const validateFullName = () =>{
    let fullName = document.getElementById("fullName").value;
    if (fullName.trim() === "") {
        createErrorMessage("fullName", "El nombre y apellidos son obligatorios.");
    } else {
        removeErrorMessage("fullName");
    }
}

const validateUsername = () =>{
    let fullName = document.getElementById("fullName").value;
    if (fullName.trim() === "") {
        createErrorMessage("username", "El nombre y apellidos son obligatorios.");
    } else {
        removeErrorMessage("username");
    }
}

const validatePassword = () => {
    let password = document.getElementById("password").value;
    let passwordRegex = /^[A-Za-z0-9]{8,}$/;
    if (!passwordRegex.test(password)) {
        createErrorMessage("password", "La contraseña debe tener mínimo 8 caracteres y contener números y letras.");
    } else {
        removeErrorMessage("password");
    }
};

const validateConfirmPassword = () => {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    if (password !== confirmPassword) {
        createErrorMessage("confirmPassword", "Las contraseñas no coinciden.");
    } else {
        removeErrorMessage("confirmPassword");
    }
};

const validateEmail = () => {
    let email = document.getElementById("email").value;
    if (!email.includes("@") || !email.includes(".")) {
        createErrorMessage("email", "Por favor, introduce un email válido.");
    } else {
        removeErrorMessage("email");
    }
};

document.getElementById("userForm").addEventListener("submit", (event) => {
    event.preventDefault();

    // Ejecutar todas las validaciones antes de enviar el formulario
    validateFullName();
    validateUsername();
    validatePassword();
    validateConfirmPassword();
    validateEmail();

    // Comprobar si hay mensajes de error
    let errorMessages = document.querySelectorAll("form p");
    if (errorMessages.length === 0) {
        // No hay errores, se puede procesar el formulario
        alert("Formulario enviado con éxito!");
        window.location.href="cinema.html";
    } else {
        // Hay errores, se informa al usuario
        alert("Por favor, corrija los errores antes de enviar el formulario.");
    }
});