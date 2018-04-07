import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from './models/user';
import { Subject } from 'rxjs/Subject'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { ReplaySubject } from 'rxjs/ReplaySubject'
import {multicast, refCount, share, shareReplay, switchMap, filter, tap } from 'rxjs/operators'
import { ConnectableObservable } from 'rxjs/observable/ConnectableObservable';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class ProfileService {

  api_url = 'http://localhost:3000/users/'

  private user_request:Observable<User>

  getUserProfile(){

    if(!this.user_request){
      this.user_request = 
      this.auth.getUserId()
      .pipe(
        tap(console.log),
        switchMap(id => this.http
          .get<User>(this.api_url + id)
        )
      )
      .pipe(
        shareReplay()
      )
    }

    return this.user_request
  }

  clearCache(){
    this.user_request = null
  }

  constructor(private http:HttpClient,
            private auth:AuthService) {

    // setInterval(()=>{
    //   this.clearCache()
    // },5000)
  }

}
