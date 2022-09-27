import { Injectable } from "@angular/core";
import { EntityCollectionReducerMethodMap, EntityDefinitionService } from "@ngrx/data";
import { PaginableEntityCollectionReducerMethods } from "../paginable-entity-collection/PaginableEntityCollectionReducerMethods";

@Injectable()
export class LazyPostsEntityCollectionReducerMethodsFactory {
  constructor(private entityDefinitionService: EntityDefinitionService) {}

  /** Create the  {EntityCollectionReducerMethods} for the named entity type */
  create<T>(entityName: string): EntityCollectionReducerMethodMap<T> {
    const definition =
      this.entityDefinitionService.getDefinition<T>(entityName);
    const methodsClass = new PaginableEntityCollectionReducerMethods(
      entityName,
      definition
    );

    return methodsClass.methods;
  }
}
