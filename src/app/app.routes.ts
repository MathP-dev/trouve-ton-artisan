import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { ArtisanDetailComponent } from './artisan-detail/artisan-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'artisans/:category', component: CategoryComponent },
  { path: 'artisan/:id', component: ArtisanDetailComponent }
];
