import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsEditorComponent } from './forms-editor.component';
import { FormFieldEditorComponent } from './form-field-editor.component';
import { FormsModule } from '@angular/forms'

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [FormsEditorComponent, FormFieldEditorComponent],
  exports: [FormsEditorComponent]
})
export class FormsEditorModule { }
