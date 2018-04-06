import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { multicast, share, shareReplay, publishBehavior, publish, publishLast, map, publishReplay, refCount, tap} from 'rxjs/operators'
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { AsyncSubject } from 'rxjs/AsyncSubject';
import { ConnectableObservable } from 'rxjs/observable/ConnectableObservable';
import { Observable } from 'rxjs/Observable';
import { timer } from 'rxjs/observable/timer';

interface Profile {
  id?: number;
  name: string;
}

@Component({
  selector: 'profile',
  template: `
    <p>
      profile works!
    </p>

    <div *ngFor="let item of items">
      {{item}}: 
      <span *ngIf="profile$ |async as profile">
        <input type="text" [value]="profile.name" 
                          (change)="profile.name = $event.target.value">
      </span>
      <button (click)="items.splice(items.indexOf(item),1)">Remove</button>
    </div>
    <button (click)="addItem()">Push</button>
    <button (click)="connect()">Connect</button>
    <button (click)="reset()">Reset</button>
  `,
  styles: []
})
export class ProfileComponent implements OnInit {

  constructor(private http: HttpClient) { }

  profile$

  items = []

  second = false


  connect() {
    this.profile$.connect()
  }
  reset() {
    this.ngOnInit()
  }

  addItem() {
    this.items.push(this.items.length + 1)
    this.items.push(this.items.length + 1)
  }

  //https://medium.com/front-end-hacking/being-rxjs-subjects-savvy-4aec5c8da99e
  //https://medium.com/@_achou/rxswift-share-vs-replay-vs-sharereplay-bea99ac42168
  //https://github.com/ReactiveX/RxJS/issues/73#issuecomment-121230335
  ngOnInit() {
    const s = new BehaviorSubject(null)

    

    this.profile$ =
      // timer(2000,1000)
      this.http
        .get<Profile>('http://localhost:3000/users/1')
        .pipe(
          tap(null,null,() => console.log('completed')),
          // map(time => { let profile = {name: "" + time + + Date.now()}; return profile;}),
          // publishLast()
          // share()
          // shareReplay(1),
          // multicast(()=>{
          //   // console.log('new subject') 
          //   return new BehaviorSubject<Profile>(null)
          // }),
          // publish(),
          // publishBehavior(null),
          // publishReplay(1),
          publishLast(),
          refCount(),
        // Push, Push, Push, Connect
        // multicast(()=>new ReplaySubject<Profile>(1)),
        // multicast(s)
      )
    // console.log(s)


    // setTimeout(()=>{
    // (<ConnectableObservable<Profile>>this.profile$).connect()
    // },2000)
  }

}
