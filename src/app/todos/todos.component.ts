import { Component, OnInit } from '@angular/core';
import { TodosService } from './todos.service';

@Component({
  selector: 'todos',
  template: `
    <div>
      <div class="alert alert-danger" *ngIf="error">{{error}}</div>

      <h3>Create Todo</h3>
      <div class="form-group">
        <input type="text" class="form-control" #titleRef>
      </div>
      <button class="btn btn-success" (click)="addTodo(titleRef.value)">Add Todo</button>
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

  constructor(private todosService: TodosService) { }

  ngOnInit() {
  }

}
