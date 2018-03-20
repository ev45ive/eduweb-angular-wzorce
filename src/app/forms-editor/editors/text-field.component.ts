import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'text-field',
  template: `

  <h6>Text Field:</h6>
  <div class="form-group" [formGroup]="control">
    <label>Label:</label>
    <input type="text" class="form-control" formControlName="label">
    <label><input type="checkbox" (change)="addHints(control, $event.target.checked)"> Hints </label>
    <div *ngIf="control.get('hints')">
      <input type="text" class="form-control" formControlName="hints">
    </div>
  </div>
  `,
  styles: []
})
export class TextFieldComponent implements OnInit {

  @Input()
  control

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
  }

  addHints(field:FormGroup, checked:boolean){
    if(checked){
      field.addControl('hints', this.fb.control(''))
    }else{
      field.removeControl('hints')
    }
  }

}
