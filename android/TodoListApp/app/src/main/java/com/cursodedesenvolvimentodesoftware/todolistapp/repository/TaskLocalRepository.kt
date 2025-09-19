// Define o pacote ao qual este arquivo pertence.
// Pacotes são usados para organizar o código em grupos lógicos.
package com.cursodedesenvolvimentodesoftware.todolistapp.repository

// Importa a data class 'Task' do pacote de dados do projeto.
// Esta classe representa o modelo de uma tarefa na aplicação.
import com.cursodedesenvolvimentodesoftware.todolistapp.data.Task

/**
 * Repositório local para gerenciar objetos [Task].
 * Este repositório simula uma fonte de dados local, como um banco de dados
 * ou um armazenamento em memória, para as tarefas da lista de afazeres.
 * Ele fornece métodos para buscar, adicionar, atualizar e deletar tarefas.
 *
 * Atualmente, os dados são armazenados em uma lista mutável em memória e
 * são inicializados com alguns dados de exemplo.
 */
class TaskLocalRepository {

    // Uma lista mutável privada para armazenar as tarefas.
    // O prefixo '_' é uma convenção comum em Kotlin para indicar uma propriedade de apoio
    // que não deve ser acessada diretamente de fora da classe (encapsulamento).
    private val _tasks = mutableListOf<Task>()

    // Bloco de inicialização ('init'). Este bloco é executado quando uma instância
    // da classe TaskLocalRepository é criada.
    init {
        // Simula o carregamento de dados iniciais ou a conexão com uma fonte de dados.
        // Adiciona uma lista de tarefas predefinidas à lista '_tasks'.
        _tasks.addAll(listOf(
            Task(1, "Aprender Kotlin", "Estudar sintaxe básica", false),
            Task(2, "Criar primeiro app", "Todo List simples", false),
            Task(3, "Configurar ambiente", "Android Studio + SDK", true)
        ))
    }

    /**
     * Retorna uma lista de todas as tarefas atualmente armazenadas no repositório.
     * A lista retornada é uma cópia imutável da lista interna de tarefas para
     * proteger os dados originais contra modificações externas diretas.
     *
     * @return Uma [List] de [Task] contendo todas as tarefas.
     *         Retorna uma lista vazia se não houver tarefas.
     */
    fun getAllTasks(): List<Task> = _tasks.toList() // '.toList()' cria uma cópia imutável da lista '_tasks'.

    /**
     * Adiciona uma nova tarefa ao repositório.
     * Um novo ID é gerado automaticamente para a tarefa antes de ser adicionada.
     * O ID é baseado no tamanho atual da lista de tarefas mais um, simulando um auto-incremento.
     *
     * @param task A [Task] a ser adicionada. O ID original da tarefa passada como parâmetro é ignorado.
     * @return A [Task] adicionada, agora com o ID atribuído pelo repositório.
     */
    fun addTask(task: Task): Task {
        // Cria uma cópia da tarefa recebida ('task.copy()'), mas atribui um novo 'id'.
        // O novo 'id' é o tamanho atual da lista '_tasks' mais 1.
        // Isso simula um comportamento de auto-incremento de ID.
        val newTask = task.copy(id = _tasks.size + 1)
        // Adiciona a 'newTask' (com o ID gerado) à lista interna '_tasks'.
        _tasks.add(newTask)
        // Retorna a 'newTask' que foi adicionada, incluindo seu novo ID.
        return newTask
    }

    /**
     * Atualiza uma tarefa existente no repositório.
     * A tarefa a ser atualizada é identificada pelo seu ID.
     * Se uma tarefa com o ID fornecido for encontrada, ela é substituída pela nova
     * instância da tarefa.
     *
     * @param task A [Task] contendo os dados atualizados e o ID da tarefa a ser modificada.
     * @return A [Task] atualizada se a operação for bem-sucedida (tarefa encontrada e atualizada).
     *         Retorna `null` se nenhuma tarefa com o ID especificado for encontrada.
     */
    fun updateTask(task: Task): Task? {
        // Procura o índice da primeira tarefa na lista '_tasks' cujo 'id' corresponde ao 'id' da 'task' fornecida.
        // 'indexOfFirst' retorna -1 se nenhum elemento corresponder ao predicado.
        val index = _tasks.indexOfFirst { it.id == task.id }
        // Verifica se a tarefa foi encontrada (ou seja, se 'index' não é -1).
        return if (index != -1) {
            // Se encontrada, substitui a tarefa no 'index' encontrado pela 'task' fornecida (com os dados atualizados).
            _tasks[index] = task
            // Retorna a 'task' atualizada.
            task
        } else {
            // Se não encontrada, retorna 'null'.
            null
        }
    }

    /**
     * Remove uma tarefa do repositório com base no seu ID.
     *
     * @param taskId O ID da tarefa a ser removida.
     * @return `true` se a tarefa foi encontrada e removida com sucesso.
     *         `false` se nenhuma tarefa com o ID especificado foi encontrada.
     */
    fun deleteTask(taskId: Int): Boolean {
        // 'removeIf' remove todos os elementos da lista '_tasks' que satisfazem o predicado fornecido.
        // O predicado aqui é 'it.id == taskId', que verifica se o 'id' da tarefa atual ('it') é igual ao 'taskId' fornecido.
        // 'removeIf' retorna 'true' se algum elemento foi removido, e 'false' caso contrário.
        return _tasks.removeIf { it.id == taskId }
    }
}

