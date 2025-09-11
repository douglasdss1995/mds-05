import {Component} from '@angular/core';
import {ButtonComponent} from './angular-material/button/button.component';

@Component({
  selector: 'app-root',
  imports: [
    ButtonComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {
  title = 'hello-world';
}
