import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsEditorComponent } from './forms-editor.component';
import { FormFieldEditorComponent } from './form-field-editor.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FormsEditorComponent, FormFieldEditorComponent],
  exports: [FormsEditorComponent]
})
export class FormsEditorModule { }
