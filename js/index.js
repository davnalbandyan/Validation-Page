let nameError = document.querySelector('#name-error');
let phoneError = document.querySelector('#phone-error');
let emailError = document.querySelector('#email-error');
let messageError = document.querySelector('#message-error');
let submitError = document.querySelector('#submit-error');
let textContent = document.getElementById("text-content");
let phoneTextContent = document.getElementById("phone-text-content");
let emailTextContent = document.getElementById("text-content-email");





function validationName(){
    let value = textContent.value;
  

    if(value.length == 0){
        nameError.innerHTML = `Name is Required`;
        return false
    }

    if(!value.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "Write full name"
        return false
    }


    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    
}



function validationPhone(){
    let phoneValue = phoneTextContent.value;

    if(phoneValue.length == 0){
        phoneError.innerHTML =  "Phone is Required"
        return false
    };

    if(!phoneValue.match(/^\d+$/
    )){
        phoneError.innerHTML = "Write number with code"
        return false
    }
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';

}



function validationEmail(){
    let emailValue = emailTextContent.value;

    if(emailValue.length == 0){
        emailError.innerHTML = "Email is Required";
        return false
    }

    if(!emailValue.includes('@')){
        emailError.innerHTML = "Write you Email addres";
        return false
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
}



function callAll(){
    textContent.addEventListener("keyup",validationName);
    phoneTextContent.addEventListener("keyup",validationPhone);
    emailTextContent.addEventListener("keyup",validationEmail);}
callAll()

