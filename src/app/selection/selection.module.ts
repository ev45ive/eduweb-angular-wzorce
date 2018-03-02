import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectableDirective } from './selectable.directive';
import { SelectionService } from './selection.service';
import { SelectionProviderComponent } from './selection-provider.component';
import { SelectionDirective } from './selection.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SelectableDirective,
    SelectionProviderComponent,
    SelectionDirective
  ],
  exports:[
    SelectableDirective,
    SelectionProviderComponent,
    SelectionDirective
  ],
  providers:[
    // SelectionService
  ]
})
export class SelectionModule { }
