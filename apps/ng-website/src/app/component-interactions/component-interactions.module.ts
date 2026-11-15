import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { ComponentInteractionHomeComponent } from './component-interactions-home/component-interactions-home.component';
import { ChildComponent } from './shared-input-text/child/child.component';
import { ParentComponent } from './shared-input-text/parent/parent.component';
import { RxSiblingComponent } from './rx/rx-sibling/rx-sibling.component';
import { RxParentComponent } from './rx/rx-parent/rx-parent.component';
import { ViewChildChildComponent } from './view-child/view-child-child/view-child-child.component';
import { ViewChildParentComponent } from './view-child/view-child-parent/view-child-parent.component';

const routes: Routes = [
  {
    path: 'component-interactions',
    children: [
      {
        path: '',
        component: ComponentInteractionHomeComponent
      }
    ]
  },
];

@NgModule({
  declarations: [
    ComponentInteractionHomeComponent,
    ChildComponent,
    ParentComponent,
    ViewChildParentComponent,
    ViewChildChildComponent,
    RxSiblingComponent,
    RxParentComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class ComponentInteractionsModule { }
