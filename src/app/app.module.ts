import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsEditorModule } from './forms-editor/forms-editor.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
