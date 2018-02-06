import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'form-field-editor',
  template: `
    <div>
      <div class="form-group">
        <label>Field Name</label>
        <input type="text" class="form-control" [(ngModel)]="field_data.name">
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" [(ngModel)]="field_data.active"> Active
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="radio" [value]="true" [(ngModel)]="field_data.enabled"> Enabled 
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="radio" [value]="false" [(ngModel)]="field_data.enabled"> Disabled 
        </label>
      </div>
    <hr>
      <pre>Model: {{ field_data | json }}</pre>
    </div>
  `,
  styles: []
})
export class FormFieldEditorComponent implements OnInit {

  field_data = {
    name: 'Default value',
    active: true,
    enabled: true,
  }

  constructor() { }

  ngOnInit() {
  }

}
