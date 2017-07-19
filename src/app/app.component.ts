import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  article = 'Tesla';
  value: number = 1000;
  result: number = 0;
  result2: number = 0;


  onClick() {
    this.result = this.value * 1.19;
  }
  onClick2() {
    this.result2 = this.value * 1.16;
  }
}
