// Array para armazenar as tarefas
let tasks = [];

// Variável para controlar edição
let editIndex = -1;

// Selecionar elementos do DOM
const formTask = document.getElementById("formTask");
const inputTask = document.getElementById("inputTask");
const listTasks = document.getElementById("listTasks");
const btnSubmit = document.getElementById("btnSubmit");
const btnCancel = document.getElementById("btnCancel");

/**
 * Renderiza a lista de tarefas
 */
function renderTasks() {
  // Limpa a lista antes de renderizar para evitar duplicação
  listTasks.innerHTML = "";

  // Para cada tarefa no array de tarefas, cria um item de lista
  // e adiciona os botões de editar e excluir
  tasks.forEach((task, index) => {
    // Criar o item da lista
    const li = document.createElement("li");
    li.className =
      "list-group-item d-flex justify-content-between align-items-center";

    // Cria o elemento span para exibir a tarefa
    const taskSpan = document.createElement("span");
    // Preenche o conteúdo do span com a tarefa
    taskSpan.textContent = task;

    // Criar o grupo de botões
    const btnGroup = document.createElement("div");

    // Cria botão editar
    const btnEdit = document.createElement("button");
    btnEdit.type = "button";
    btnEdit.className = "btn btn-sm btn-outline-warning me-2";
    btnEdit.textContent = "Editar";
    btnEdit.addEventListener("click", () => editTaskByIndex(index));

    // Cria botão excluir
    const btnDelete = document.createElement("button");
    btnDelete.type = "button";
    btnDelete.className = "btn btn-sm btn-outline-danger";
    btnDelete.textContent = "Excluir";
    btnDelete.addEventListener("click", () => deleteTaskByIndex(index));

    // Adiciona os botões ao grupo de botões
    btnGroup.appendChild(btnEdit);
    btnGroup.appendChild(btnDelete);

    // Adiciona o span e o grupo de botões ao item da lista
    li.appendChild(taskSpan);
    li.appendChild(btnGroup);

    // Adiciona o item da lista à lista de tarefas
    listTasks.appendChild(li);
  });
}

/**
 * Edita a tarefa no índice especificado
 *
 * @param {number} index - índice da tarefa a ser editada
 */
function editTaskByIndex(index) {
  // Define o índice de edição para o índice da tarefa a ser editada
  editIndex = index;
  // Atualiza o campo de entrada com o valor da tarefa a ser editada
  inputTask.value = tasks[index];
  // e altera o texto do botão de envio para "Atualizar"
  btnSubmit.textContent = "Atualizar";
  // Adiciona a classe d-none para ocultár o botão de cancelar
  btnCancel.classList.remove("d-none");
  // Foca o campo de entrada para facilitar a edição
  inputTask.focus();
}


/**
 * Deleta a tarefa no índice especificado
 *
 * @param {number} index - índice da tarefa a ser excluída
 * @returns {void}
 * @throws {Error} Se o índice estiver fora do intervalo
 */
function deleteTaskByIndex(index) {
  // Requisita do usuário uma confirmação para excluir a tarefa
  const confirmDelete = confirm(
    "Você tem certeza que deseja excluir esta tarefa?" + tasks[index]
  );
  if (confirmDelete) {
    // Remove a tarefa do array de tarefas
    tasks.splice(index, 1);

    if (editIndex === index) {
      cancelEdit();
    } else if (editIndex > index) {
      editIndex--;
    }
    renderTasks();
  }
}

/**
 * Cancela a edição da tarefa
 */
function cancelEdit() {
  // Reseta o índice de edição para -1
  editIndex = -1;
  // Limpa o campo de entrada
  inputTask.value = "";
  // Atualiza o botão de envio para "Adicionar"
  btnSubmit.textContent = "Adicionar";
  // Oculta o botão de cancelar edição
  btnCancel.classList.add("d-none");
  // Foca o campo de entrada para facilitar a adição de novas tarefas
  inputTask.focus();
}

// Adicionar nova tarefa
formTask.addEventListener("submit", (e) => {
  // Previne o comportamento padrão do formulário de atualizar a página
  e.preventDefault();
  // Limpa o campo de entrada de espaço em branco
  const taskValue = inputTask.value.trim();

  // Verifica se o campo de entrada está vazio
  // Se estiver, retorna sem fazer nada
  if (taskValue === "") return;

  if (editIndex === -1) {
    // Adicionar nova tarefa no final da lista
    tasks.push(taskValue);
  } else {
    // Utilizando o índice de edição para atualizar a tarefa selecionada
    tasks[editIndex] = taskValue;
    // Reseta o índice de edição para -1
    // para indicar que não estamos mais editando e estamos na última tarefa
    editIndex = -1;
    // Atualiza o botão de envio para "Adicionar"
    // e oculta o botão de cancelar edição
    btnSubmit.textContent = "Adicionar";
    btnCancel.classList.add("d-none");
  }

  // Limpa o campo de entrada e foca nele novamente
  inputTask.value = "";
  // Foca o campo de entrada para facilitar a adição de novas tarefas
  inputTask.focus();
  // Atualiza a lista de tarefas
  renderTasks();
});

// Cancelar edição
btnCancel.addEventListener("click", () => {
  cancelEdit();
});

// Renderização inicial
renderTasks();
