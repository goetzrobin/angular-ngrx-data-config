import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyPostService } from './lazy-post.service';
import { EntityDataModule } from '@ngrx/data';
import { LazyPostDataService } from './lazy-post-data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, HttpClientModule, EntityDataModule],
  providers: [LazyPostDataService, LazyPostService],
})
export class LazyPostFeatureModule {}
