import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'old heading';
  constructor() {
    setTimeout(() => {
      this.title = 'new heading';
    }, 4000);
  }
}
