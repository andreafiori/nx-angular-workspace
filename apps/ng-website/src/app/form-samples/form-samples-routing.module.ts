import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormSampleHomeComponent } from './form-sample-home/form-sample-home.component';

const routes: Routes = [
  {
    path: 'form-samples',
    children: [
      { path: 'validation', component: FormSampleHomeComponent },
      { path: '', redirectTo: '/', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormSamplesRoutingModule { }
