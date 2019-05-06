import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Todo } from '../../shared/todo';
import { TodoService } from '../../shared/todo-service.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: []
})
export class TodoListComponent implements OnInit {

  search: string;
  todos: Observable<Todo[]>;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.onSearch();
  }

  onSearch() {
    if (this.search) {
      this.todos = this.todos.pipe(map(
        items => items.filter(item => item.task.includes(this.search))
      ));
    } else {
      this.todos = this.todoService.onUpdate();
    }

    this.todos.subscribe(items => {
      console.log(items);
    });
  }

  getOpenItems() {
    return this.todos.pipe( map(items => items.filter(item => item.isArchive == false) ));
  }

  getArchiveItems() {
    return this.todos.pipe(map(items =>
      items.filter(item => item.isArchive == true)
    ));
  }

}
