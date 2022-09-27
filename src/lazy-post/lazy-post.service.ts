import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
  EntityDefinitionService,
} from '@ngrx/data';
import { LazyPostModule } from './lazy-post.module';
import { LazyPost } from './LazyPost';

@Injectable()
export class LazyPostService extends EntityCollectionServiceBase<LazyPost> {
  constructor(
    serviceElementsFactory: EntityCollectionServiceElementsFactory,
    eds: EntityDefinitionService
  ) {
    eds.registerMetadataMap({
      LazyPost: {
        selectId: (p: LazyPost) => p.uuid,
      },
    });
    super('LazyPost', serviceElementsFactory);
  }
}
