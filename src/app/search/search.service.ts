import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SearchService<T, Key extends keyof T> {

  save(item: T) {
    this.http.put(this.url,item).subscribe(response => {
      console.log(response)
    })
  }

  url = 'http://localhost:3000/posts'

  constructor(private http: HttpClient) { }

  results: Observable<T[]>

  key: T[Key]


  private execute() {
    const params = new HttpParams({
      fromObject: this.params
    })

    this.results = this.http.get<T[]>(this.url, {
      params
    })
  }

  private params = {}

  private setQuery(queryParams) {
    this.params = {
      title_like: queryParams.query
    }
  }

  search(query) {
    this.setQuery({
      query
    })
    this.execute()

    return this.results
    // .subscribe( posts => this.posts = posts)
  }
}
