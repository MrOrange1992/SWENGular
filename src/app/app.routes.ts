import {Routes} from "@angular/router";
import {MovieListComponent} from "./movie/movie-list/movie-list.component";
import {HomeComponent} from "./home/home.component";
import {SearchComponent} from "./search/search.component";
import {CreateMovieListComponent} from "./movie/create-movie-list/create-movie-list.component";
import {UserRegistrationComponent} from "./user/user-registration/user-registration.component";


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
    path: 'register',
    component: UserRegistrationComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'create',
    component: CreateMovieListComponent,
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
