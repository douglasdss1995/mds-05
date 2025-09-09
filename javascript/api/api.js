// Ajuste a URL base da sua API aqui:
const API_BASE_URL = 'https://your.api.endpoint'; // Exemplo: 'https://api.exemplo.com'

// Elementos do DOM
const loginContainer = document.getElementById('loginContainer');
const loginForm = document.getElementById('loginForm');
const loginEmail = document.getElementById('loginEmail');
const loginPassword = document.getElementById('loginPassword');

const taskContainer = document.getElementById('taskContainer');
const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const logoutBtn = document.getElementById('logoutBtn');

// Função para armazenar token JWT no localStorage
function setToken(token) {
    localStorage.setItem('jwtToken', token);
}

// Função para obter token JWT do localStorage
function getToken() {
    return localStorage.getItem('jwtToken');
}

// Função para remover token JWT (Logout)
function removeToken() {
    localStorage.removeItem('jwtToken');
}

// Função para verificar se usuário está autenticado
function isAuthenticated() {
    return !!getToken();
}

// Função para montar cabeçalhos HTTP para requisições autenticadas
function getAuthHeaders() {
    const token = getToken();
    return token ? { 'Authorization': 'Bearer ' + token } : {};
}

// Exibir ou ocultar containers conforme estado de autenticação
function updateInterface() {
    if (isAuthenticated()) {
        loginContainer.classList.add('d-none');
        taskContainer.classList.remove('d-none');
        carregarTarefas();
    } else {
        loginContainer.classList.remove('d-none');
        taskContainer.classList.add('d-none');
        taskList.innerHTML = ''; // limpa tarefas da interface
    }
}

// Função para realizar login e receber o JWT
async function login(email, password) {
    try {
        const response = await fetch(`${API_BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        if (!response.ok) {
            throw new Error('Usuário ou senha inválidos');
        }

        const data = await response.json();
        if (data.token) {
            setToken(data.token);
            updateInterface();
        } else {
            throw new Error('Token não recebido');
        }
    } catch (error) {
        alert('Erro no login: ' + error.message);
    }
}

// Função para buscar tarefas da API
async function carregarTarefas() {
    try {
        const response = await fetch(`${API_BASE_URL}/tasks`, {
            headers: {
                'Content-Type': 'application/json',
                ...getAuthHeaders()
            }
        });
        if (!response.ok) {
            throw new Error('Falha ao carregar tarefas');
        }
        const tarefas = await response.json();
        exibirTarefas(tarefas);
    } catch (error) {
        alert('Erro ao carregar tarefas: ' + error.message);
    }
}

// Função para exibir tarefas na lista
function exibirTarefas(tarefas) {
    taskList.innerHTML = '';
    tarefas.forEach(tarefa => {
        const li = document.createElement('li');
        li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        li.textContent = tarefa.title;

        // Botão excluir tarefa
        const btnExcluir = document.createElement('button');
        btnExcluir.className = 'btn btn-danger btn-sm';
        btnExcluir.textContent = 'Excluir';
        btnExcluir.addEventListener('click', () => {
            excluirTarefa(tarefa.id);
        });

        li.appendChild(btnExcluir);
        taskList.appendChild(li);
    });
}

// Função para adicionar nova tarefa via API
async function adicionarTarefa(titulo) {
    try {
        const response = await fetch(`${API_BASE_URL}/tasks`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...getAuthHeaders()
            },
            body: JSON.stringify({ title: titulo })
        });
        if (!response.ok) {
            throw new Error('Não foi possível adicionar a tarefa');
        }
        await carregarTarefas();
    } catch (error) {
        alert('Erro ao adicionar tarefa: ' + error.message);
    }
}

// Função para excluir tarefa via API
async function excluirTarefa(id) {
    try {
        const response = await fetch(`${API_BASE_URL}/tasks/${id}`, {
            method: 'DELETE',
            headers: {
                ...getAuthHeaders()
            }
        });
        if (!response.ok) {
            throw new Error('Não foi possível excluir a tarefa');
        }
        await carregarTarefas();
    } catch (error) {
        alert('Erro ao excluir tarefa: ' + error.message);
    }
}

// Event listener login form
loginForm.addEventListener('submit', event => {
    event.preventDefault();
    event.stopPropagation();

    if (!loginForm.checkValidity()) {
        loginForm.classList.add('was-validated');
        return;
    }

    const email = loginEmail.value.trim();
    const password = loginPassword.value;
    login(email, password);
});

// Event listener logout
logoutBtn.addEventListener('click', () => {
    removeToken();
    updateInterface();
});

// Event listener adicionar tarefa
taskForm.addEventListener('submit', event => {
    event.preventDefault();
    event.stopPropagation();

    if (!taskForm.checkValidity()) {
        taskForm.classList.add('was-validated');
        return;
    }

    const titulo = taskInput.value.trim();
    adicionarTarefa(titulo);
    taskInput.value = '';
    taskForm.classList.remove('was-validated');
});

// Inicializa interface conforme autenticação
updateInterface();