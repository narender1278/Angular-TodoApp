import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoosComponent } from './Components/todoos/todoos.component';
import { TodoItemComponent } from './Components/todo-item/todo-item.component';
import { AddTodooComponent } from './Components/add-todoo/add-todoo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodoosComponent,
    TodoItemComponent,
    AddTodooComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
