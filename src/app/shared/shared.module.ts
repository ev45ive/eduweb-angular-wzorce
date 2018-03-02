import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectionModule } from '../selection/selection.module';
import { SelectableDirective } from '../selection/selectable.directive';
import { SelectionProviderComponent } from '../selection/selection-provider.component';
import { SelectionDirective } from '../selection/selection.directive';

@NgModule({
  imports: [
    CommonModule,
    SelectionModule,
  ],
  exports:[
    SelectableDirective,
    SelectionProviderComponent,
    SelectionDirective
  ],
  declarations: []
})
export class SharedModule { }
