import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ValidatorFn, ValidationErrors, FormControl, FormGroup } from '@angular/forms';

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
          <div *ngIf="registrationForm.get('password').getError('password') as error">
            Password has to contain
              <div *ngIf="error.lowercase"> - lowercase letters </div>
              <div *ngIf="error.uppercase"> - uppercase letters </div>
              <div *ngIf="error.number"> - numbers </div>
              <div *ngIf="error.special"> - special characters </div>
          </div>
        </div>
      </div>
      <div class="form-group">
        <label>Repeat Password</label>
        <input type="text" class="form-control" formControlName="repeat_password">
        <div class="validation-feedback"
        *ngIf="registrationForm.get('repeat_password').touched || registrationForm.get('repeat_password').dirty">
          <div *ngIf="registrationForm.hasError('password_match')">
            Passwords must match
          </div>
        </div>
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
    username: this.form.control('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    email: this.form.control('', [
      Validators.required,
      Validators.email
    ]),
    password: this.form.control('', [
      Validators.required,
      this.validatePassword({
        lowercase:true, 
        uppercase:true,
        number:true
      })
    ]),
    repeat_password: this.form.control('')
  },{
    validator: (control:FormGroup) => {
      const values = control.value

      if(values.password !== values.repeat_password){
        return {
          password_match:true
        }
      }
      return null
    }
  })

  validatePassword(options:{
    uppercase?:boolean;
    lowercase?:boolean;
    number?:boolean;
    special?:boolean;
  }):ValidatorFn{
  
    return (control: FormControl) => {

      const hasUppercase = control.value.match(/[A-Z]/)
      const hasLowercase = control.value.match(/[a-z]/)
      const hasNumber = control.value.match(/[\d]/)
      const hasSpecial = control.value.match(/[\W]/)

      const errors = {}
      let valid = true

      if(options.lowercase && !hasLowercase){
        errors['lowercase'] = true
        valid = false
      }
      if(options.uppercase && !hasUppercase){
        errors['uppercase'] = true
        valid = false
      }
      if(options.number && !hasNumber){
        errors['number'] = true
        valid = false
      }
      if(options.special && !hasSpecial){
        errors['special'] = true
        valid = false
      }

      return valid? null : {
        'password': errors
      }
    }
  }

  constructor(private form: FormBuilder) { }

  ngOnInit() {
    console.log(this.registrationForm)

    // this.registrationForm.get('username').hasError
  }

}
