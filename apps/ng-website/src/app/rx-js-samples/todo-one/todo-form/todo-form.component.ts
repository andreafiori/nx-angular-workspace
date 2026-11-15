import { Component, OnInit } from '@angular/core';

import { Todo } from '../../shared/todo';
import { TodoService } from '../../shared/todo-service.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: []
})
export class TodoFormComponent implements OnInit {

  todo: Todo;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.clear();
  }

  clear() {
    this.todo = { task: '', isCompleted: false, isArchive: false };
  }

  onSave() {
    this.todoService.addTodo(this.todo);
    this.clear();
  }

}
