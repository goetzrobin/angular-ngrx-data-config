import { Component, OnInit } from '@angular/core';
import { LazyPostService } from './lazy-post.service';

@Component({
  selector: 'app-lazy-post',
  template: `<ng-container *ngrxLet="{
    posts: (posts$ | async) ?? [],
    loading: (loading$ | async)
  } as ob">lazy post works</ng-container>`,
  styles: [
    `:host {
    disply: block;
  }`,
  ],
})
export class LazyPostComponent implements OnInit {
  posts = this.lazyPostService.filteredEntities$;
  loading$ = this.lazyPostService.loading$;
  loaded$ = this.lazyPostService.loaded$;
  errors$ = this.lazyPostService.errors$;

  constructor(private lazyPostService: LazyPostService) {}

  ngOnInit() {
    this.lazyPostService.getAll();
  }
}
