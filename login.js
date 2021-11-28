function validate(){
    let userName = document.getElementById("usrName");
    let password = document.getElementById("password");
    let usrError = document.getElementById("usrError");
    let pwdError = document.getElementById("pwdError");
    
    if(userName.value == "" || password.value == ""){
        if(userName.value == ""){
            usrError.innerText = "Enter Username";
            usrError.style.color = "red";
        }

        if(password.value == "") {
            pwdError.innerText = "Enter Password";
            pwdError.style.color = "red";
        }
            return false;
    }
}