function togglePassword() {
    var passwordField = document.getElementById("senha");
    var icon = passwordField.nextElementSibling.querySelector("i");
    if (passwordField.type === "password") {
        passwordField.type = "text";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    } else {
        passwordField.type = "password";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    }
}


const input = document.querySelector('#cpf')
input.addEventListener('keypress', () => {
    let inputLength = input.value.length
    if (inputLength == 3 || inputLength == 7) {
        input.value += '.'
    }else if (inputLength == 11) {
        input.value += '-'
    }
})