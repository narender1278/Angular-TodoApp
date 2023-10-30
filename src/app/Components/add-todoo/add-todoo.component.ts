import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todoo',
  templateUrl: './add-todoo.component.html',
  styleUrls: ['./add-todoo.component.css']
})
export class AddTodooComponent {
  title!: string;
  desc!: string; 
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  
  onSubmit(): void {
    const sno = Date.now(); 
    const todo: Todo = {
      sno: sno,
      title: this.title,
      desc: this.desc,
      active: true
    };

    this.todoAdd.emit(todo);
  }
}
