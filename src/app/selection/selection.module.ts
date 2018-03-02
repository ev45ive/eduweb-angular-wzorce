import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectableDirective } from './selectable.directive';
import { SelectionService } from './selection.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SelectableDirective
  ],
  exports:[
    SelectableDirective
  ],
  providers:[
    // SelectionService
  ]
})
export class SelectionModule { }
