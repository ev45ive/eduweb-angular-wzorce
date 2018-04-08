import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './navigation/home.component';
import { LoginComponent } from './auth/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProfileComponent } from './profile/profile.component';
import { PageNotFoundComponent } from './navigation/page-not-found.component';
import { QuickTodoComponent } from './todos/quick-todo.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path:'not-found',
    component: PageNotFoundComponent
  },
  {
    path:'quick-todo',
    component: QuickTodoComponent,
    outlet:'popup'
  },
  {
    path: '',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'**',
    redirectTo:'not-found',
    pathMatch:'full'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // enableTracing: true,
      // useHash: true,
      // errorHandler:()=>{},
      onSameUrlNavigation:'reload',
      // initialNavigation:true,
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
