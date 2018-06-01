import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoInputBoxComponent } from './todo-input-box/todo-input-box.component';
import {TodoService} from './todo.service';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TodoService],
  declarations: [TodoListComponent, TodoInputBoxComponent]
})
export class TodoModule { }
