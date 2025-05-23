import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { ArtisanDetailComponent } from './artisan-detail/artisan-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchresultsComponent } from './searchresults/searchresults.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'artisans/:category', component: CategoryComponent },
  { path: 'artisan/:id', component: ArtisanDetailComponent },
  { path: 'search', component: SearchresultsComponent },
  { path: '**', component: PageNotFoundComponent }
];
