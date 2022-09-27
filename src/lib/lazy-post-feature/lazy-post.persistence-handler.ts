import { Injectable } from "@angular/core";
import { DefaultPersistenceResultHandler, EntityAction } from "@ngrx/data";
import { Action } from "@ngrx/store";

@Injectable()
export class LazyPostPersistenceResultHandler extends DefaultPersistenceResultHandler {
  public override handleSuccess(
    originalAction: EntityAction
  ): (data: any) => Action {
    const actionHandler = super.handleSuccess(originalAction);
    return (data: any) => {
      const action = actionHandler(data.elements);
      if (action && data) {
        (action as any).payload.totalPages = data.totalPages;
      }
      if (action && data) {
        (action as any).payload.totalElements = data.totalElements;
      }
      return action;
    };
  }
}