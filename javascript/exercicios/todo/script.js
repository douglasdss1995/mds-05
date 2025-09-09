// Estrutura de dados para as tarefas
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Elementos do DOM
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Função para salvar tarefas no localStorage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Função para renderizar a lista de tarefas
function renderTasks() {
  if (tasks.length === 0) {
    taskList.innerHTML = `
                    <div class="empty-state">
                        <div>📋</div>
                        <h3>Nenhuma tarefa cadastrada</h3>
                        <p>Adicione uma nova tarefa para começar</p>
                    </div>
                `;
    return;
  }

  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const taskItem = document.createElement("li");
    taskItem.className = `task-item ${task.completed ? "completed" : ""}`;

    taskItem.innerHTML = `
                    <input type="checkbox" class="task-checkbox" ${
                      task.completed ? "checked" : ""
                    }>
                    <span class="task-text">${task.text}</span>
                    <button class="delete-btn">✕</button>
                `;

    taskList.appendChild(taskItem);

    // Adicionar evento para marcar como concluída
    const checkbox = taskItem.querySelector(".task-checkbox");
    checkbox.addEventListener("change", () => {
      tasks[index].completed = checkbox.checked;
      saveTasks();
      renderTasks();
    });

    // Adicionar evento para excluir tarefa
    const deleteBtn = taskItem.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => {
      tasks.splice(index, 1);
      saveTasks();
      renderTasks();
    });
  });
}

// Função para adicionar nova tarefa
function addTask() {
  const text = taskInput.value.trim();

  if (text === "") {
    taskInput.focus();
    return;
  }

  const newTask = {
    text: text,
    completed: false,
    createdAt: new Date().toISOString(),
  };

  tasks.push(newTask);
  saveTasks();
  renderTasks();

  // Limpar o campo de entrada
  taskInput.value = "";
  taskInput.focus();
}

// Eventos
addTaskBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
  renderTasks();
});
