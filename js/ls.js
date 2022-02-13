import todoInput from "./main.js";

const todoItemsList = document.querySelector('.todo-items');
let todos = [];

function renderTodos(todos) {
    todoItemsList.innerHTML = '';
    todos.forEach(function (item) {
        const checked = item.completed ? 'checked' : null;
        // Make a LI
        const li = document.createElement('li');
        li.setAttribute('class', 'item');
        li.setAttribute('data-key', item.id);
        if (item.completed === true) {
            li.classList.add('checked');
        }
        li.innerHTML = `<input type="checkbox" class="checkbox" ${checked}>${item.content}<button class="delete-button"><i class="fa-solid fa-xmark"></i></button>`;
        todoItemsList.append(li);
    });
}

export function addToLocalStorage(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodos(todos);
}

export function getFromLocalStorage() {
    const reference = localStorage.getItem('todos');
    if (reference) {
        todos = JSON.parse(reference);
        renderTodos(todos);
    }
}

export function toggle(id) {
    todos.forEach(function (item) {
        if (item.id == id) {
            item.completed = !item.completed;
        }
    });

    addToLocalStorage(todos);
}

export function deleteTodo(id) {
    todos = todos.filter(function (item) {
        return item.id != id;
    });
    addToLocalStorage(todos);
}

getFromLocalStorage();

export function addTodo(item) {
    if (item !== '') {
        const todo = {
            id: Date.now(),
            content: item,
            completed: false
        };
        todos.push(todo);
        addToLocalStorage(todos);
        todoInput.value = '';
    }
}

export default todoItemsList