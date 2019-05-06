import { TestBed, inject } from '@angular/core/testing';

import { TodoService } from './todo-service.service';

describe('TodoServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoService]
    });
  });

  it('should be created', inject([TodoService], (service: TodoService) => {
    expect(service).toBeTruthy();
  }));
  
  it('should test addTodo', inject([TodoService], (service: TodoService) => {
    const todo = {
      task: 'Test task 1',
      isCompleted: false,
      isArchive: false
    };
    expect(service.addTodo(todo).length).toBe(1);
  }));

});
