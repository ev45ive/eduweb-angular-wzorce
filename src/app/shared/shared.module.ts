import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectionModule } from '../selection/selection.module';
import { SelectableDirective } from '../selection/selectable.directive';

@NgModule({
  imports: [
    CommonModule,
    SelectionModule,
  ],
  exports:[
    SelectableDirective
  ],
  declarations: []
})
export class SharedModule { }
