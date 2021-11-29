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
//call back user authentication
function testUser(user,pwd,callBack){
const strUser="admin";
let admin,password;
  if(user.toLowerCase()==strUser){
  admin=true;
  }
  else{
  document.getElementById("usrError").innerText="Invalid UserName";
  admin=false;
  }
  password=callBack(pwd);
  if(admin&&password)
  return true;
  else
  return false;
}


//call backfunction test password n authenticate login
function testPwd(pwd){
    const strPwd=12345;
    if(pwd==strPwd){
        return true;
    }

    else{
    document.getElementById("pwdError").innerText="Invalid Password";
    return false;
    }
} 

function clearUser(){
    document.getElementById("usrError").innerText="";
}

function clearPwd(){
    document.getElementById("pwdError").innerText="";
}

