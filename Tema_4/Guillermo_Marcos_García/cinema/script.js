//UNA VEZ SE PRODUCE EL EVENTO DomContentLoaded añado los listener a cada campo
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("fullName").addEventListener("change",validateName);
    document.getElementById("userName").addEventListener("change",validateUserName);
    document.getElementById("password").addEventListener("change",validatePassword);
    document.getElementById("confirmPassword").addEventListener("change",validateConfirmPassword);
    document.getElementById("email").addEventListener("change",validateEmail);
});

const validateName = () => {
    let fullName = document.getElementById("fullName").value;
    if(fullName.trim() === '') createErrorMessage("fullName","El nombre no puede estar vacio");
    else removeErrorMessage("fullName");

}

const validateUserName = ()  => {
    let userName = document.getElementById("userName").value;
    if(userName.length < 5){
        createErrorMessage("userName","El nombre de usuario debe contener al menos 5 caracteres");
    }else{
        removeErrorMessage("userName");
    }
}

const validatePassword = ()  => {
    let password = document.getElementById("password").value;
    if(password.length < 5){
        createErrorMessage("password","La contraseña debe contener al menos 5 caracteres");
    }else{
        removeErrorMessage("password");
    }
}

const validateConfirmPassword = ()  => {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    if(password !== confirmPassword){
        createErrorMessage("confirmPassword","Las contraseñas han de ser iguales");
    }else{
        removeErrorMessage("confirmPassword");
    }
}

const validateEmail = () => {
    let email = document.getElementById('email').value;
    if (!email.includes('@') || !email.includes('.')) {
        createErrorMessage('email', 'Por favor, introduce un email válido.');
    } else {
        removeErrorMessage('email');
    }
};

const createErrorMessage = (id,message)  => {
    let isError = document.getElementById(id + 'Error');
    if(isError === null){
        let errorMessage = document.createElement('p');
        errorMessage.id = id + 'Error';
        errorMessage.classList.add("error");
        errorMessage.textContent=message;
        document.getElementById(id).insertAdjacentElement('afterend', errorMessage);
    }
}

const removeErrorMessage = (id)  => {
    let existingMessage = document.getElementById(id + 'Error');
    if (existingMessage) {
        existingMessage.remove();
    }
};


document.getElementById('form').addEventListener('submit', (event) => {
    event.preventDefault();

    validateName();
    validateUserName();
    validatePassword();
    validateConfirmPassword();
    validateEmail();

    let errorMessages = document.querySelectorAll('form p');
    if(errorMessages.length === 0){
        window.location.replace("index.html");
    }else{
        alert ('Existen errores dentro del formulario');
    }
});