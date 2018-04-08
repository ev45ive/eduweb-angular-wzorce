import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { TodosService } from './todos.service';
import { TodosRoutingModule } from './todos.routing.module';

@NgModule({
  imports: [
    CommonModule,
    TodosRoutingModule
  ],
  declarations: [TodosComponent],
  providers: [TodosService]
})
export class TodosModule { }
