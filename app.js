const form = document.getElementById("form")
const userName = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const passwordCheck = document.getElementById("passwordCheck")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    checkInputs()
})

const checkInputs = () => {
    const userNameValue = userName.value.trim()//removes leading and trailing whitespace    
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const passwordCheckValue = passwordCheck.value.trim()

    if(userNameValue === ""){        
        setErrorFor(userName, "Username cannot be blank!")
    }else{        
        setSuccessFor(userName, "Username is available!")
    }

    if(emailValue === ""){
        setErrorFor(email, "Email cannot be blank!")
    }else if(!isEmail(emailValue)){
        setErrorFor(email, "Email is not valid")
    }else{
        setSuccessFor(email, "Great")
    }

    if(passwordValue === ""){
        setErrorFor(password, "Password cannot be blank!")
    }else if(!passValidation(passwordValue)){
        setErrorFor(password, "Password must be 8 char min")
    }else{
        setSuccessFor(password, "Great!")
    }

    if(passwordCheckValue === ""){
        setErrorFor(passwordCheck, "Passwords cannot be blank")
    }else if(passwordCheckValue !== passwordValue){
        setErrorFor(passwordCheck, "Passwords must match!")
    }else{
        setSuccessFor(passwordCheck, "Great!")
    }
}

const setErrorFor = (input, message) => {
    const formControl = input.parentElement
    const smallText = formControl.querySelector("small")

    smallText.innerText = message
    formControl.className = "form-control error"
}

const setSuccessFor = (input, message) => {
    const formControl = input.parentElement
    const smallText = formControl.querySelector("small")

    smallText.innerText = message
    formControl.className = "form-control success"
}

const isEmail = (email) => {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}
const passValidation = (pass) => {   
    return /.{8,}$/.test(pass)
}

