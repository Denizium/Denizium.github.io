// Создайте кнопку "Закрыть" и добавьте ее к каждому элементу списка
let myNodelist = document.getElementsByTagName("LI");
let i;
for (i = 0; i < myNodelist.length; i++) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);

    myNodelist[i].appendChild(span);

}

// Нажмите на кнопку "Закрыть", чтобы скрыть текущий элемент списка
let close = document.getElementsByClassName("close");
i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        let div = this.parentElement;
        div.style.display = "none";
    }
}

// Добавить "checked" символ при нажатии на элемент списка
let list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

// Создайте новый элемент списка при нажатии на кнопку "Добавить"
function newElement() {
    let li = document.createElement("li");
    
    /*EDIT*/
    let inputValue = document.createTextNode(document.getElementById("new_todo").value);
    let t = document.createElement("p");
    t.appendChild(inputValue);
    t.contentEditable = "true";
    li.appendChild(t);
    /*END EDIT*/
    if (inputValue === '') {
        alert("Ви маєте щось написати!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("new_todo").value = "";

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}
// function createTodoApp(container, title, todoItemsDefault, key){
//     let todoAppTitle = createAppTitle(title)
//     let todoItemForm = createTodoItemForm()
//     let todoList = createTodoList()

//     if (localStorage.getItem(key) !== null) {
//     let todoItem = createTodoItem(JSON.parse(localStorage.getItem(key)))
//     todoList.append(todoItem)
//     todoItem.doneButton.addEventListener('click', function(){
//         todoItem.item.classList.toggle('list-group-item-success')
//     })
//     todoItem.deleteButton.addEventListener('click', function(){
//         if(confirm('Вы уверены?')){
//             todoItem.item.remove()
//         }
//     })
//   }

// inputValue.form.addEventListener('submit', function(e){
//     // чтобы страница не перезагружалась
//     e.preventDefault();
//     if(!inputValue.input.value){
//          return 
//     }
    
//     let todoItem = createTodoItem(inputValue.input.value)
//     localStorage.setItem(key, JSON.stringify(inputValue.input.value))
// })
// localStorage.setItem('li', 'inputValue');
