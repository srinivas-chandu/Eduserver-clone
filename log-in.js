var username = document.forms['form']['username'];
var password = document.forms['form']['password'];

localStorage.setItem('username', username.value);

var error = document.getElementById('error');

username.addEventListener('textInput', username_verify);
password.addEventListener('textInput', password_verify);

function validated(){
    if (username.value.length < 8 || password.value.length < 6){
        error.style.display = "block";
        return false;
    }
}

function username_verify(){
    if (username.value.length >= 8){
        error.style.display = "none";
        return true;
    }
}
function password_verify(){
    if (password.value.length >= 5){
        error.style.display = "none";
        return true;
    }
}