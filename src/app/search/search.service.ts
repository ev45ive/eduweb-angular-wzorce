import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';

@Injectable()
export class SearchService {

  constructor(private http:HttpClient) { }

  search(query){
    const params = new HttpParams({
      fromObject:{
        title_like: query
      }
    })

    return this.http.get('http://localhost:3000/todos',{
      params
    })
    // .subscribe( posts => this.posts = posts)
  }
}
