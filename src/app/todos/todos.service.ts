import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Todo } from './models/todo';
import { AuthService } from '../auth/auth.service';
import { catchError } from 'rxjs/operators';
import { empty } from 'rxjs/observable/empty'

@Injectable()
export class TodosService {

  url = 'http://localhost:3000/todos/'

  createTodo(todo: Partial<Todo>) {
    return this.http.post<Todo>(this.url, todo)
  }
  
  queryTodos() {
    return this.http.get<Todo[]>(this.url)
  } 

  constructor(private http: HttpClient, private auth: AuthService) { }

}
