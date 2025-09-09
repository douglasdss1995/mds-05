// Estrutura de dados para as tarefas
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Elementos do DOM
const taskInput = document.getElementById("taskInput");
const prioritySelect = document.getElementById("prioritySelect");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const totalTasksSpan = document.getElementById("totalTasks");
const completedTasksSpan = document.getElementById("completedTasks");
const pendingTasksSpan = document.getElementById("pendingTasks");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");

// Função para salvar tarefas no localStorage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  updateStats();
}

// Função para atualizar estatísticas
function updateStats() {
  const total = tasks.length;
  const completed = tasks.filter((task) => task.completed).length;
  const pending = total - completed;

  totalTasksSpan.textContent = total;
  completedTasksSpan.textContent = completed;
  pendingTasksSpan.textContent = pending;
}

// Função para renderizar a lista de tarefas
function renderTasks() {
  if (tasks.length === 0) {
    taskList.innerHTML = `
                    <div class="empty-state">
                        <i class="bi bi-clipboard-check"></i>
                        <h4>Nenhuma tarefa cadastrada</h4>
                        <p>Adicione uma nova tarefa para começar</p>
                    </div>
                `;
    updateStats();
    return;
  }

  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const taskElement = document.createElement("div");
    taskElement.className = `task-item d-flex align-items-center p-3 mb-2 border rounded fade-in ${
      task.completed ? "completed" : ""
    } priority-${task.priority}`;

    taskElement.innerHTML = `
                    <div class="form-check flex-grow-1">
                        <input class="form-check-input" type="checkbox" id="task${index}" ${
      task.completed ? "checked" : ""
    }>
                        <label class="form-check-label task-text" for="task${index}">
                            ${task.text}
                        </label>
                    </div>
                    <div class="d-flex">
                        <span class="badge me-2 bg-${
                          task.priority === "high"
                            ? "danger"
                            : task.priority === "medium"
                            ? "warning"
                            : "success"
                        }">
                            ${
                              task.priority === "high"
                                ? "Alta"
                                : task.priority === "medium"
                                ? "Média"
                                : "Baixa"
                            }
                        </span>
                        <button class="btn btn-sm btn-outline-danger delete-btn" data-index="${index}">
                            <i class="bi bi-trash"></i>
                        </button>
                    </div>
                `;

    taskList.appendChild(taskElement);

    // Adicionar evento para marcar como concluída
    const checkbox = taskElement.querySelector(`#task${index}`);
    checkbox.addEventListener("change", () => {
      tasks[index].completed = checkbox.checked;
      saveTasks();
      renderTasks();
    });

    // Adicionar evento para excluir tarefa
    const deleteBtn = taskElement.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => {
      tasks.splice(index, 1);
      saveTasks();
      renderTasks();
    });
  });

  updateStats();
}

// Função para adicionar nova tarefa
function addTask() {
  const text = taskInput.value.trim();
  const priority = prioritySelect.value;

  if (text === "") {
    taskInput.focus();
    return;
  }

  const newTask = {
    text: text,
    completed: false,
    priority: priority,
    createdAt: new Date().toISOString(),
  };

  tasks.push(newTask);
  saveTasks();
  renderTasks();

  // Limpar o campo de entrada
  taskInput.value = "";
  prioritySelect.value = "medium";
  taskInput.focus();
}

// Eventos
addTaskBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

clearCompletedBtn.addEventListener("click", () => {
  tasks = tasks.filter((task) => !task.completed);
  saveTasks();
  renderTasks();
});

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
  renderTasks();
});
