import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'post-editor',
  template: `
    <h3>Edit Post</h3>
    <form [formGroup]="form" (submit)="save()">
      <div class="form-group">
        <label>Title</label>
        <input type="text" class="form-control" formControlName="title">
      </div>
      <div class="form-group">
        <label>Body</label>
        <textarea class="form-control" formControlName="body"></textarea>
      </div>
      <div class="form-group">
        <input type="submit" class="btn btn-success" value="Save">
      </div>
    </form>
  `,
  styles: []
})
export class PostEditorComponent implements OnInit {

  @Input()
  set post(post){
    this.form.setValue(post)
  }

  form = this.fb.group({
    id: [''],
    userId:[''],
    title: [''],
    body: ['']
  })

  save(post) {
    this.saved.emit(this.form.value)
  }

  @Output()
  saved = new EventEmitter()

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
