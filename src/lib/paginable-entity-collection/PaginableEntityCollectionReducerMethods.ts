import { EntityAction, EntityCollection, EntityCollectionReducerMethods, EntityDefinition } from "@ngrx/data";

export class PaginableEntityCollectionReducerMethods<
  T
> extends EntityCollectionReducerMethods<T> {
  constructor(entityName: string, definition: EntityDefinition<T>) {
    super(entityName, definition);
  }

  protected override queryAllSuccess(
    collection: EntityCollection<T>,
    action: EntityAction<T[]>
  ): EntityCollection<T> {
    const ec = super.queryAllSuccess(collection, action);
    if ((action.payload as any).totalPages > -1) {
      (ec as any).totalPages = (action.payload as any).totalPages;
    }
    if ((action.payload as any).totalElements > -1) {
      (ec as any).totalElements = (action.payload as any).totalElements;
    }
    return ec;
  }

  protected override queryManySuccess(
    collection: EntityCollection<T>,
    action: EntityAction<T[]>
  ): EntityCollection<T> {
    const ec = super.queryManySuccess(collection, action);
    if ((action.payload as any).totalPages > -1) {
      (ec as any).totalPages = (action.payload as any).totalPages;
    }
    if ((action.payload as any).totalElements > -1) {
      (ec as any).totalElements = (action.payload as any).totalElements;
    }
    return ec;
  }

  protected override removeAll(
    collection: EntityCollection<T>,
    action: EntityAction<T>
  ): EntityCollection<T> {
    const ec = super.removeAll(collection, action);
    (ec as any).totalPages = 0;
    (ec as any).totalElements = 0;
    return ec;
  }
}
