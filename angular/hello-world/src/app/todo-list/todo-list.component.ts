import { Component } from '@angular/core';
import {MatDivider, MatDividerModule} from "@angular/material/divider";
import {MatButtonModule, MatFabButton} from "@angular/material/button";
import {MatInput, MatInputModule, MatLabel} from "@angular/material/input";
import {MatList, MatListItem, MatListModule} from "@angular/material/list";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-todo-list',
    imports: [
      MatSidenavModule,
      MatFormFieldModule,
      MatSelectModule,
      MatButtonModule,
      MatToolbarModule,
      MatIconModule,
      MatListModule,
      MatInputModule,
      MatDividerModule,
      FormsModule
    ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {

  tarefa: string = '';

  listaDeTarefas: Array<string> = [
    'Tarefa 1',
    'Tarefa 2',
  ];

  public addTarefa() {
    this.listaDeTarefas.push(this.tarefa);
    this.tarefa = '';
  }

}
