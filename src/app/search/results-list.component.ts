import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'results-list',
  template: `
    <div class="list-group">
      <div class="list-group-item" *ngFor="let item of items">
        {{item.title}}
      </div>
    </div>
  `,
  styles: []
})
export class ResultsListComponent implements OnInit {

  @Input()
  items = [
    {
      title:'Test'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
