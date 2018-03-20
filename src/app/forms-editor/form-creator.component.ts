import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, AbstractControl, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'form-creator',
  template: `
    <div class="row">
      <div class="col">
      <form [formGroup]="formDefinition">
        <div class="form-group">
          <input type="text" class="form-control" formControlName="title">
        </div>

        <div *ngFor="let field of getControlsList(this.formDefinition.get('fields'))" class="border rounded p-2 mb-2">
          <div [ngSwitch]="field.get('type').value">

            <div *ngSwitchCase=" 'text' ">
              <h6>Text Field:</h6>
              <div class="form-group" [formGroup]="field">
                <label>Label:</label>
                <input type="text" class="form-control" formControlName="label">
              </div>
            </div>

            <div *ngSwitchCase=" 'options' ">
              <h6>Options Field:</h6>
              <div class="form-group" [formGroup]="field">
                <label>Label:</label>
                <input type="text" class="form-control" formControlName="label">
              </div>
              <div class="form-group">
                <label>Checkbox Options</label>
                <div class="input-group" *ngFor="let option of getControlsList(field.get('options'))" [formGroup]="option">
                  <div class="input-group-prepend">
                      <div class="input-group-text">
                        <input type="checkbox" class="form-check" formControlName="selected">
                    </div>
                  </div>
                  <input type="text" class="form-control" formControlName="value">
                </div>
              </div>
  
            </div>
          </div>
        </div>
        
      </form>

      
      </div>
      <div class="col-4">
        <pre>{{formDefinition.value | json }}</pre>
      </div>
    </div>
  `,
  styles: []
})
export class FormCreatorComponent implements OnInit {

  formDefinition: FormGroup

  constructor(private fb:FormBuilder) { 

    this.formDefinition = this.fb.group({
      title: this.fb.control(''),
      fields: this.fb.array([
        this.createTextField(),
        this.createOptionsField()
      ])
    })
  }

  createTextField(){
    return this.fb.group({
      type: this.fb.control('text'),
      label: this.fb.control('')
    })
  }

  createOptionsField(){
    return this.fb.group({
      type: this.fb.control('options'),
      label: this.fb.control(''),
      options: this.fb.array([
        this.createOption('Test 1'),
        this.createOption('Test 2'),
        this.createOption('Test 3'),
      ])
    })
  }

  getControlsList(fields:AbstractControl){
    if(!(fields instanceof FormArray)){
      return []
    }
    return fields.controls
  }

  createOption(defaultValue, selected = false){
    return this.fb.group({
      selected: this.fb.control(selected),
      value: this.fb.control(defaultValue)
    })
  }

  ngOnInit() {
  }

}
