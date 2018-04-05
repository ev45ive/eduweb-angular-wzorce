import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search-form',
  template: `
  <form class="input-group mb-2" (submit)="search(queryRef.value)">
    <input class="form-control" type="search" placeholder="Search" #queryRef autofocus>
    <div class="input-group-append">
      <div class="input-group-text">
        <input type="checkbox">
      </div>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </div>
  </form>
  `,
  styles: []
})
export class SearchFormComponent implements OnInit {

  search(query){
    this.queryChange.emit(query)
    return false
  }

  @Output()
  queryChange = new EventEmitter()

  constructor() { }

  ngOnInit() {
    this.search('')
  }

}
