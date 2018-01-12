import {Routes} from "@angular/router";
import {MovieSearchComponent} from "./movie-search/movie-search.component";
import {UserSearchComponent} from "./user-search/user-search.component";
import {AppComponent} from "./app.component";
import {MovieListComponent} from "./movie-search/movie-list/movie-list.component";
import {HomeComponent} from "./home/home.component";


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
    path: 'user-search',
    component: UserSearchComponent,
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
    path: 'search',
    component: MovieSearchComponent,
  },
  {
    path: 'user',
    component: UserSearchComponent,
  },
  {
    path: '**',
    redirectTo: 'home'
  },

];
