var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
     
    if(this.readyState==4&&this.status==200){
        var response = JSON.parse(this.responseText);
        var items = "<table id='itemTbl'>";

        for(let i=0; i<response.length;i++){
            items=items+`<tr><td>`
            if(response[i].completed===true){
                items=items+`<input type='checkbox'id='chkBx${i}'></td>
                <td><label id='lbl${i}'>${response[i].title}</label></td>`;
            } 
            else{
                items=items+`<input type='checkbox' id='chkBx${i}' onclick='chkItem(this)'></td>
                <td><label id='lbl${i}''>${response[i].title}</label></td>`
            }  
            items=items+`</td></tr>`;    
         }
         items=items+`</table>`

         document.getElementById("itemList").innerHTML=items;
    }
}

xhttp.open('GET','https://jsonplaceholder.typicode.com/todos', true);
xhttp.send();