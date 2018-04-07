import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { User } from './models/user';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'profile-bar',
  template: `
    <ng-container *ngIf="profile">
      Hello again, <strong>{{profile.name}}</strong>!
      | 
      <em (click)="logout()">Logout</em>
    </ng-container>
  `,
  styles: []
})
export class ProfileBarComponent implements OnInit {

  constructor(private profileService: ProfileService,
    private auth: AuthService) { }

  logout() {
    this.auth.logout()
  }

  profile: User

  ngOnInit() {
    this.profileService.getUserProfile()
      .subscribe(user => {
        this.profile = user
      })
  }

}
