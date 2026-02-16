import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactive-demo',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-demo.html',
  styleUrl: './reactive-demo.css'
})
export class ReactiveDemoComponent {
  roles: string[] = ['Admin', 'User', 'Guest'];
  form: FormGroup;
  submitted = false;
  formData: any = null;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_]{4,12}$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/)]],
      role: ['Admin', Validators.required],
      gender: ['', Validators.required],
      status: ['', Validators.required],
      comments: ['']
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.submitted = true;
      this.formData = this.form.value;
    } else {
      this.form.markAllAsTouched();
    }
  }

  resetForm() {
    this.submitted = false;
    this.form.reset({
      role: 'Admin'
    });
    this.formData = null;
  }

  isInvalid(controlName: string): boolean {
    const control = this.form.get(controlName);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
}
