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
    <h3>{{post.title}}</h3>
    <p>{{post.body}}</p>

    <h4>Comment</h4>
    <div class="blockquote" *ngFor="let comment of comments | async">
      <p>{{comment.body}}</p>
      <div class="blockquote-footer">{{comment.email}}</div>
    </div>

   </ng-container>
  `,
  styles: []
})
export class PostComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private postsService: PostService) { }

  post = this.route.paramMap.pipe(
    map(params => +params.get('id')),
    switchMap(id => this.postsService.getPost(id))
  )

  page = this.route.queryParamMap.pipe(
    map(params => +params.get('page')),
  )

  comments = this.post.pipe(
    combineLatest(this.page),
    switchMap(([post, page]) => this.postsService.getPostComments(post.id, page))
  )

  ngOnInit() { }

}
