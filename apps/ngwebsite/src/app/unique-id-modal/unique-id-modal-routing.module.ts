import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UniqueIdModalHomeComponent } from './unique-id-modal-home/unique-id-modal-home.component';

const routes: Routes = [
  {
    path: 'unique-id-modal',
    children: [
      {
        path: '',
        component: UniqueIdModalHomeComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniqueIdModalRoutingModule { }
