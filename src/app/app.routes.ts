import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';

export const routes: Routes = [
  { path: 'todo', component: AppComponent },
  { path: 'my-movie', component: MovieComponent },
];
