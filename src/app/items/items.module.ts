import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsListComponent } from './items-list.component';
import { ItemsDataService } from './items-data.service';
import { SharedModule } from '../shared/shared.module';
import { SelectionModule } from '../selection/selection.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
    ItemsListComponent
  ],
  exports:[
    ItemsListComponent
  ],
  providers:[
  
  ]
})
export class ItemsModule {


  static forChild():ModuleWithProviders{
    return {
      ngModule: ItemsModule
    }
  }
  
  static forRoot(options = {}):ModuleWithProviders{
    return {
      ngModule: ItemsModule,
      providers:[
        {
          provide:'options',
          useValue: options
        },
        ItemsDataService
      ]
    }
  }
}
