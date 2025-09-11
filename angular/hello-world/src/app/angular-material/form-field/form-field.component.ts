import {Component} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-form-field',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule],
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.css'
})
export class FormFieldComponent {

  nome!: string;

  alertar(): void {
    alert('Hello World');
  }

}
