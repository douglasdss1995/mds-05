// Define o pacote ao qual este arquivo ViewModel pertence.
package com.cursodedesenvolvimentodesoftware.todolistapp.viewmodel

// Importa a classe base ViewModel do Android Jetpack Lifecycle library.
// ViewModels são projetados para armazenar e gerenciar dados relacionados à UI
// de uma forma consciente do ciclo de vida.
import androidx.lifecycle.ViewModel
// Importa viewModelScope, um CoroutineScope ligado ao ciclo de vida do ViewModel.
// Coroutines lançadas neste escopo são automaticamente canceladas quando o ViewModel é limpo.
import androidx.lifecycle.viewModelScope
// Importa a data class Task, que representa o modelo de uma tarefa na aplicação.
import com.cursodedesenvolvimentodesoftware.todolistapp.data.Task
// Importa a função de extensão toggleComplete definida para a classe Task.
// Esta função provavelmente retorna uma nova instância de Task com o estado 'completed' invertido.
import com.cursodedesenvolvimentodesoftware.todolistapp.data.toggleComplete
// Importa TaskLocalRepository, que é responsável por fornecer dados de tarefas
// de uma fonte local (neste caso, uma lista em memória).
import com.cursodedesenvolvimentodesoftware.todolistapp.repository.TaskLocalRepository
// Importa MutableStateFlow, uma classe de Flow que permite a emissão de atualizações
// de estado para observadores e armazena o valor de estado mais recente.
import kotlinx.coroutines.flow.MutableStateFlow
// Importa StateFlow, uma interface de Flow somente leitura que representa um fluxo
// de estado observável que emite o valor de estado atual e quaisquer atualizações futuras.
import kotlinx.coroutines.flow.StateFlow
// Importa a função de construção de coroutine 'launch', usada para iniciar novas coroutines
// sem bloquear o thread atual.
import kotlinx.coroutines.launch

/**
 * ViewModel para gerenciar os dados e a lógica de negócios relacionados às tarefas ([Task]).
 *
 * Esta classe é responsável por:
 * - Manter a lista de tarefas atual e o estado de carregamento.
 * - Interagir com o [TaskLocalRepository] para buscar, adicionar, atualizar e deletar tarefas.
 * - Expor os dados para a UI (normalmente um Composable) de forma observável usando [StateFlow].
 * - Lidar com operações assíncronas (como chamadas ao repositório) usando coroutines dentro do [viewModelScope].
 */
class TaskViewModel : ViewModel() { // TaskViewModel herda da classe base ViewModel.

    // Instância privada do TaskLocalRepository.
    // O ViewModel delega as operações de dados para este repositório.
    private val repository = TaskLocalRepository()

    // Estado da UI para a lista de tarefas.
    // _tasks é um MutableStateFlow privado que pode ser modificado dentro do ViewModel.
    // É inicializado com uma lista vazia.
    private val _tasks = MutableStateFlow<List<Task>>(emptyList())
    // tasks é um StateFlow público e imutável exposto para a UI.
    // A UI pode observar este fluxo para receber atualizações na lista de tarefas.
    val tasks: StateFlow<List<Task>> = _tasks

    // Estado da UI para indicar se os dados estão sendo carregados.
    // _isLoading é um MutableStateFlow privado para controlar o estado de carregamento.
    // É inicializado como 'false' (não carregando).
    private val _isLoading = MutableStateFlow(false)
    // isLoading é um StateFlow público e imutável para a UI observar o estado de carregamento.
    val isLoading: StateFlow<Boolean> = _isLoading

    // Bloco de inicialização ('init').
    // Este código é executado quando uma instância de TaskViewModel é criada.
    init {
        // Chama a função loadTasks() para carregar as tarefas iniciais assim que o ViewModel é criado.
        loadTasks()
    }

    /**
     * Carrega as tarefas do repositório e atualiza o estado da UI.
     * Esta função é privada pois sua lógica de carregamento é um detalhe de implementação
     * interno ao ViewModel.
     * Operações de IO (como buscar dados do repositório) são feitas em uma coroutine.
     */
    private fun loadTasks() {
        // Lança uma nova coroutine no escopo do ViewModel (viewModelScope).
        // Se o ViewModel for destruído, esta coroutine será automaticamente cancelada.
        viewModelScope.launch {
            // Define _isLoading como true para indicar que o carregamento começou.
            // A UI pode usar isso para mostrar um indicador de progresso.
            _isLoading.value = true
            // Bloco try-finally para garantir que _isLoading seja definido como false
            // mesmo que ocorra um erro durante o carregamento das tarefas.
            try {
                // Atualiza o valor de _tasks com a lista de tarefas obtida do repositório.
                // A UI que observa 'tasks' será notificada desta mudança.
                _tasks.value = repository.getAllTasks()
            } finally {
                // Define _isLoading como false para indicar que o carregamento terminou
                // (seja com sucesso ou com erro).
                _isLoading.value = false
            }
        }
    }

    /**
     * Adiciona uma nova tarefa com o título e descrição fornecidos.
     * Se o título estiver em branco, a função retorna sem adicionar a tarefa.
     * Após adicionar a tarefa ao repositório, a lista de tarefas é recarregada.
     *
     * @param titulo O título da nova tarefa. Não pode ser em branco.
     * @param descricao A descrição opcional da nova tarefa. Padrão é uma string vazia.
     */
    fun addTask(titulo: String, descricao: String = "") {
        // Validação simples: não adiciona a tarefa se o título estiver em branco.
        if (titulo.isBlank()) return

        // Lança uma nova coroutine para executar a operação de adição de forma assíncrona.
        viewModelScope.launch {
            // Cria uma nova instância de Task com o título e descrição fornecidos.
            // O ID será provavelmente atribuído pelo repositório.
            val newTask = Task(titulo = titulo, descricao = descricao)
            // Chama o método addTask do repositório para adicionar a nova tarefa.
            repository.addTask(newTask)
            // Recarrega a lista de tarefas da UI para refletir a adição da nova tarefa.
            // Isso garante que a UI esteja sempre sincronizada com os dados mais recentes.
            loadTasks() // Poderia ser otimizado para adicionar apenas o novo item à lista _tasks.value
            // em vez de recarregar tudo, dependendo dos requisitos.
        }
    }

    /**
     * Alterna o estado de conclusão (completa/incompleta) de uma tarefa específica.
     * Após atualizar a tarefa no repositório, a lista de tarefas é recarregada.
     *
     * @param task A [Task] cujo estado de conclusão deve ser alternado.
     */
    fun toggleTaskComplete(task: Task) {
        // Lança uma nova coroutine para executar a operação de atualização de forma assíncrona.
        viewModelScope.launch {
            // Chama o método updateTask do repositório, passando uma nova instância da tarefa
            // com seu estado 'completed' invertido (usando a função de extensão 'toggleComplete()').
            repository.updateTask(task.toggleComplete())
            // Recarrega a lista de tarefas para que a UI reflita a mudança no estado da tarefa.
            loadTasks()
        }
    }

    /**
     * Remove uma tarefa com base no seu ID.
     * Após remover a tarefa do repositório, a lista de tarefas é recarregada.
     *
     * @param taskId O ID da tarefa a ser removida.
     */
    fun deleteTask(taskId: Int) {
        // Lança uma nova coroutine para executar a operação de deleção de forma assíncrona.
        viewModelScope.launch {
            // Chama o método deleteTask do repositório para remover a tarefa com o ID fornecido.
            repository.deleteTask(taskId)
            // Recarrega a lista de tarefas para que a UI reflita a remoção da tarefa.
            loadTasks()
        }
    }
}

