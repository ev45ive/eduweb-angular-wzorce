import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

interface Credentials{
  username:string;
  password:string;
}

interface AuthResponse{
  token:string;
  user: any
}

@Injectable()
export class AuthService {

  user

  token

  login(credentials:Credentials) {
    this.http.post<AuthResponse>('http://localhost:3000/login',credentials)
    .subscribe((response)=>{
      this.user = response.user
      this.token = response.token
    })
  }

  constructor(private fb:FormBuilder,private http:HttpClient) { }


  getLoginForm(){
    return this.fb.group({
      username: [''],
      password:['']
    })
  }

}
