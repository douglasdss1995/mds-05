import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-reactive',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css'
})
export class ReactiveComponent implements OnInit {
  form!: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('Douglas', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(128),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ])
    });
  }

  onSubmit() {
    if (this.form.valid) {
      alert('Formulário enviado');
    } else {
      alert('Form invalido');
    }
  }


}
