function validate(){
    let userName = document.getElementById("userName");
    let password = document.getElementById("password");
    let error = document.getElementById("error");
    let error1 = document.getElementById("error1");
    
    if(userName.value == "" || password.value == ""){
        if(userName.value == ""){
            error.innerText = "Enter Username";
            error.style.color = "red";
        }

        if(password.value == "") {
            error1.innerText = "Enter Password";
            error1.style.color = "red";
        }
            return false;
    }
}
// User authentication using callback
function loginUsr(user,pwd,callBack){
    const strUser="admin";
    let admin,password;
    if(user===strUser){
        admin=true;
    }
    else{
        document.getElementById("error").innertext="Username incorrect";
        admin=false;
    }
    password=callBack(pwd);
    if(admin&&password)
    return true;
    else
    return false;
}
// Password authentication using callback
function usrPwd(pwd){
      const strPwd=12345;
      if(pwd==strPwd){
        return true;
      }
   else{
    document.getElementById("error1").innerText="Incorrect password";
    return false;
   }
}
function clrUser(){
    document.getElementById("error").innerText="";
}
function clrPwd(){
    document.getElementById("error1").innerText="";
}
