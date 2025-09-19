package com.cursodedesenvolvimentodesoftware.todolistapp.ui.ui

// ui/TaskItem.kt
import androidx.compose.foundation.layout.*
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Delete
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.style.TextDecoration
import androidx.compose.ui.unit.dp
import com.cursodedesenvolvimentodesoftware.todolistapp.data.Task

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun TaskItem(
    task: Task,
    onToggleComplete: (Task) -> Unit,
    onDelete: (Int) -> Unit
) {
    Card(
        modifier = Modifier.fillMaxWidth(),
        elevation = CardDefaults.cardElevation(defaultElevation = 4.dp)
    ) {
        Row(
            modifier = Modifier
                .padding(16.dp)
                .fillMaxWidth(),
            verticalAlignment = Alignment.CenterVertically
        ) {
            // Checkbox
            Checkbox(
                checked = task.concluida,
                onCheckedChange = { onToggleComplete(task) }
            )

            Spacer(modifier = Modifier.width(12.dp))

            // Texto da task
            Column(modifier = Modifier.weight(1f)) {
                Text(
                    text = task.titulo,
                    style = MaterialTheme.typography.titleMedium,
                    textDecoration = if (task.concluida) {
                        TextDecoration.LineThrough
                    } else {
                        TextDecoration.None
                    }
                )

                if (task.descricao.isNotBlank()) {
                    Text(
                        text = task.descricao,
                        style = MaterialTheme.typography.bodyMedium,
                        color = MaterialTheme.colorScheme.onSurfaceVariant
                    )
                }
            }

            // Botão de deletar
            IconButton(onClick = { onDelete(task.id) }) {
                Icon(
                    Icons.Default.Delete,
                    contentDescription = "Deletar tarefa",
                    tint = MaterialTheme.colorScheme.error
                )
            }
        }
    }
}