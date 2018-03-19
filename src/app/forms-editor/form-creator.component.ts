import { Component, OnInit } from '@angular/core';
import { FormControl, FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'form-creator',
  template: `
  <div class="row">
    <div class="col">
      <form [formGroup]="formCreator">
        <div class="form-group">
          <label>Form name</label>
          <input [formControl]="formTitle" class="form-control" />
        </div>  

        <h4>Fields</h4>
        <div class="border rounded mb-2"  *ngFor="let field of formFields">
          <span class="close float-right p-2">&times;</span>
          <div class="form-group px-4">
            <label>Label</label>
            <input [formControl]="field.get('label')" class="form-control" />
          </div>  
          <div class="form-group px-4" *ngIf="field.get('type').value == 'select'">
            <label>Options</label>
            <input *ngFor="let option of field.get('options').controls" [formControl]="field.get('options.0.value')" class="form-control" />
          </div>  
        </div>

        <div class="input-group">
          <button class="btn" (click)="add(typeSelect.value)">Add Field</button>
          <select class="form-control" #typeSelect>
            <option value="text" selected>Text Field</option>
            <option value="select">Select Field</option>
          </select>
        </div>
      </form>
    </div>
    <div class="col-4">
      <pre>{{formCreator.value | json }} </pre>

      <div class="form-group" *ngFor="let field of formCreator.value.fields">
        <label>{{field.label}}</label>
        <input type="text" class="form-control">
      </div>
    </div>
  </div>
  `,
  styles: []
})
export class FormCreatorComponent implements OnInit {

  formTitle: FormControl
  formCreator: FormGroup
  formFields: FormArray

  constructor() {
    this.formTitle = new FormControl('')
    this.formFields = new FormArray([])
    this.formCreator = new FormGroup({
      'title': this.formTitle,
      'fields': this.formFields
    })

    console.log(this.formTitle)
  }

  add(type) {
    switch (type) {
      case 'select':
        this.formFields.push(new FormGroup({
          type: new FormControl('select'),
          label: new FormControl(),
          options: new FormArray([
            new FormGroup({
              label: new FormControl(''),
              value: new FormControl(''),
            })
          ])
        }))
        break;
      case 'text':
      default:
        this.formFields.push(new FormGroup({
          type: new FormControl('text'),
          label: new FormControl()
        }))
    }
  }

  ngOnInit() {
  }

}
