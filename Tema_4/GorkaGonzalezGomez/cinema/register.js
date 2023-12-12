document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('fullName').addEventListener('change', validateFullName);
    document.getElementById('username').addEventListener('change', validateUsername);
    document.getElementById('password').addEventListener('change', validatePassword);
    document.getElementById('confirmPassword').addEventListener('change', validateConfirmPassword);
    document.getElementById('email').addEventListener('change', validateEmail);
});

const createErrorMessage = (id, message) => {
    let existingMessage = document.getElementById(id + 'Error');
    if (!existingMessage) {
        let errorMessage = document.createElement('p');
        errorMessage.id = id + 'Error';
        errorMessage.textContent = message;
        errorMessage.classList.add('error');
        document.getElementById(id).insertAdjacentElement('afterend', errorMessage);
    } else {
        removeErrorMessage('fullName');
    }
};

const removeErrorMessage = (id) => {
    let existingMessage = document.getElementById(id + 'Error');
    if (existingMessage) {
        existingMessage.remove();
    }
};

const validateFullName = () => {
    let fullName = document.getElementById('fullName').value;
    if (fullName.trim === '') {
        createErrorMessage('fullName', 'El nombre y apellidos son obligatorios. ');
    } else {
        removeErrorMessage('fullName');
    }
};

const validateUsername = () => {
    let username = document.getElementById('username').value;
    if (username.trim() === '') {
        createErrorMessage('username', 'El nombre de usuario es obligatorio.')
    } else {
        removeErrorMessage('username');
    }
}

const validatePassword = () => {
    let password = document.getElementById('password').value;
    let passwordRegex = /^[A-Za-z0-9]{8,}$/;
    if (!passwordRegex.test(password)) {
        createErrorMessage('password', 'La contraseña debe tener mínimo 8 caracteres y contener números y letras.');
    } else {
        removeErrorMessage('password');
    }
}

const validateConfirmPassword = () => {
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        createErrorMessage('confirmPassword', 'Las contraseñas no coinciden.');
    } else {
        removeErrorMessage('confirmPassword');
    }
}

const validateEmail = () => {
    let email = document.getElementById('email').value;
    if (!email.includes('@') || !email.includes('.')) {
        createErrorMessage('email', 'Por favor, introduce un email válido.');
    } else {
        removeErrorMessage('email');
    }
}

document.getElementById('userForm').addEventListener('submit', (event) => {
   event.preventDefault();

   validateFullName();
   validateUsername();
   validatePassword();
   validateConfirmPassword();
   validateEmail();

   let errorMessages = document.querySelectorAll('form p') ;
   if (errorMessages.length === 0) {
       window.location.href = './cinema.html'
   } else {
       alert('Por favor, corrija los errores antes de enviar el formulario.');
   }
});