import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

interface Credentials {
  username:string;
  password: string;
}

@Injectable()
export class AuthService {

  url = 'http://localhost:3000/login'

  login(credentials:Credentials){
    this.http.post(this.url,credentials)
      .subscribe(response => {
        console.log(response)
      },
      error => {
        if(error instanceof HttpErrorResponse){
          console.error(error.error)
        }
      })
  }

  constructor(private http:HttpClient) { }

}
