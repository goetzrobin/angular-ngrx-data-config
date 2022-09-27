import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref, RouterModule, Routes } from '@angular/router';
import { LazyPostComponent } from './lazy-post.component';
import { LetModule } from '@ngrx/component';
import { LazyPostFeatureModule } from '../lib/lazy-post-feature/lazy-post-feature.module';

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
    LazyPostFeatureModule,
    LetModule,
  ],
  declarations: [LazyPostComponent],
})
export class LazyPostModule {}
