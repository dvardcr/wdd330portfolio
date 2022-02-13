export function filterTodo(e) {
    const todos = Array.from(document.querySelectorAll(".todo-items .item"));
    todos.forEach(function (item) {
        switch (e.target.value) {
            case "all":
                item.style.display = "";
                break;
            case "completed":
                if (item.classList.contains("checked")) {
                    item.style.display = "";
                } else {
                    item.style.display = "none";
                }
                break;
            case "active":
                if (!item.classList.contains("checked")) {
                    item.style.display = "";
                } else {
                    item.style.display = "none";
                }
                break;
        }
    });
}