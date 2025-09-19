package com.cursodedesenvolvimentodesoftware.todolistapp

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.lifecycle.viewmodel.compose.viewModel
import com.cursodedesenvolvimentodesoftware.todolistapp.ui.views.TodoListApp
import com.cursodedesenvolvimentodesoftware.todolistapp.ui.theme.TodoListAppTheme
import com.cursodedesenvolvimentodesoftware.todolistapp.viewmodel.TaskViewModel

class MainActivity : ComponentActivity() {
    @OptIn(ExperimentalMaterial3Api::class)
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            TodoListAppTheme {
                Surface(color = MaterialTheme.colorScheme.background) {
                    val viewModel: TaskViewModel = viewModel()
                    TodoListApp(viewModel = viewModel)
                }
            }
        }
    }
}