import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from './models/post';
import { map, switchMap, combineLatest } from 'rxjs/operators';
import { PostService } from './post.service';
import { Observable } from 'rxjs/Observable';
import { Comment } from './models/comment';

@Component({
  selector: 'post',
  template: `
   <ng-container *ngIf="post | async as post">
    <h2>{{post.title}}</h2>
    <p>{{post.body}}</p>

    <hr>

    <h4>Comment</h4>
    <div class="blockquote" *ngFor="let comment of comments | async">
      <p class="mb-0">{{comment.body}}</p>
      <div class="blockquote-footer">{{comment.email}}</div>
    </div>

   </ng-container>
  `,
  styles: []
})
export class PostComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private postsService: PostService) { }

  post_id = this.route.paramMap.pipe(
    map(params => +params.get('id'))
  )

  post = this.post_id.pipe(
    switchMap(id => this.postsService.getPost(id))
  )

  page = this.route.queryParamMap.pipe(
    map(params => +params.get('page')),
  )

  params = this.post_id.pipe(
    combineLatest(this.page)
  )

  comments = this.params.pipe(
    switchMap(([post_id, page]) => this.postsService.getPostComments(post_id, page))
  )

  ngOnInit() { }

}
