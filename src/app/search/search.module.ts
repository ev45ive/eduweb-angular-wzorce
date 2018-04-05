import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { SearchFormComponent } from './search-form.component';
import { ResultsListComponent } from './results-list.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchService } from './search.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [SearchComponent, SearchFormComponent, ResultsListComponent],
  exports: [SearchComponent],
  providers: [SearchService]
})
export class SearchModule { }
