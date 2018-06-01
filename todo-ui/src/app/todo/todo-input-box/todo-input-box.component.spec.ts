import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoInputBoxComponent } from './todo-input-box.component';
import {FormsModule} from '@angular/forms';

describe('TodoInputBoxComponent', () => {
  let component: TodoInputBoxComponent;
  let fixture: ComponentFixture<TodoInputBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ TodoInputBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoInputBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
