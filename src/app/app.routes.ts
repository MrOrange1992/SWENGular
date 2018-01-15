import {Routes} from "@angular/router";
import {MovieListComponent} from "./movie/movie-list/movie-list.component";
import {HomeComponent} from "./home/home.component";
import {SearchComponent} from "./search/search.component";


export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'lists',
    component: MovieListComponent,
  },
  {
    path: 'movie-list/:name',
    component: MovieListComponent,
  },
  {
    path: '**',
    redirectTo: 'home'
  },

];
