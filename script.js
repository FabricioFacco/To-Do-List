const form = document.getElementById("form");
const input = document.getElementById("input");
const list = document.getElementById("list");

if (localStorage.getItem("todoList")) {
    list.innerHTML = localStorage.getItem("todoList");
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (input.value.trim() === "") return;
    const newItem = document.createElement("li");
    newItem.innerHTML = `•  ${input.value.charAt(0).toUpperCase() + input.value.slice(1)} <button class="remove">Remover</button>`;
    list.appendChild(newItem);
    input.value = "";
    localStorage.setItem("todoList", list.innerHTML);
});

list.addEventListener("click", (event) => {
    if (event.target.className === "remove") {
        event.target.parentElement.remove();
        localStorage.setItem("todoList", list.innerHTML);
    }
});