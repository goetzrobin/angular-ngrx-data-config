import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyPostService } from './lazy-post.service';
import {
  EntityCollectionReducerMethodsFactory,
  EntityDataModule,
  PersistenceResultHandler,
} from '@ngrx/data';
import { LazyPostDataService } from './lazy-post-data.service';
import { LazyPostPersistenceResultHandler } from './lazy-post.persistence-handler';
import { LazyPostsEntityCollectionReducerMethodsFactory } from './lazy-post.reducer-factory';

@NgModule({
  imports: [CommonModule, EntityDataModule],
  providers: [
    {
      provide: PersistenceResultHandler,
      useClass: LazyPostPersistenceResultHandler,
    },
    {
      provide: EntityCollectionReducerMethodsFactory,
      useClass: LazyPostsEntityCollectionReducerMethodsFactory,
    },

    LazyPostDataService,
    LazyPostService,
  ],
})
export class LazyPostFeatureModule {}
