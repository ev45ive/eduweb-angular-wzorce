import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'results-list',
  template: `
    <div class="list-group">
      <div class="list-group-item" 
        *ngFor="let item of items" 
        [class.active]="selected?.id == item.id"
        (click)="select(item)">
        {{item.title}}
      </div>
    </div>
  `,
  styles: []
})
export class ResultsListComponent implements OnInit {

  @Input()
  items = []

  selected

  select(item){
    this.selected = item
    this.selectedChange.emit(item)
  }

  @Output()
  selectedChange = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

}
