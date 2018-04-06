import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { User } from './models/user';

@Component({
  selector: 'profile-bar',
  template: `
    <ng-container *ngIf="profile">
      Hello again, <strong>{{profile.name}}</strong>!
    </ng-container>
  `,
  styles: []
})
export class ProfileBarComponent implements OnInit {

  constructor(private profileService:ProfileService) { }

  profile:User

  ngOnInit() {
    this.profileService.getUserProfile()
    .subscribe(user =>{
      this.profile = user
    })
  }

}
