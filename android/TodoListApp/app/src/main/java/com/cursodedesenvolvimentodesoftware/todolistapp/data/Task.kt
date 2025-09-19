package com.cursodedesenvolvimentodesoftware.todolistapp.data

// data/Task.kt
data class Task(
    val id: Int = 0,
    val titulo: String,
    val descricao: String = "",
    val concluida: Boolean = false,
    val criadaEm: String = "" // Formato ISO para API
)

fun Task.isCompleted(): Boolean = this.concluida
fun Task.toggleComplete(): Task = this.copy(concluida = !this.concluida)