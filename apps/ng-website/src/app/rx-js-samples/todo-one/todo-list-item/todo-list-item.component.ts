import { Component, OnInit, Input } from '@angular/core';

import { Todo } from '../../shared/todo';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: []
})
export class TodoListItemComponent implements OnInit {

  @Input() todo: Todo;

  constructor() { }

  ngOnInit() {
  }

  markCompleted() {
    this.todo.isCompleted = true;
  }

  archive() {
    this.todo.isArchive = true;
  }

}
