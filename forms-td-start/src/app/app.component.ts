import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // f is a local reference attached to the form element
  @ViewChild('f') signupForm: NgForm; 
  defaultQuestion: string = 'pet';
  answer: string;
  genders = ['male', 'female'];
  user= {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  }
  submitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue(
    //   {
    //     userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // }
    // )
    // doesnt override other fields 
    this.signupForm.form.patchValue({
      userData: {
        username: 'Rajesh',
      }
    })
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }
onSubmit() {
  this.submitted = true;
  this.user.username = this.signupForm.value.userData.username;
  this.user.email = this.signupForm.value.userData.email;
  this.user.secretQuestion = this.signupForm.value.secret;
  this.user.answer = this.signupForm.value.questionAnswer;
  this.user.gender = this.signupForm.value.gender;

  this.signupForm.reset(); //resets the whole form
}
}
