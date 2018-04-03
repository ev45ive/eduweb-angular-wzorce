import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'registration',
  template: `
    <h3>Registration</h3>
    <form [formGroup]="registrationForm">
      <div class="form-group">
        <label>Username</label>
        <input type="text" class="form-control" formControlName="username">
      </div>
      <div class="form-group">
        <label>E-Mail:</label>
        <input type="text" class="form-control" formControlName="email">
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="text" class="form-control" formControlName="password">
      </div>
      <div class="form-group">
        <label>Repeat Password</label>
        <input type="text" class="form-control" formControlName="repeat_password">
      </div>
      <div class="form-group">
        <input type="submit" class="btn btn-success btn-block" value="Register">
      </div>
    </form>
  `,
  styles: []
})
export class RegistrationComponent implements OnInit {

  registrationForm = this.form.group({
    username: this.form.control(''),
    email: this.form.control(''),
    password: this.form.control(''),
    repeat_password: this.form.control(''),
  })

  constructor(private form:FormBuilder) { }
  
  ngOnInit() {
    console.log(this.registrationForm)
  }

}
