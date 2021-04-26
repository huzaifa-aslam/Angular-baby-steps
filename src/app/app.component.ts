import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'old heading';
  constructor(router: Router) {
    setTimeout(() => {
      this.title = 'new heading';
    }, 4000);
  }
}
