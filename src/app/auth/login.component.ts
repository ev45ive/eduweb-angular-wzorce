import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'login',
  template: `
    <form [formGroup]="loginForm" (submit)="login()">
      <div class="form-group">
        <label for="">Username</label>
        <input type="text" class="form-control" formControlName="username">
      </div>
      <div class="form-group">
        <label for="">Password</label>
        <input type="text" class="form-control" formControlName="password">
      </div>
      <div class="form-group">
        <input type="submit" class="btn btn-success mx-auto" value="Login">
      </div>
    </form>
  `,
  styles: []
})
export class LoginComponent implements OnInit {


  loginForm = this.auth.getLoginForm()

  constructor(private auth:AuthService){}

  login(){
    this.auth.login(this.loginForm.value)
  }

  ngOnInit() {
  }

}
