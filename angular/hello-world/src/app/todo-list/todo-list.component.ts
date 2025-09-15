import {Component, OnInit} from '@angular/core';
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatListModule} from "@angular/material/list";
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule} from '@angular/router';
import {TaskModel} from '../models/task-model';
import {TaskService} from '../services/task.service';

@Component({
  selector: 'app-todo-list',
  imports: [
    RouterModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatDividerModule,
    FormsModule
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent implements OnInit {

  public constructor(
    private taskService: TaskService,
  ) {
  }

  public ngOnInit() {
    this.getTarefas();
  }

  public getTarefas(): void {
    this.taskService.getTasks().subscribe((response) => {
      this.listaDeTarefas = response;
    });
  }

  tarefa: string = '';
  //
  listaDeTarefas: Array<TaskModel> = [];

  //
  public addTarefa() {
    const tarefa: TaskModel = {
      nome: this.tarefa,
      descricao: '',
      concluida: true,
    };

    this.taskService.createTask(tarefa).subscribe(() => {
      this.getTarefas();
      this.tarefa = '';
    });
  }

}
