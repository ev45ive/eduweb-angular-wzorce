import { Directive, Output, Input } from '@angular/core';
import { SelectionService } from './selection.service';

@Directive({
  selector: '[selection]',
  providers:[
    SelectionService
  ]
})
export class SelectionDirective {

  constructor(private selection:SelectionService<any>) {}

  @Input('selection')
  set setSelection(newSelection){
    this.selection.setSelection(newSelection)
  }
  
  @Output()
  selectionChange = this.selection.selectionChange

  ngOnInit(){
  }

}
