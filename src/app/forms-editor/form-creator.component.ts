import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'form-creator',
  template: `
    <div class="row">
      <div class="col">
        <div class="form-group">
          <input type="text" class="form-control" [formControl]="formTitle">
        </div>
        
        <div class="form-group" [formGroup]="fieldOptions">
          <label>Label:</label>
          <input type="text" class="form-control" formControlName="label">
        </div>
      </div>
      <div class="col-4">
        <pre>{{fieldOptions.value | json }}</pre>
      </div>
    </div>
  `,
  styles: []
})
export class FormCreatorComponent implements OnInit {

  formTitle: FormControl
  fieldOptions: FormGroup

  constructor() { 

    this.formTitle = new FormControl('batman')

    this.fieldOptions = new FormGroup({
      type: new FormControl('text'),
      label: new FormControl('')
    })
  
    console.log(this.fieldOptions)
  }

  ngOnInit() {
  }

}
