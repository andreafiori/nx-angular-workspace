import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { TodoListComponent } from './todo-one/todo-list/todo-list.component';
import { TodoListItemComponent } from './todo-one/todo-list-item/todo-list-item.component';
import { TodoOneComponent } from './todo-one/todo-one.component';
import { StudentsOneComponent } from './students-one/students-one.component';
import { StudentsTwoComponent } from './students-two/students-two.component';
import { TodoFormComponent } from './todo-one/todo-form/todo-form.component';
import { TodoService } from './shared/todo-service.service';

const routes: Routes = [
  {
    path: 'rxjs-samples',
    children: [
      { path: 'students-one', component: StudentsOneComponent },
      { path: 'students-two', component: StudentsTwoComponent },
      { path: 'todo-one', component: TodoOneComponent },
    ]
  },
];

@NgModule({
  declarations: [
    StudentsOneComponent,
    StudentsTwoComponent,
    TodoListComponent,
    TodoListItemComponent,
    TodoOneComponent,
    TodoFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    TodoService
  ]
})
export class RxJsSamplesModule { }
