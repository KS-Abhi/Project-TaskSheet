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
    else{
        return validUser(userName,password,validPwd);
    }
}

function validUser(userName,password,validPwd){ 
  let user,pwd;
  if(userName.value=="admin"){
  user=true;
  }
  else{
      usrError.innerText="Invalid UserName";
      usrError.style.color="red";
      return false
  }
  pwd=validPwd(password);
  if(user&&pwd)
  return true;
  else
  return false;
}


//call backfunction test password n authenticate login
function validPwd(pwd){
    if(pwd.value==12345){
        return true;
    }

    else{
        pwdError.innerText="Invalid Password";
        pwdError.style.color="red";
    return false;
    }
} 

function clrPwd(){
    pwdError.innerText="";
}

function clrUser(){
    usrError.innerText="";
}

// function validate(){

//     let userName = document.getElementById("usrName");
//     let password = document.getElementById("password");
//     let usrError = document.getElementById("usrError");
//     let pwdError = document.getElementById("pwdError");
    
//     if(userName.value == "" || password.value == ""){
//         if(userName.value == ""){
//             usrError.innerText = "Enter Username";
//             usrError.style.color = "red";
//         }

//         if(password.value == "") {
//             pwdError.innerText = "Enter Password";
//             pwdError.style.color = "red";
//         }
//             return false;
//     }

//     else{
//         return  validUser(userName,password,validPwd);
    
//     }
    
    
// }

// function validUser(userName,password,validPwd)
// {
//     let user,pwd;
//     if(userName.value=="admin")
//     {
//         user=true;
//     }

//     else{
//         usrError.innerText="Invalid Username";
//         usrError.style.color = "red";
//         return false;
//     }

//    pwd= validPwd(password);
//    if(user&&pwd)
//    return true;
//    else
//    return false;

// }

// function validPwd(pwd)
// {
    
//     if(pwd.value==12345)
//     {
//         return true;
//     }

// else
// {
// pwdError.innerText="Invalid Password";
// pwdError.style.color = "red";
// return false;
// }
// }

// function clrPwd()
// {
//     pwdError.innerText="";
// }

// function clrUser()
// {
//     usrError.innerText="";
// }

