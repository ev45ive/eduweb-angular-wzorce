import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldsMatchDirective } from './fields-match.directive'
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [RegistrationComponent, FieldsMatchDirective],
  exports: [RegistrationComponent, FieldsMatchDirective]
})
export class ValidationModule { }
