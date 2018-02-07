import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'forms-editor',
  template: `
    <h3>Form editor</h3>
    <div class="row">
      <div class="col-4">
        <form-field-editor [data]="fieldData" (dataChange)="formSaved($event)"></form-field-editor>
      </div>
      <div class="col" hidden>
        <pre>Outer Model: {{ fieldData | json }}</pre>
      </div>
    </div>
  `,
  styles: []
})
export class FormsEditorComponent implements OnInit {

  fieldData = {
    name: 'Default value',
    active: true,
    enabled: true,
    hints: 'Test Hints',
    type: 'text'
  }

  formSaved(data){
    this.fieldData = data
    console.log('saved',data)
  }

  constructor() { }

  ngOnInit() {
  }

}
