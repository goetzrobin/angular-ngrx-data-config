import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator, QueryParams } from '@ngrx/data';
import { Observable } from 'rxjs';
import { LazyPost } from './LazyPost';

@Injectable()
export class LazyPostDataService extends DefaultDataService<LazyPost> {
  private baseUrl = '/custom/lazy-posts';

  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('LazyPost', http, httpUrlGenerator);
  }

  public override getWithQuery(
    params: string | QueryParams
  ): Observable<LazyPost[]> {
    console.log('custom service call used');
    return this.http.get<any>(`${this.baseUrl}?${params}`);
  }
}
