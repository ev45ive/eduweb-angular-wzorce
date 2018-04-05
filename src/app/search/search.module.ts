import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { SearchFormComponent } from './search-form.component';
import { ResultsListComponent } from './results-list.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchService } from './search.service';
import { PostEditorComponent } from './post-editor.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [SearchComponent, SearchFormComponent, ResultsListComponent, PostEditorComponent],
  exports: [SearchComponent],
  providers: [SearchService]
})
export class SearchModule { }
