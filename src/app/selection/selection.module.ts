import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectableDirective } from './selectable.directive';
import { SelectionService } from './selection.service';
import { SelectionProviderComponent } from './selection-provider.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SelectableDirective,
    SelectionProviderComponent
  ],
  exports:[
    SelectableDirective,
    SelectionProviderComponent
  ],
  providers:[
    // SelectionService
  ]
})
export class SelectionModule { }
