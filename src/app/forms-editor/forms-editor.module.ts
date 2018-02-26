import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsEditorComponent } from './forms-editor.component';
import { FormFieldEditorComponent } from './form-field-editor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormCreatorComponent } from './form-creator.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [FormsEditorComponent, FormFieldEditorComponent, FormCreatorComponent],
  exports: [FormsEditorComponent]
})
export class FormsEditorModule { }
