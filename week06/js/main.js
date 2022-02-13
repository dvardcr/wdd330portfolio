import {
    filterTodo
} from "./filter.js";
import todoItemsList, {
    toggle,
    deleteTodo,
    addTodo
}
from "./ls.js";

//Selectors
const todoForm = document.querySelector('.todo-form');
const todoInput = document.querySelector('.todo-input');
const filterOption = document.querySelector('.filter-todo');

//EventListeners
todoForm.addEventListener('submit', function (event) {
    event.preventDefault();
    addTodo(todoInput.value);
});
todoItemsList.addEventListener('click', function (event) {
    if (event.target.type === 'checkbox') {
        toggle(event.target.parentElement.getAttribute('data-key'));
    }
    if (event.target.classList.contains('delete-button')) {
        deleteTodo(event.target.parentElement.getAttribute('data-key'));
    }
});

filterOption.addEventListener("change", filterTodo);

export default todoInput