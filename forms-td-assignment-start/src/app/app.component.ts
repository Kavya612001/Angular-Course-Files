import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f') signupForm: NgForm;
  defaultSubscription = 'advanced';
  userData = {
    mail: '',
    subscription: '',
    password: ''
  }
  isSubmitted = false;
  subscriptions = ['basic', 'advanced', 'pro'];

  onSubmit() {
    this.isSubmitted = true;
    this.userData.mail = this.signupForm.value.email;
    this.userData.subscription = this.signupForm.value.subscriptions;
    this.userData.password = this.signupForm.value.password;
  }
}
