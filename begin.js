// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function(){
     
//     if(this.readyState==4&&this.status==200){
//         var response = JSON.parse(this.responseText);
//         var items = "<table id='itemTbl'>";

//         for(let i=0; i<response.length;i++){
//             items=items+`<tr><td>`
//             if(response[i].completed===true){
//                 items=items+`<input type='checkbox'id='chkBx${i}'></td>
//                 <td><label id='lbl${i}'>${response[i].title}</label></td>`;
//             } 
//             else{
//                 items=items+`<input type='checkbox' id='chkBx${i}' onclick='chkItem(this)'></td>
//                 <td><label id='lbl${i}''>${response[i].title}</label></td>`
//             }  
//             items=items+`</td></tr>`;    
//          }
//          items=items+`</table>`

//          document.getElementById("itemList").innerHTML=items;
//     }
// }

// xhttp.open('GET','https://jsonplaceholder.typicode.com/todos', true);
// xhttp.send();

function todoList() {
    var xhttp = new XMLHttpRequest();
  
    xhttp.onreadystatechange = function () {
  
      if (this.readyState == 4 && this.status == 200) {
  
        var response = JSON.parse(this.responseText)
  
        for (i = 0; i <= response.length; i++) {
  
          var data =
            `<li class="list-group-item d-flex"  style="overflow-y:auto">
                        <div class="d-flex align-items-center">
                          <input class="form-check-input me-2" type="checkbox" value="" aria-label="..." id="cheq" onclick="countCheckBox()"/>
                          ${response[i].id}
                          ${response[i].title}
                        </div>
              </li>`
          document.getElementById("itemList").innerHTML += data;
        }
      }
    }
  
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true)
    xhttp.send();
  }
  
  
  function countCheckBox() {
  
    var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  
    if (checkboxes.length == 5) {
      alert(' Congrats. 5 Tasks have been Successfully Completed');
    }
  
  }
  
  
  function logout(){
    window.location = "login.html";
  }
  
  window.addEventListener("load", todoList);