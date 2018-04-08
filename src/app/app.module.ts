import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navigation/navbar.component';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';
import { RegistrationModule } from './registration/registration.module';
import { TodosModule } from './todos/todos.module';
import { AppRoutingModule } from './app.routing.module';
import { HomeComponent } from './navigation/home.component';
import { PageNotFoundComponent } from './navigation/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AuthModule,
    RegistrationModule,
    ProfileModule,
    TodosModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
