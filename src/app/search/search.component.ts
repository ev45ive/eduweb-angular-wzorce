import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { SearchService } from './search.service';

@Component({
  selector: 'search',
  template: `
    <div class="row">
      <div class="col">
        <search-form (queryChange)="search($event)"></search-form>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <results-list [items]="posts$ | async"></results-list>
      </div>
    </div>
  `,
  styles: []
})
export class SearchComponent implements OnInit {

  posts

  posts$

  search(query){
    this.posts$ = this.searchSerivce.search(query)
  }

  constructor(private searchSerivce:SearchService) { }

  ngOnInit() {
  }

}
