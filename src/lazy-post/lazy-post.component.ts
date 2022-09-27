import { Component, OnInit } from '@angular/core';
import { LazyPostService } from '../lib/lazy-post-feature/lazy-post.service';

@Component({
  selector: 'app-lazy-post',
  template: `<ng-container *ngrxLet="{
    posts: (posts$ | async) ?? [],
    loading: (loading$ | async),
    loaded: (loaded$ | async),
    errors: (errors$ | async),
    totalPages: (totalPages$ | async),
    totalElements: (totalElements$ | async)
  } as ob">
  <h1>Lazy Posts</h1>
  <p> loading: {{ob.loading}} </p>
  <p> loaded: {{ob.loaded}} </p>
  <p> totalPages: {{ob.totalPages}} </p>
  <p> totalElements: {{ob.totalElements}} </p>
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
  totalPages$ = this.lazyPostService.totalPages$;
  totalElements$ = this.lazyPostService.totalElements$;

  constructor(private lazyPostService: LazyPostService) {}

  ngOnInit() {
    const page = 1;
    const size = 10;
    this.lazyPostService.getWithQuery(`page=${page}&size=${size}`);
    this.lazyPostService.setFilter({ page, size });
  }
}
