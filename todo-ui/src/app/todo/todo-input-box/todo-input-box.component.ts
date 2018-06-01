import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-input-box',
  templateUrl: './todo-input-box.component.html',
  styleUrls: ['./todo-input-box.component.css']
})
export class TodoInputBoxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addItem(newItem: string) {
    console.log(newItem);
  }

}
