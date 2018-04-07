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

  private authenticated:boolean

  private accessToken:string

  constructor(private http: HttpClient) {
    this.session.subscribe(session =>{
      this.authenticated = !!session || false
      this.accessToken = session && session.token
    })
   }

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
    return this.accessToken
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
    this.session.next(null)
  }
}
