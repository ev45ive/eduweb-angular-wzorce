import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { User } from './models/user';

@Component({
  selector: 'profile',
  template: `
    <div *ngIf="profile">
      <h3>User Profile</h3>
      <p>Name:</p>
      <p>{{profile.name}}</p>
      <p>Username:</p>
      <p>{{profile.username}}</p>
    </div>
  `,
  styles: []
})
export class ProfileComponent implements OnInit {

  profile:User

  constructor(private profileService:ProfileService) { }

  ngOnInit() {
    this.profileService.getUserProfile()
    .subscribe(user =>{
      this.profile = user
    })
  }

}
