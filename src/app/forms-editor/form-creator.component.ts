import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, AbstractControl, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'form-creator',
  template: `
    <div class="row">
      <div class="col">
      <form [formGroup]="formDefinition">
        <div class="form-group">
          <input type="text" class="form-control" formControlName="title" placeholder="Form name">
        </div>
        
        <div *ngFor="let field of getControlsList(this.formDefinition.get('fields')); let i = index" class="border rounded p-2 mb-2">

          <div class="close float-right pr-2" (click)="removeField(this.formDefinition.get('fields'),i)">&times;</div>
          <div [ngSwitch]="field.get('type').value">

            <div *ngSwitchCase=" 'text' ">
              <text-field [control]="field"></text-field>
            </div>

            <div *ngSwitchCase=" 'options' ">
              <options-field [control]="field"></options-field>
            </div>
          </div>
        </div>
        
        <div class="input-group my-2" [formGroup]="createField">
          <select formControlName="type" class="form-control">
            <option value="text">Text Field</option>
            <option value="options">Options Field</option>
          </select>
          <input type="text" class="form-control" placeholder="Field name" formControlName="name">
          <button (click)="addField()" class="btn">Add Field</button>
        </div>


        
      </form>

      
      </div>
      <div class="col-6">
        <pre>{{formDefinition.value | json }}</pre>
      </div>
    </div>
  `,
  styles: []
})
export class FormCreatorComponent implements OnInit {

  formDefinition: FormGroup

  createField: FormGroup

  addField(){
    const fields = this.formDefinition.get('fields') as FormArray
    const fieldDefinition = this.createField.value
    if(!fieldDefinition.name){
      return
    }
    switch(fieldDefinition.type){
      case 'options':
        fields.push(this.createOptionsField(fieldDefinition))
      break;
      case 'text':
      default:
        fields.push(this.createTextField(fieldDefinition))
    }
    this.createField.reset({
      type:'text'
    })
  }

  removeField(fields: FormArray, index: number){
    fields.removeAt(index)
  }

  constructor(private fb:FormBuilder) { 

    this.createField = this.fb.group({
      name: this.fb.control(''),
      type: this.fb.control('text')
    })

    this.formDefinition = this.fb.group({
      title: this.fb.control(''),
      fields: this.fb.array([])
    })
  }

  createTextField({name, label = ''}){
    return this.fb.group({
      type: this.fb.control('text'),
      name: this.fb.control(name),
      label: this.fb.control(label),
    })
  }


  createOptionsField({ name, label = '' }){
    return this.fb.group({
      type: this.fb.control('options'),
      label: this.fb.control(''),
      options: this.fb.array([])
    })
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
