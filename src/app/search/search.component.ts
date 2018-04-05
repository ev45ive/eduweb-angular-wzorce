import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { SearchService } from './search.service';

interface Post {
  id: number;
  title: string;
}

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
        <results-list [items]="source.results | async" (selectedChange)="selected = $event"></results-list>
      </div>
      <div class="col">
        <post-editor *ngIf="selected" [post]="selected" (saved)="save($event)"></post-editor>
      </div>
    </div>
  `,
  providers: [
    {
      provide: SearchService,
      useClass: SearchService
    }
  ],
  styles: []
})
export class SearchComponent implements OnInit {
  
  selected:Post

  search(query) {
    this.source.search(query)
  }

  save(post){
    this.source.save(post)
  }

  constructor(protected source: SearchService<Post, 'id'>) {

  }

  ngOnInit() {
  }

}
