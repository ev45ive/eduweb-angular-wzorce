import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { User } from './models/user';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'profile-bar',
  template: `
    <ng-container *ngIf="profile">
      Hello again, <strong>{{profile.name}}</strong>!
      <span (click)="auth.logout()"> | Logout </span>
    </ng-container>
  `,
  styles: []
})
export class ProfileBarComponent implements OnInit {

  constructor(private profileService:ProfileService,
              protected auth:AuthService) { }

  profile:User

  ngOnInit() {
    this.profileService.getUserProfile()
    .subscribe(user =>{
      this.profile = user
    })
  }

}
