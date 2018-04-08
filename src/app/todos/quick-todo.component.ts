import { Component, OnInit } from '@angular/core';
import { TodosService } from './todos.service';

@Component({
  selector: 'quick-todo',
  template: `
    <div>      
    <div class="alert alert-danger" *ngIf="error">{{error}}</div>
    <div class="alert alert-success" *ngIf="message">{{message}}</div>

      <h3>Create Todo</h3>
      <div class="form-group">
        <input type="text" class="form-control" #titleRef>
      </div>
      <button class="btn btn-success" (click)="addTodo(titleRef.value)">Add Todo</button>
    </div>
  `,
  styles: []
})
export class QuickTodoComponent implements OnInit {

  error: string;
  message: string;

  constructor(protected todosService: TodosService) { }

  addTodo(title) {
    this.todosService.createTodo({
      title
    })
      .subscribe(() => {
        this.message = 'success!'
      }, err => {
        this.error = err.message
      })
  }

  ngOnInit() {
  }

}
