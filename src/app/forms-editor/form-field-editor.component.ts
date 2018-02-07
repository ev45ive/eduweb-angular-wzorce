import { Component, OnInit, Input, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'form-field-editor',
  template: `
    <form (ngSubmit)="save()">
      <div class="form-group">
        <label>Field Name</label>
        <input type="text" class="form-control" ngModel name="name">
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" ngModel name="active"> Active
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="radio" [value]="true" ngModel name="enabled"> Enabled 
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="radio" [value]="false" ngModel  name="enabled"> Disabled 
        </label>
      </div>
      <div class="form-group">
        <label>Field Hints</label>
        <textarea class="form-control" ngModel name="hints"></textarea>
      </div>

      <div class="form-group">
        <label>Field Type</label>
        <select class="form-control" ngModel name="type">
          <option *ngFor="let option of fieldTypes" [ngValue]="option.type">{{option.label}}</option>
        </select>
      </div>

      <div class="form-group">
        <label>Extra</label>
        <input type="text" class="form-control">
      </div>

      <div class="form-group">
      <button class="btn btn-success">Save</button>
      <button class="btn btn-danger" type="button" (click)="cancel()">Cancel</button>
      </div>

      <pre>Model: {{form.value | json }}</pre>
    </form>
  `,
  styles: []
})
export class FormFieldEditorComponent implements OnInit {

  extraChanged(extra){
    console.log(extra)
  }

  @Input('data')
  field_data

  @Output()
  dataChange = new EventEmitter()

  @ViewChild(NgForm)
  form: NgForm

  ngOnInit() {
    setTimeout(()=>{
      // this.form.setValue(this.field_data)
      this.form.resetForm(this.field_data)
    },0)
  }

  cancel(){
    this.form.setValue(this.field_data)
    // this.form.reset()
  }

  save(){
    this.dataChange.emit(this.form.value)
  }

  fieldTypes = [
    { type: 'text', label:'Text Field'},
    { type: 'checkbox', label:'Checkbox Field'},
    { type: 'select', label:'Select Field'},
  ]

  constructor() { }


}
