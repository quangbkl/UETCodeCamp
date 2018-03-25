var btn = document.getElementById('add');
var  text_todo = document.getElementById('text-todo');
var mylist = document.getElementById('list');
setEmptyLocalStogare();
selectData();
btn.addEventListener('click', function () {
    addToLocalStorage(text_todo.value, false);
    selectData();
    text_todo.value = '';
});
function onClickTodo(event) {
    var target = event.target;
    var tag = target.tagName;
    if (tag == 'LI') {
        handleToggleTodo(target);
    }
    if (tag == 'SPAN') {
        deleteTodo(target);
    }
}
function deleteTodo(target) {
    var id = target.parentElement.id;
    var object = getDataLocalStorage();
    object.splice(id, 1);
    setDataLocalStorage(object);
    selectData();
}
function handleToggleTodo(target) {
    var id = target.id;
    var object = getDataLocalStorage();
    if (object[id].completed) {
        object[id].completed = false;
    } else {
        object[id].completed = true;
    }
    setDataLocalStorage(object);
    selectData();
}
function clearList() {
    var ul = document.getElementById("list");
    ul.innerHTML = '';
}
function selectData() {
    clearList();
    var object = getDataLocalStorage();
    for (var i = 0; i < object.length; i++) {
        var ul = document.getElementById("list");
        var li = document.createElement("li");
        li.id = i;
        li.innerHTML = object[i].text + '<span class="close">×</span>';
        if (object[i].completed) {
            li.className = 'completed';
        }
        li.addEventListener('click', onClickTodo);
        ul.appendChild(li);
    }
}
function addToLocalStorage(text, complete) {
    var object = getDataLocalStorage();
    object.push(
        {
            text : text,
            completed: complete
        }
    );
    setDataLocalStorage(object);
}
function getDataLocalStorage() {
    var str = localStorage.getItem('array_list');
    var object = JSON.parse(str);
    return object;
}
function setDataLocalStorage(object) {
    var str = JSON.stringify(object);
    localStorage.setItem('array_list', str);
}

function setEmptyLocalStogare() {
    if (localStorage.getItem('array_list') === null) {
        var object = [];
        setDataLocalStorage(object);
    }
}



