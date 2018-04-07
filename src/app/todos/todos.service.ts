import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './models/todo';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class TodosService {

  url = 'http://localhost:3000/todos/'

  createTodo(todo: Partial<Todo>) {
    return this.http.post<Todo>(this.url, todo, {
      headers: {
        'Authorization': 'Bearer ' + this.auth.getToken()
      }
    })
  }
  constructor(private http: HttpClient, private auth: AuthService) { }

}
