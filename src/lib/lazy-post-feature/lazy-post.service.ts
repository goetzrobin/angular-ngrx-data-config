import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
  EntityDataService,
  EntityDefinitionService,
} from '@ngrx/data';
import { Observable } from 'rxjs';
import { LazyPostDataService } from './lazy-post-data.service';
import { LazyPost } from './LazyPost';

const metaDataMap = {
  LazyPost: {
    selectId: (p: LazyPost) => p.uuid,
    filterFn: (
      entities: LazyPost[],
      pattern: { page: number; size: number }
    ) => {
      return entities.filter((entity, index) => {
        return (
          index >= pattern.page * pattern.size &&
          index < (pattern.page + 1) * pattern.size
        );
      });
    },
    additionalCollectionState: {
      totalElements: 0,
      totalPages: 0,
    },
  },
};
@Injectable()
export class LazyPostService extends EntityCollectionServiceBase<LazyPost> {
  public totalPages$: Observable<number> = this.selectors$['totalPages$'];
  public totalElements$: Observable<number> = this.selectors$['totalElements$'];
  constructor(
    serviceElementsFactory: EntityCollectionServiceElementsFactory,
    eds: EntityDefinitionService,
    edas: EntityDataService,
    lpds: LazyPostDataService
  ) {
    eds.registerMetadataMap(metaDataMap);
    edas.registerService('LazyPost', lpds);
    super('LazyPost', serviceElementsFactory);
  }
}
