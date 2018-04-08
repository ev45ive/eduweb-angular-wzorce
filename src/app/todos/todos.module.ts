import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { TodosService } from './todos.service';
import { TodosRoutingModule } from './todos.routing.module';
import { QuickTodoComponent } from './quick-todo.component';
import { FormsModule } from '@angular/forms';
import { TodoGuardGuard } from './todo-guard.guard';

@NgModule({
  imports: [
    CommonModule,
    TodosRoutingModule,
    FormsModule
  ],
  declarations: [TodosComponent, QuickTodoComponent],
  providers: [TodosService, TodoGuardGuard],
  exports: [QuickTodoComponent]
})
export class TodosModule { }
