import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms.html',
  styleUrl: './reactive-forms.css'
})
export class ReactiveForms {
  form: FormGroup;
  submitted = false;

  // Add this property to fix Netlify deployment error
  submittedData: any = null;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['', Validators.required],
      gender: ['', Validators.required],
      status: ['', Validators.required],
      comments: ['']
    });
  }

  onSubmit() {
    this.submitted = true;
    this.submittedData = this.form.value;
  }
}
