


function validateEmail(email) {
    let emailRegex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ ;
    return emailRegex.test(email);

}

function validateLenPasswd(pass) {
    return /^.{8,}$/.test(pass);
}

function validateNameSurname(text) {
    return /^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ]+(?: [a-zA-ZáéíóúüñÁÉÍÓÚÜÑ]+)*$/.test(text);
}

function validateUsername(text) {
    return /^[a-zA-Z0-9_-]{3,16}$/.test(text);
}
document.addEventListener("DOMContentLoaded", ()=>{
    let nameSurnameCheck =false;
    let usernameCheck =false;
    let passwdCheck =false;
    let confirmPasswdCheck =false;
    let emailCheck =false;

    let issuedEmailMsg=false;
    let firstPassMsg = false
    let samePassMsg=false

    let confirmPasswd = document.getElementById('passwordConfirm')
    confirmPasswd.disabled = true

    let emailInput = document.getElementById("email");

    emailInput.addEventListener("change", (even)=>
    {
        event.preventDefault()
        emailCheck = false
        let email = document.getElementById('email')

        let isValid = validateEmail(event.target.value)
        let contentedEmail = document.getElementById('emailContainer')

        if(!isValid){
            email.classList.remove("successBorder")
            email.classList.add("errorBorder")

            if(!issuedEmailMsg){

                let errorMessage = document.createElement("h5")
                errorMessage.textContent = "El email no es válido."
                errorMessage.classList.add("error")
                errorMessage.id = "errorEmail"

                contentedEmail.appendChild(errorMessage)
                contentedEmail.insertBefore(emailInput, errorMessage)
                issuedEmailMsg=true

            }
        }else{
            let errorEmail = document.getElementById('errorEmail')
            if(contentedEmail.contains(errorEmail) && errorEmail){
                contentedEmail.removeChild(errorEmail)
                issuedEmailMsg=false
            }
            email.classList.add("successBorder")
            email.classList.remove("errorBorder")
            emailCheck = true


        }


    })



    let passInput = document.getElementById("password");

    passInput.addEventListener("change", (event)=>{
        event.preventDefault()
        let fpasscontainer=document.getElementById("firstpass")
        passwdCheck = false

        if(!validateLenPasswd(event.target.value))
        {
            passInput.classList.remove("successBorder")
            passInput.classList.add("errorBorder")

            let errorMessage = document.createElement("h5")
            errorMessage.textContent = "Constraseña muy corta."
            errorMessage.classList.add("error")
            errorMessage.id = "errorLenPass"
            if(!firstPassMsg){
                fpasscontainer.appendChild(errorMessage)
                fpasscontainer.insertBefore(passInput, errorMessage)
                firstPassMsg=true
                let confirmPasswd = document.getElementById('passwordConfirm')
                confirmPasswd.disabled = true
            }
        }else
        {
            let errorLenPass = document.getElementById('errorLenPass')
            if(fpasscontainer.contains(errorLenPass) && errorLenPass){
                fpasscontainer.removeChild(errorLenPass)
                firstPassMsg=false
            }
            let confirmPasswd = document.getElementById('passwordConfirm')
            confirmPasswd.disabled = false
            passInput.classList.add("successBorder")
            passInput.classList.remove("errorBorder")
            passwdCheck = true

        }


    })


    let confirmPassInput = document.getElementById("passwordConfirm");

    confirmPassInput.addEventListener("change",(event)=>
    {
        event.preventDefault()
        let fpasscontainer=document.getElementById("confirmpass")
        confirmPasswdCheck = false

        if(passInput.value !== event.target.value)
        {
            passInput.classList.remove("successBorder")
            confirmPassInput.classList.remove("successBorder")
            passInput.classList.add("errorBorder")
            confirmPassInput.classList.add("errorBorder")
            if(!samePassMsg){

                let confirmerrorMessage = document.createElement("h5")
                confirmerrorMessage.textContent = "Constraseñas distintas."
                confirmerrorMessage.classList.add("error")
                confirmerrorMessage.id = "errorSamePass"
                fpasscontainer.appendChild(confirmerrorMessage)
                fpasscontainer.insertBefore(confirmPassInput, confirmerrorMessage)

                samePassMsg=true
            }
        }else
        {
            let errorSamePass = document.getElementById('errorSamePass')
            if(fpasscontainer.contains(errorSamePass) && errorSamePass){
                fpasscontainer.removeChild(errorSamePass)
                samePassMsg=false
            }
            passInput.classList.add("successBorder")
            confirmPassInput.classList.add("successBorder")
            confirmPasswdCheck = true

        }

    })

    let nameInput = document.getElementById("nameAndSurname");

    nameInput.addEventListener("change", (event)=>
    {
        nameSurnameCheck = false
        if(validateNameSurname(event.target.value.trim()))
        {
            nameSurnameCheck = true

            nameInput.classList.add("successBorder")
            nameInput.classList.remove("errorBorder")
        }else
        {
            nameInput.classList.remove("successBorder")
            nameInput.classList.add("errorBorder")
        }
    })

    let usernameInput = document.getElementById("username");

    usernameInput.addEventListener("change", (event)=>
    {
        usernameCheck = false
        if(validateUsername(event.target.value.trim()))
        {
            usernameCheck = true

            usernameInput.classList.add("successBorder")
            usernameInput.classList.remove("errorBorder")
        }else
        {
            usernameInput.classList.remove("successBorder")
            usernameInput.classList.add("errorBorder")
        }
    })


    let submit = document.getElementById("submitButton");

    submit.addEventListener("click", (event)=>
    {
        event.preventDefault()
        if(usernameCheck && nameSurnameCheck && emailCheck && passwdCheck && confirmPasswdCheck)
        {
            ///window.location.replace(".\\index.html") Solo si no es local
            window.location.href = ".\\index.html"
        }
    })


    let blackModeSwitch = document.getElementById("blackMode")

    blackModeSwitch.addEventListener("change",(event)=>{
        if(event.target.checked)
        {
            document.body.classList.add("darkBody")
            document.querySelector(".card").classList.add("darkCard")
            document.querySelectorAll('label').forEach((entry)=>
            {
                entry.classList.add("darkFont")
            })
            document.querySelectorAll('input').forEach((entry)=>
            {
                entry.classList.add("darkFont")
            })
            document.getElementById("submitButton").classList.remove("btn-primary")
            document.getElementById("submitButton").classList.add("btn-dark")

            document.getElementById("darkIcon").classList.remove('bi-brightness-high-fill')
            document.getElementById("darkIcon").classList.add('bi-moon-stars-fill')


        }else{
            document.body.classList.remove("darkBody")
            document.querySelector(".card").classList.remove("darkCard")

            document.querySelectorAll('label').forEach((entry)=>
            {
                entry.classList.remove("darkFont")
            })
            document.querySelectorAll('input').forEach((entry)=>
            {
                entry.classList.remove("darkFont")
            })
            document.getElementById("submitButton").classList.remove("btn-dark")
            document.getElementById("submitButton").classList.add("btn-primary")

            document.getElementById("darkIcon").classList.remove('bi-moon-stars-fill')
            document.getElementById("darkIcon").classList.add('bi-brightness-high-fill')
        }
    })
})