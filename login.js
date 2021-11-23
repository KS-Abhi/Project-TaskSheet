function validate(){
    let userName = document.getElementById("userName");
    let password = document.getElementById("password");
    let error = document.getElementById("error");
    let error1 = document.getElementById("error1");

    if(userName.value == "" || password.value == "")
    {
        if(userName.value == "")
        {
            error.innerText = "Enter Username";
            error.style.color = "red";
        }

        if(password.value == "")
        {
            error1.innerText = "Enter Password";
            error1.style.color = "red";
        }
            return false;
    }

    else
    {
        let
    }
}