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
  user: User;
  message?: string;
}

@Injectable()
export class AuthService {

  url = 'http://localhost:3000/login'

  private session = new BehaviorSubject<Session>(null)

  isAuthenticated = false

  state = this.session.pipe(
    map(session => session && !!session.token),
    tap(state => this.isAuthenticated = state)
  )

  logout(message?: string) {
    // this.http.post('/logout')
    this.session.next({
      ...this.session.getValue(),
      token: null,
      message
    })
  }

  getToken() {
    const session = this.session.getValue()
    return session && session.token
  }

  getCurrentUser() {
    const session = this.session.getValue()
    return session && session.user
  }
  
  getMessage(){
    const session = this.session.getValue()
    return session && session.message    
  }

  login(credentials: Credentials) {
    this.http.post(this.url, credentials)
      .subscribe((session: Session) => {
        this.session.next(session)

        // Simulate Token expiration
        setTimeout(() => {
          this.session.next({
            ...this.session.getValue(),
            token: 'OLD_INVALID_TOKEN'
          })
        }, 1000)
      },
        error => {
          if (error instanceof HttpErrorResponse) {
            console.error(error.error)
          }
        })
  }

  constructor(private http: HttpClient) { }

}
