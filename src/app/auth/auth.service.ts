import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { pluck, filter, map } from 'rxjs/operators';
import { User } from '../profile/models/user';

interface Credentials {
  username:string;
  password: string;
}

@Injectable()
export class AuthService {

  url = 'http://localhost:3000/login'

  private token

  private user = new BehaviorSubject(null)

  getUserId(){
    return this.user.pipe(
      filter(user => !!user),
      map(user => user.id),
    )
  }

  getToken(){
    return this.token
  }

  login(credentials:Credentials){
    this.http.post<{
      token:string,
      user:User
    }>(this.url,credentials)
      .subscribe(response => {
        this.token = response.token
        this.user.next(response.user)
      },
      error => {
        if(error instanceof HttpErrorResponse){
          console.error(error.error)
          this.user.next(null)
        }
      })
  }

  constructor(private http:HttpClient) { }

}
