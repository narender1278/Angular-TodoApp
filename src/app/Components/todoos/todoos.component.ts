import { Component } from '@angular/core';
import { Todo } from '../../Todo';
@Component({
  selector: 'app-todoos',
  templateUrl: './todoos.component.html',
  styleUrls: ['./todoos.component.css']
})
export class TodoosComponent {
  localItem: string;
  todos:Todo[] =[];
  
  constructor() {
    this.localItem = localStorage.getItem("todos") as string;
    if (this.localItem === null) {
      this.todos = [];
    } else {
      this.todos = JSON.parse(this.localItem);
    }

  }

  deleteTodo(todo:Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }

  addTodo(todo:Todo) {
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));

  }
}
