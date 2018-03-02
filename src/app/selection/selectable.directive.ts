import { Directive, HostListener, Input, HostBinding, Host } from '@angular/core';
import { SelectionService } from './selection.service';

@Directive({
  selector: '[selectable]'
})
export class SelectableDirective {

  constructor(@Host() private selection:SelectionService<any>) {
    console.log('hello from selectable')
  }

  @Input('selectable')
  item

  @HostListener('click')
  select(){
    this.selection.setSelection(this.item)
  }


  @HostBinding('class.active')
  selected = false

  subscription

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

  ngOnInit(){
    this.selected = this.selection.selection == this.item

    this.subscription = this.selection.selectionChange.subscribe(selection => {
      this.selected = selection == this.item
    })
  }

}
