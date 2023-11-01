
const forms = document.getElementById('form')

const text = document.getElementById('validator-txt')

const email1 = document.getElementById('email-input')
const email2 = document.getElementById('confirm-email-input')



function emailValidators() {
    text.innerText = email1.value === email2.value ? "Emails are a match" : "Please make sure both emails match";
}

email1.addEventListener('keyup', () => {
    if (email1.value.length != 0) emailValidators();
})

email2.addEventListener('keyup', () => {
    if (email2.value.length != 0) emailValidators();
})