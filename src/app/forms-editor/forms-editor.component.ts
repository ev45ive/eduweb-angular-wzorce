import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'forms-editor',
  template: `
    <h3>Form editor</h3>
    <div class="row">
      <div class="col">
        <form-creator></form-creator>
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
