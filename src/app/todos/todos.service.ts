import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Todo } from './models/todo';
import { AuthService } from '../auth/auth.service';
import { catchError, share, map, switchMap, filter } from 'rxjs/operators';
import { empty } from 'rxjs/observable/empty'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

interface Params{
  perpage: number;
  query: string
}

@Injectable()
export class TodosService {

  url = 'http://localhost:3000/todos/'

  params = new BehaviorSubject<Params>({
    query:'',
    perpage:10
  })

  createTodo(todo: Partial<Todo>) {
    return this.http.post<Todo>(this.url, todo)
  }

  setPerPage(perpage:number){
    this.params.next({
      ...this.params.getValue(),
      perpage
    })
  }
  
  query(query){
    this.params.next({
      ...this.params.getValue(),
      query
    })
  }

  getTodos() {
    return this.params.pipe(
      filter(params => !!params.query),
      switchMap( params => this.http.get<Todo[]>(this.url,{
        params:{
          q: params.query,
          _limit: ""+params.perpage
        }
      })),
      share()
    )
  } 

  constructor(private http: HttpClient, private auth: AuthService) { }

}
