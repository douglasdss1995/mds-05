package com.cursodedesenvolvimentodesoftware.todolistapp.ui.views

// ui/TodoListApp.kt
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Add
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.FloatingActionButton
import androidx.compose.material3.Icon
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import com.cursodedesenvolvimentodesoftware.todolistapp.ui.ui.TaskItem
import com.cursodedesenvolvimentodesoftware.todolistapp.ui.ui.ui.AddTaskDialog
import com.cursodedesenvolvimentodesoftware.todolistapp.viewmodel.TaskViewModel

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun TodoListApp(
    viewModel: TaskViewModel
) {
    // Observa o estado das tasks
    val tasks by viewModel.tasks.collectAsStateWithLifecycle()
    val isLoading by viewModel.isLoading.collectAsStateWithLifecycle()

    // Estado para controlar o dialog
    var showAddDialog by remember { mutableStateOf(false) }

    Scaffold(
        topBar = {
            TopAppBar(
                title = { Text("Minha Lista de Tarefas") }
            )
        },
        floatingActionButton = {
            FloatingActionButton(
                onClick = { showAddDialog = true }
            ) {
                Icon(
                    Icons.Default.Add,
                    contentDescription = "Adicionar tarefa"
                )
            }
        }
    ) { paddingValues ->
        Box(
            modifier = Modifier
                .fillMaxSize()
                .padding(paddingValues)
        ) {
            when {
                isLoading -> {
                    CircularProgressIndicator(
                        modifier = Modifier.align(Alignment.Center)
                    )
                }

                tasks.isEmpty() -> {
                    Text(
                        text = "Nenhuma tarefa encontrada.\nToque no + para adicionar!",
                        modifier = Modifier.align(Alignment.Center)
                    )
                }

                else -> {
                    LazyColumn(
                        modifier = Modifier.fillMaxSize(),
                        contentPadding = PaddingValues(16.dp),
                        verticalArrangement = Arrangement.spacedBy(8.dp)
                    ) {
                        items(tasks) { task ->
                            TaskItem(
                                task = task,
                                onToggleComplete = viewModel::toggleTaskComplete,
                                onDelete = viewModel::deleteTask
                            )
                        }
                    }
                }
            }
        }
    }

    // Dialog para adicionar nova task
    if (showAddDialog) {
        AddTaskDialog(
            onDismiss = { showAddDialog = false },
            onConfirm = { titulo, descricao ->
                viewModel.addTask(
                    titulo,
                    descricao
                )
                showAddDialog = false
            }
        )
    }
}