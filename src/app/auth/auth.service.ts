import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '../profile/models/user';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { map, tap } from 'rxjs/operators';

interface Credentials {
  username: string;
  password: string;
}

interface Session {
  token: string;
  user: User
}

@Injectable()
export class AuthService {

  url = 'http://localhost:3000/login'

  private session = new BehaviorSubject<Session>(null)

  isAuthenticated = false 
  
  state = this.session.pipe(
    map( session => !!session),
    tap( state => this.isAuthenticated = state )
  )

  getToken(){
    const session = this.session.getValue()
    return session && session.token
  }

  getCurrentUser(){
    const session = this.session.getValue()
    return session && session.user
  }

  login(credentials: Credentials) {
    this.http.post(this.url, credentials)
      .subscribe((session:Session) => {
        this.session.next(session)
      },
        error => {
          if (error instanceof HttpErrorResponse) {
            console.error(error.error)
          }
        })
  }

  constructor(private http: HttpClient) { }

}
