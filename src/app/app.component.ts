import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome!';
  constructor() {
    // setTimeout( ()=> {
    //   this.title = 'Toodo App'       
    // }, 2000);
  }
  
}
