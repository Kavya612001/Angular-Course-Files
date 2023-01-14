import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isButtonClicked:boolean = false;
  timesClicked:Date[] = [];
  count: number = 0;

  onButtonClick() {
    this.isButtonClicked = !this.isButtonClicked;
    // this.timesClicked.push(++this.count);
    this.timesClicked.push(new Date());
  }
}
