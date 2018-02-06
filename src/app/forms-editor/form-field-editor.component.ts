import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'form-field-editor',
  template: `
    <form (ngSubmit)="save(formRef)" #formRef="ngForm">
      <div class="form-group">
        <label>Field Name</label>
        <input type="text" class="form-control" [(ngModel)]="field_data.name" name="name">
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" [(ngModel)]="field_data.active" name="active"> Active
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="radio" [value]="true" [(ngModel)]="field_data.enabled" name="enabled"> Enabled 
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="radio" [value]="false" [(ngModel)]="field_data.enabled"  name="enabled"> Disabled 
        </label>
      </div>
      <div class="form-group">
        <label>Field Hints</label>
        <textarea class="form-control" [(ngModel)]="field_data.hints" name="hints"></textarea>
      </div>

      <div class="form-group">
        <label>Field Type</label>
        <select class="form-control" [(ngModel)]="field_data.type" name="type">
          <option *ngFor="let option of fieldTypes" [ngValue]="option.type">{{option.label}}</option>
        </select>
      </div>

      <div class="form-group">
        <button class="btn btn-sucess">Save</button>
      </div>

    </form>
    <hr>
      <pre>Inner Model: {{ field_data | json }}</pre>
  `,
  styles: []
})
export class FormFieldEditorComponent implements OnInit {

  @Input('data')
  field_data = {}

  @Output()
  dataChange = new EventEmitter()

  save(formRef){
    this.dataChange.emit(this.field_data)
  }

  fieldTypes = [
    { type: 'text', label:'Text Field'},
    { type: 'checkbox', label:'Checkbox Field'},
    { type: 'select', label:'Select Field'},
  ]

  constructor() { }

  ngOnInit() {
  }

}
