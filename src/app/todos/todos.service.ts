import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Todo } from './models/todo';
import { shareReplay, publishReplay, tap, publish, multicast } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TodosService {
  
  private todos//:Observable<Todo[]>
  private url = 'http://localhost:3000/todos/'

  constructor(private http:HttpClient,
          private auth:AuthService) { }

  queryTodos(){
    if(!this.todos){
      this.todos = this.http
      .get<Todo[]>(this.url+'?userId=1')
      .pipe(
        // shareReplay()
        multicast(new Subject())
      )
    }
    setTimeout(()=>{
      this.todos.connect()
    },100)
    return this.todos
  }

  createTodo(todo:Todo){
    // this.todos = null
    
    return this.http.post(this.url,todo,{
      headers:{
        'Authorization':'Bearer ' + this.auth.getToken()
      }
    }).pipe(
      tap(()=>{
        this.todos.connect()
      })
    )
  }

}
