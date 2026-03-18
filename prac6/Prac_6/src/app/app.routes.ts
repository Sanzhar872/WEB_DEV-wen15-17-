import { Routes } from '@angular/router';
import { PostListComponent } from './components/post-list/post-list';
import { PostDetailComponent } from './components/post-detail/post-detail';

export const routes: Routes = [
  {path: '', redirectTo: 'posts', pathMatch: 'full'},
  {path: 'posts', component: PostListComponent},
  {path: 'posts/:id', component: PostDetailComponent},
];
