import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  isChecked: boolean = false;

  ngOnInit(): void {
    // Use a unique key for each checkbox based on the todo's unique identifier (e.g., sno)
    const localStorageKey = `todo-${this.todo.sno}-isChecked`;

    // Retrieve the checkbox state from local storage
    const savedCheckboxState = localStorage.getItem(localStorageKey);

    // If a value is found in local storage, parse it to a boolean
    // If not found, use false as the default state
    this.isChecked = savedCheckboxState ? savedCheckboxState === 'true' : false;
  }

  isCheckedChanged() {
    // Use the same unique key for storing the checkbox state
    const localStorageKey = `todo-${this.todo.sno}-isChecked`;

    // Store the checkbox state in local storage
    localStorage.setItem(localStorageKey, this.isChecked.toString());
  }

  onClick(todo: Todo) {
    this.todoDelete.emit(todo);
  }
}
