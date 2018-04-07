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
    return this.http.post<Todo>(this.url, todo, {
      headers: {
        'Authorization': 'Bearer ' + this.auth.getToken()
      }
    }).pipe(
      // map(...
      catchError((err, caught) => {
        
        if(err instanceof HttpErrorResponse){
          this.auth.logout('Not authorized to add Todos! Please log in first!')
          throw new Error('Not authorized! Please log in!')
        }

        return empty()
      })
    )
  }
  constructor(private http: HttpClient, private auth: AuthService) { }

}
