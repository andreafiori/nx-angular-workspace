import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { Todo } from './todo';

@Injectable()
export class TodoService {

  private todos : BehaviorSubject<Todo[]>;
  private readonly todosAsObservable : Observable<Todo[]>;

  constructor() {
    this.todos = new BehaviorSubject(new Array());
    this.todosAsObservable = this.todos.asObservable();
  }

  addTodo(todo: Todo): Todo[] {
    const items = this.todos.getValue();
    items.push(todo);
    this.todos.next(items);

    return items;
  }

  onUpdate(): Observable<Todo[]> {
    return this.todos;
  }

}
