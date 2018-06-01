import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListComponent } from './todo-list.component';
import {TodoService} from '../todo.service';
import {By} from '@angular/platform-browser';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;
  let todoService: Partial<TodoService>;

  beforeEach(async(() => {
    todoService = {
      items: ['one', 'two']
    };
    TestBed.configureTestingModule({
      declarations: [ TodoListComponent ],
      providers: [{provide: TodoService, useValue: todoService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display the todo list', () => {
    const items = fixture.debugElement.queryAll(By.css('li'));
    expect(items.length).toBe(2);
  });
});
