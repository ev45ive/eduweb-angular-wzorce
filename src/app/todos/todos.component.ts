import { Component, OnInit } from '@angular/core';
import { TodosService } from './todos.service';

@Component({
  selector: 'todos',
  template: `
    <div class="row">
      <div class="col">
        <div class="list-group">
          <div class="list-group-item" *ngFor="let todo of todos | async">
            {{todo.title}}
          </div>
        </div>
      </div>
      <div class="col">  
        <div class="alert alert-danger" *ngIf="error">{{error}}</div>

        <h3>Create Todo</h3>
        <div class="form-group">
          <input type="text" class="form-control" #titleRef>
        </div>
        <button class="btn btn-success" (click)="addTodo(titleRef.value)">Add Todo</button>
      </div>
    </div>
  `,
  styles: []
})
export class TodosComponent implements OnInit {

  error: boolean;

  addTodo(title) {
    this.todosService.createTodo({
      title
    })
      .subscribe(() => {
        console.log('success!')
      }, err => {
        this.error = err.message
      }, () => {
        console.log('completed')
      })
  }

  todos = this.todosService.queryTodos()

  constructor(private todosService: TodosService) { }

  ngOnInit() {
  }

}
