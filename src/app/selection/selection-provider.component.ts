import { Component, OnInit } from '@angular/core';
import { SelectionService } from './selection.service';

@Component({
  selector: 'selection-provider',
  template: `
    <span>{{ selection.selection | json }} </span>
    <ng-content></ng-content>
  `,
  providers:[
    SelectionService
  ],
  styles: []
})
export class SelectionProviderComponent implements OnInit {

  constructor(public selection:SelectionService<any>) { }

  ngOnInit() {
  }

}
