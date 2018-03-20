import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, AbstractControl, FormArray, FormBuilder } from '@angular/forms';

class SpecialFormGroup extends FormGroup{
  constructor(controls){
    super(controls)
    console.log('Special Group', Object.keys(controls))
  }
}

export class SpecialFormBuilder extends FormBuilder{
  group(controls){
    return new SpecialFormGroup(controls)
  }
}

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
  providers:[
    {
      provide: FormBuilder,
      useClass: SpecialFormBuilder
    }
  ],
  styles: []
})
export class FormCreatorComponent implements OnInit {

  formTitle: FormControl
  fieldOptions: FormGroup
  optionsForField: FormArray

  constructor(private fb:FormBuilder) { 

    this.formTitle = this.fb.control('batman')

    this.fieldOptions = this.fb.group({
      type: this.fb.control('text'),
      label: this.fb.control('')
    })
  
    this.optionsForField = this.fb.array([
      this.createOption('Test 1'),
      this.createOption('Test 2'),
      this.createOption('Test 3'),
    ])
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
