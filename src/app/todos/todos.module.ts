import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { TodosService } from './todos.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TodosComponent],
  exports: [TodosComponent],
  providers: [TodosService]
})
export class TodosModule { }
