import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterLinkWithHref, RouterModule, Routes } from '@angular/router';
import { EntityDataModule } from '@ngrx/data';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { LazyPostFeatureModule } from '../lib/lazy-post-feature/lazy-post-feature.module';

const routes: Routes = [
  {
    path: '',
    component: HelloComponent,
  },
  {
    path: 'lazy-post',
    loadChildren: () =>
      import('../lazy-post/lazy-post.module').then((m) => m.LazyPostModule),
  },
];
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    RouterLinkWithHref,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot({}),
    LazyPostFeatureModule,
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
