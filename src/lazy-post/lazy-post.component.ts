import { Component, OnInit } from '@angular/core';
import { LazyPostService } from './lazy-post.service';

@Component({
  selector: 'app-lazy-post',
  template: `<ng-container *ngrxLet="{
    posts: (posts$ | async) ?? [],
    loading: (loading$ | async),
    loaded: (loaded$ | async),
    errors: (errors$ | async)
  } as ob">
  <h1>Lazy Posts</h1>
  <p> loading: {{ob.loading}} </p>
  <p> loaded: {{ob.loaded}} </p>
  <p>posts</p>
  <pre>{{ob.posts | json}}</pre>

  <p>errors</p>
  <pre>{{ob.errors | json}}</pre>
  </ng-container>`,
  styles: [
    `:host {
    disply: block;
  }`,
  ],
})
export class LazyPostComponent implements OnInit {
  posts$ = this.lazyPostService.filteredEntities$;
  loading$ = this.lazyPostService.loading$;
  loaded$ = this.lazyPostService.loaded$;
  errors$ = this.lazyPostService.errors$;

  constructor(private lazyPostService: LazyPostService) {}

  ngOnInit() {
    this.lazyPostService.getAll();
  }
}
