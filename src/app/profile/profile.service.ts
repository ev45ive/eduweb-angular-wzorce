import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from './models/user';
import { Subject } from 'rxjs/Subject'
import {multicast, refCount, share } from 'rxjs/operators'
import { ConnectableObservable } from 'rxjs/observable/ConnectableObservable';

@Injectable()
export class ProfileService {

  api_url = 'http://localhost:3000/users/'

  user_request = this.http
    .get<User>(this.api_url + '1')
    .pipe(
      // multicast(()=>new Subject<User>()),
      // refCount()
      share()
    )

  getUserProfile(){
    return this.user_request
  }

  constructor(private http:HttpClient) {
  }

}
