import { Component, OnInit } from '@angular/core';
import { TodosService } from './todos.service';

@Component({
  selector: 'todos',
  template: `
    <div class="row">
      <div class="col">
        <div class="list-group">
          <div class="list-group-item" 
                *ngFor="let todo of todos | async">
            {{todo.title}}
          </div>
        </div>
      </div>
      <div class="col">
        <form (ngSubmit)="addTodo(todoRef.value)">
          <div class="form-group">
            <label for="">Todo:</label>
            <input type="text" class="form-control"  #todoRef>
          </div>
          <input type="submit" value="Add" class="btn btn-success">
        </form>
      </div>
    </div>
  `,
  styles: []
})
export class TodosComponent implements OnInit {
  
  todos = this.todosService.queryTodos()

  addTodo(title:string){
    this.todosService.createTodo({
      title
    })
    .subscribe(()=>{

    },()=>{})
    return false
  }

  constructor(private todosService:TodosService) { }

  ngOnInit() {
  }

}
