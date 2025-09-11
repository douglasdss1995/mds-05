import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  imports: [],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css'
})
export class EventBindingComponent {

  message: string = 'Clique no botão para mudar esta mensagem';

  changeMessage() {
    this.message = 'Você clicou no botão!';
  }

  returnToDefaultMessage() {
    this.message = 'Clique no botão para mudar esta mensagem';
  }

}
