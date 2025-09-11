import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form-builder',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form-builder.component.html',
  styleUrl: './reactive-form-builder.component.css'
})
export class ReactiveFormBuilderComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      nome: ['Douglas', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      status: [1, [Validators.required, Validators.min(0), Validators.max(1)]],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Formulário enviado', this.form.value);

      if (this.form.get('status')?.value == '1') {
        this.form.get('email')?.enable();
      } else {
        this.form.get('email')?.disable();
      }
    }
  }
}
