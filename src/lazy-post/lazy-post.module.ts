import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { RouterLinkWithHref, RouterModule, Routes } from '@angular/router';
import { LazyPostComponent } from './lazy-post.component';
import { EntityDataModule, EntityDefinitionService } from '@ngrx/data';
import { LazyPostService } from './lazy-post.service';
import { LetModule } from '@ngrx/component';

const routes: Routes = [
  {
    path: '',
    component: LazyPostComponent,
  },
];
@NgModule({
  imports: [
    CommonModule,
    RouterLinkWithHref,
    RouterModule.forChild(routes),
    EntityDataModule,
    LetModule,
  ],
  providers: [LazyPostService],
})
export class LazyPostModule {}
