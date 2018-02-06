import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'forms-editor',
  template: `
    <h3>Form editor</h3>
    <div class="row">
      <div class="col-3">
        <form-field-editor></form-field-editor>
      </div>
    </div>
  `,
  styles: []
})
export class FormsEditorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
