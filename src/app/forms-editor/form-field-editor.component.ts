import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'form-field-editor',
  template: `
    <div>
      <div class="form-group">
        <label>Field Name</label>
        <input type="text" class="form-control" [(ngModel)]="field_data.name">
      </div>

      <pre>Model: {{ field_data | json }}</pre>
    </div>
  `,
  styles: []
})
export class FormFieldEditorComponent implements OnInit {

  field_data = {
    name: 'Default value'
  }

  constructor() { }

  ngOnInit() {
  }

}
