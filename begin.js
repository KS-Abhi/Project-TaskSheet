function todoList() {
    var xhttp = new XMLHttpRequest();
  
    xhttp.onreadystatechange = function(){
  
      if (this.readyState==4&&this.status==200){
  
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
      alert(' Congrats! 5 tasks have been successfully completed');
    }
    // else if (checkboxes.length>=5){
    //   alert('Congrats! one more task is completed')
    // }
  
  }
  
  
  function logout(){
    window.location = "login.html";
  }
  
  window.addEventListener("load", todoList);