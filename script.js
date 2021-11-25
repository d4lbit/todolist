var input = document.querySelector("#write-input");
var button = document.querySelector("#add-item");
var list = document.querySelector("ol");


// adds elements to list
button.addEventListener("click", addItem)

function addItem() {
    if (input.value === "") {
        alert("You should write your To-Do before adding it.")
    } else {
       var li = document.createElement("li");
       li.setAttribute('id', 'item')
       li.appendChild(document.createTextNode(input.value));
       list.appendChild(li);

       // adds checkbox
        var doneTask = document.createElement("input");
        doneTask.setAttribute("type", "checkbox");
        doneTask.className = "checkbox";
        li.prepend(doneTask);

       // deletes todo
       var deleteItem = document.createElement("a");
       deleteItem.className = "delete-todo";
       deleteItem.innerHTML = "<p>delete</p>";
       li.appendChild(deleteItem);

       // clears input after item has been added
       input.value = "";
    }
}


// deletes to do
list.addEventListener("click", deleteToDo);

function deleteToDo(x){
if (x.target.parentElement.classList.contains("delete-todo")) {
    x.target.parentElement.parentElement.remove();
}
}