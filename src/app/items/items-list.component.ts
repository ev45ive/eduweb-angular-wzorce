import { Component, OnInit } from '@angular/core';
import { ItemsDataService } from './items-data.service';

@Component({
  selector: 'items-list',
  template: `
    <div class="list-group">
      <div class="list-group-item" *ngFor="let item of items">
        {{item.name}}
      </div>
    </div>
    <input class="form-control" (keyup.enter)=" items.push({name:$event.target.value})">
  `,
  styles: []
})
export class ItemsListComponent implements OnInit {

  items = []

  constructor(private service:ItemsDataService) { 
    this.items = service.getData()
  }

  ngOnInit() {
  }

}
