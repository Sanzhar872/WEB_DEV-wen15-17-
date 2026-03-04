import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { AboutComponent } from './about-component/about-component';
import { AlbumComponent } from './album-component/album-component';
import { AlbumDetailComponent } from './album-detail-component/album-detail-component';
import { AlbumPhotosComponent } from './album-photos-component/album-photos-component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // [cite: 38]
  { path: 'home', component: HomeComponent }, // [cite: 39]
  { path: 'about', component: AboutComponent }, // [cite: 40]
  { path: 'albums', component: AlbumComponent }, // [cite: 41]
  { path: 'albums/:id', component: AlbumDetailComponent }, // [cite: 42]
  { path: 'albums/:id/photos', component: AlbumPhotosComponent }, // [cite: 44]
];