import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { pluck, filter, map, tap, shareReplay, multicast } from 'rxjs/operators';
import { User } from '../profile/models/user';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';

interface Credentials {
  username: string;
  password: string;
}

interface Session {
  token: string;
  user: User;
}

@Injectable()
export class AuthService {

  url = 'http://localhost:3000/login'

  private session = new BehaviorSubject<Session>(null)

  constructor(private http: HttpClient) { }

  getSession() {
    return this.session.asObservable()
  }

  //#region 
  getCurrentUser() {
    return this.getSession().pipe(
      map(session => session && session.user)
    )
  }

  getToken() {
    return this.getSession().pipe(
      map(session => session && session.token)
    )
  }
  //#endregion

  login(credentials: Credentials) {
    return this.http
      .post<Session>(this.url, credentials)
      .pipe(
        tap( session => {
          this.session.next(session)
        }, error => {
          this.logout()
        })
      )
  }

  logout() {
    console.log('logout')
    this.session.next(null)
  }
}
