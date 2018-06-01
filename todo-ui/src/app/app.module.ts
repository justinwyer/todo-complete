import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TodoListComponent} from './todo/todo-list/todo-list.component';
import {TodoModule} from './todo/todo.module';
import {TodoInputBoxComponent} from './todo/todo-input-box/todo-input-box.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TodoModule
  ],
  providers: [],
  bootstrap: [TodoInputBoxComponent, TodoListComponent]
})
export class AppModule { }
