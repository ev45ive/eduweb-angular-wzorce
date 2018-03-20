import { Component, OnInit, Input } from '@angular/core';
import { FormArray, AbstractControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'options-field',
  template: `
    <h6>Options Field:</h6>
    <div class="form-group" [formGroup]="control">
      <label>Label:</label>
      <input type="text" class="form-control" formControlName="label">
    </div>
    <div class="form-group">
      <label>Checkbox Options</label>
      <div class="input-group" 
        *ngFor="let option of getControlsList(control.get('options')); let i = index" [formGroup]="option">
        <div class="input-group-prepend">
            <div class="input-group-text">
              <input type="checkbox" class="form-check" formControlName="selected">
          </div>
        </div>
        <input type="text" class="form-control" formControlName="value">
        <span class="close" (click)="removeOption(control.get('options'), i)">&times;</span>
      </div>
      <button class="btn mt-1" (click)="addOption(control.get('options'))">Add Option</button>
    </div>
  `,
  styles: []
})
export class OptionsFieldComponent implements OnInit {

  @Input()
  control

  constructor(private fb:FormBuilder) { }

  
  addOption(options: FormArray){
    options.push( this.createOption() )
  }

  removeOption(options: FormArray, index:number){
    options.removeAt(index)
  }

  getControlsList(fields:AbstractControl){
    if(!(fields instanceof FormArray)){
      return []
    }
    return fields.controls
  }

  
  createOption(defaultValue = '', selected = false){
    return this.fb.group({
      selected: this.fb.control(selected),
      value: this.fb.control(defaultValue)
    })
  }

  ngOnInit() {
  }

}
