import {Routes} from "@angular/router";
import {MovieListComponent} from "./movie/movie-list/movie-list.component";
import {HomeComponent} from "./home/home.component";
import {SearchComponent} from "./search/search.component";
import {CreateMovieListComponent} from "./movie/create-movie-list/create-movie-list.component";
import {UserRegistrationComponent} from "./user/user-registration/user-registration.component";
import {AuthGuard} from "./guards/auth.guard";
import {LoginComponent} from "./user/login/login.component";
import {UserListComponent} from "./userlist/userlist.component";
import {ListComponent} from "./list/list.component";


export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'register',
    component: UserRegistrationComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create',
    component: CreateMovieListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'lists',
    component: ListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'user-list/:name',
    component: UserListComponent,
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
