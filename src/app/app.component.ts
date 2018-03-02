import { Component } from '@angular/core';
import { SelectionService } from './selection/selection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  viewProviders:[
    SelectionService
  ],
})
export class AppComponent {
  title = 'app';
}
