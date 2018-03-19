import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'form-creator',
  template: `
    <p>
      form-creator works!
    </p>

    <div class="form-group">
      <input type="text" class="form-control" [formControl]="formTitle">
    </div>
  `,
  styles: []
})
export class FormCreatorComponent implements OnInit {

  formTitle: FormControl

  constructor() { 

    this.formTitle = new FormControl('batman')
  
    console.log(this.formTitle)
  }

  ngOnInit() {
  }

}
