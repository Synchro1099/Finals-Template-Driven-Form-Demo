import { Routes } from '@angular/router';
import { TemplateDemo } from './template-demo/template-demo';
import { ReactiveDemoComponent } from './reactive-demo/reactive-demo';

export const routes: Routes = [
  { path: '', redirectTo: 'template-demo', pathMatch: 'full' },
  { path: 'template-demo', component: TemplateDemo },
  { path: 'reactive-demo', component: ReactiveDemoComponent }
];
