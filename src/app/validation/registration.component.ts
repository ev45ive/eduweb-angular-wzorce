import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'registration',
  template: `
    <h3>Registration</h3>
    <form [formGroup]="registrationForm">
      <div class="form-group">
        <label>Username</label>
        <input type="text" class="form-control" formControlName="username">
        <div class="validation-feedback" 
            *ngIf="registrationForm.get('username').touched || registrationForm.get('username').dirty">
          <div *ngIf="registrationForm.get('username').hasError('required')">
            Field is required
          </div>
          <div *ngIf="registrationForm.get('username').getError('minlength') as error">
            Field has to have at least {{error.requiredLength}} letters
          </div>
        </div>
      </div>
      <div class="form-group">
        <label>E-Mail:</label>
        <input type="text" class="form-control" formControlName="email">
        <div class="validation-feedback"
            *ngIf="registrationForm.get('email').touched || registrationForm.get('email').dirty">
          <div *ngIf="registrationForm.get('email').hasError('required')">
            Field is required
          </div>
          <div *ngIf="registrationForm.get('email').hasError('email')">
            E-mail format is incorrect
          </div>
        </div>
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="text" class="form-control" formControlName="password">
        <div class="validation-feedback"
            *ngIf="registrationForm.get('password').touched || registrationForm.get('password').dirty">
          <div *ngIf="registrationForm.get('password').hasError('required')">
            Field is required
          </div>
          <div *ngIf="registrationForm.get('password').hasError('pattern')">
            Password has to contain Uppercase, Lowercase letters and number
          </div>
        </div>
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
  styles: [`
    form .ng-invalid.ng-touched,
    form .ng-invalid.ng-dirty {
        border: 2px solid red !important;
    }
    form .ng-invalid.ng-touched ~ .validation-feedback,
    form .ng-invalid.ng-dirty ~ .validation-feedback {
      color: red;
    }
  `]
})
export class RegistrationComponent implements OnInit {

  registrationForm = this.form.group({
    username: this.form.control('',[
      Validators.required,
      Validators.minLength(3)
    ]),
    email: this.form.control('',[
      Validators.required,
      Validators.email
    ]),
    password: this.form.control('',[
      Validators.required,
      Validators.pattern('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$')
    ]),
    repeat_password: this.form.control(''),
  })

  constructor(private form:FormBuilder) { }
  
  ngOnInit() {
    console.log(this.registrationForm)

    // this.registrationForm.get('username').hasError
  }

}
