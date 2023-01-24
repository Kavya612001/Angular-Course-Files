import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from './customValidators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  projStatus =  ['Stable', 'Critical', 'Finished'];
  projForm: FormGroup;

  ngOnInit() {
    this.projForm = new FormGroup({
      'projName': new FormControl(null, [Validators.required, CustomValidators.forbiddenProjName.bind(this)], CustomValidators.asyncForbiddenProjName),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projStatus': new FormControl('Critical')
    });
  }


  onSubmit() {
    console.log(this.projForm);
    console.log(this.projForm.value);
  }
}
