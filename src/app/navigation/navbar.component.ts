import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'navbar',
  template: `
  <nav class="navbar navbar-expand navbar-light bg-light mb-2">
  <div class="container">
    <div class="navbar-collapse">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="#/">
            Home
          </a>
        </li>
        <ng-container *ngIf="auth.isAuthenticated">
          <li class="nav-item">
            <a class="nav-link" href="#/profile">
              Profile
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/todos">
              Todos
            </a>
          </li>
        </ng-container>
      </ul>
    </div>
    <div class="navbar-right">
      <span class="navbar-text">
        <profile-bar></profile-bar>
      </span>
    </div>
  </div>
</nav>
  `,
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor(protected auth:AuthService) { }

  ngOnInit() {
  }

}
