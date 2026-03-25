const inputField = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");
const listContainer = document.getElementById("List");

const existingItems = document.querySelectorAll(".todo-item");
/* 
existingItems  document.querySelectorAll(".todo-item")
existingItems = [li, li, li] nodeList

checkBox = item.quearySelector(checkbox) -> gets you access to checkbox

*/

existingItems.forEach(item => {
    const checkBox = item.querySelector(".checkbox");
    const span = item.querySelector(".todo-text");
    const deleteButton = item.querySelector(".btn-delete");

    attachToggleLogic(checkBox, span);
    deleteButton.addEventListener("click", ()=>{item.remove(); });
});

function attachToggleLogic(checkBox, textSpan){
    checkBox.addEventListener("change", ()=>{
        textSpan.classList.toggle('strike', checkBox.checked);// что значит classList ?
    });
}

// Main part:
addButton.addEventListener("click",() =>{
    const taskText = inputField.value.trim(); 

    if(taskText !== ""){
        createTask(taskText);
        inputField.value = "";
    }else{
        alert("enter task to do");
    }

} );

function createTask(text){
    //create elements
    const li = document.createElement("li");
    const checkBox = document.createElement("input");
    const span = document.createElement("span");
    const btn = document.createElement("button");

    //confifure class and content
    li.className = "todo-item";
    checkBox.type = "checkbox";
    checkBox.className = "checkbox";

    span.textContent = text;
    span.className = "todo-text";

    btn.textContent = "🗑";
    btn.className = "btn-delete";

    attachToggleLogic(checkBox, span);
    btn.addEventListener('click', () => { li.remove(); });

    //create tree
    li.appendChild(checkBox);
    li.appendChild(span);
    li.appendChild(btn);
    listContainer.appendChild(li);
}