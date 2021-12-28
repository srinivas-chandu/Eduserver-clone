// validation form Inputs
var Username = document.forms['form']['Username'];
var Password = document.forms['form']['Password'];

var Username_error = document.getElementById('Username-error');
var Password_error = document.getElementById('password-error');

Username.addEventListener('textInput', Username_Verify)
Password.addEventListener('textInput', Password_Verify)

function validated(){
    if (Username.value.length < 9){
        Username_error.style.display = "block";
        Username.focus();
        return false;
    }
    if (Password.value.length < 4){
        Password_error.style.display = "block";
        Password.focus();
        return false;
    }
}

function Username_Verify(){
    if (Username.value.length >= 10){
        Username_error.style.display = "none";
        return true;
    }
    if (Password.value.length >= 5){
        Password_error.style.display = "none";
        return true;
    }
}