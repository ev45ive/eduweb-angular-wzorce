import { Component, OnInit } from '@angular/core';
import { FormControl, FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'form-creator',
  template: `
  <form [formControl]="formCreator">
      <div class="form-group">
        <label>Form name</label>
        <input [formControl]="formTitle" name="title" class="form-control" />
      </div>  

      <button (click)="add()">add</button>

      <pre>{{formCreator.value | json }} </pre>
    </form>
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
          'title':this.formTitle,
          'fields': this.formFields
        })
    this.formFields.push(new FormControl(''))

    console.log(this.formTitle)
  }

  add() {
    this.formFields.push(new FormControl(''))
  }

  ngOnInit() {
  }

}
