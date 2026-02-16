import { Routes } from '@angular/router';
import { TemplateDemo } from './template-demo/template-demo';
import { ReactiveForms } from './reactive-forms/reactive-forms';

export const routes: Routes = [
  { path: '', redirectTo: 'template-demo', pathMatch: 'full' },
  { path: 'template-demo', component: TemplateDemo },
  { path: 'reactive-forms', component: ReactiveForms }
];
