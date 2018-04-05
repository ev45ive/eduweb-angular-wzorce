import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'

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
        <results-list [items]="posts"></results-list>
      </div>
    </div>
  `,
  styles: []
})
export class SearchComponent implements OnInit {

  posts

  search(query){
    const params = new HttpParams({
      fromObject:{
        q: query
      }
    })
    
    this.http.get('http://localhost:3000/posts',{
      params
    })
    .subscribe( posts => this.posts = posts)
  }

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

}
