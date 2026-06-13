const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function () {

    const taskText = taskInput.value;

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;

    const doneBtn = document.createElement("button");
    doneBtn.textContent = "✔";
    doneBtn.style.background = "green";

    doneBtn.addEventListener("click", function () {
        span.style.textDecoration = "line-through";
        span.style.opacity = "0.6";
    });


    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑";
    deleteBtn.style.background = "red";

    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    const btns = document.createElement("div");
    btns.style.display = "flex";
    btns.style.gap = "5px";

    btns.appendChild(doneBtn);
    btns.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(btns);

    taskList.appendChild(li);

    taskInput.value = "";
});
