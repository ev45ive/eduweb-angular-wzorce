import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, AbstractControl, FormArray } from '@angular/forms';

@Component({
  selector: 'form-creator',
  template: `
    <div class="row">
      <div class="col">
        <div class="form-group">
          <input type="text" class="form-control" [formControl]="formTitle">
        </div>

        <div class="form-group">
          <label>Checkbox Options</label>
          <div class="input-group" *ngFor="let option of optionsForField.controls" [formGroup]="option">
            <div class="input-group-prepend">
                <div class="input-group-text">
                  <input type="checkbox" class="form-check" formControlName="selected">
              </div>
            </div>
            <input type="text" class="form-control" formControlName="value">
          </div>

        </div>
        
        <div class="form-group" [formGroup]="fieldOptions">
          <label>Label:</label>
          <input type="text" class="form-control" formControlName="label">
        </div>
      </div>
      <div class="col-4">
        <pre>{{fieldOptions.value | json }}</pre>
        <pre>{{optionsForField.value | json }}</pre>
      </div>
    </div>
  `,
  styles: []
})
export class FormCreatorComponent implements OnInit {

  formTitle: FormControl
  fieldOptions: FormGroup
  optionsForField: FormArray

  constructor() { 

    this.formTitle = new FormControl('batman')

    this.fieldOptions = new FormGroup({
      type: new FormControl('text'),
      label: new FormControl('')
    })
  
    this.optionsForField = new FormArray([
      this.createOption('Test 1'),
      this.createOption('Test 2'),
      this.createOption('Test 3'),
    ])

    console.log(this.fieldOptions)
  }

  createOption(defaultValue, selected = false){
    return new FormGroup({
      selected: new FormControl(selected),
      value: new FormControl(defaultValue)
    })
  }

  ngOnInit() {
  }

}
