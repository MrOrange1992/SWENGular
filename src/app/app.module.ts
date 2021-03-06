import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {UserRegistrationComponent} from './user/user-registration/user-registration.component';
import {MovieListComponent} from './movie/movie-list/movie-list.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {SlickModule} from 'ngx-slick';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {FooterComponent} from './footer/footer.component';
import {RouterModule} from '@angular/router';
import {APP_ROUTES} from './app.routes';
import {SearchComponent} from './search/search.component';
import { AlertComponent } from './alert/alert.component';
import {SanitizeUrlPipe} from './shared/pipes/SanitizeUrlPipe';
import {AuthGuard} from './guards/auth.guard';
import {AlertService} from './services/alert.service';
import {AuthenticationService} from './services/authentication.service';
import {UserService} from './user/user-service/user-service';
import {JwtInterceptor} from './helpers/jwt.interceptor';
// import {BackendProvider} from './helpers/backend.interceptor';
import {LoginComponent} from './user/login/login.component';
import {GenreService} from "./genre/genre-service/genre-service";
import {ListComponent} from "./list/list.component";
import {UserListComponent} from "./userlist/userlist.component";
import { ProfileComponent } from './user/profile/profile.component';
import {GenrePipe} from "./shared/pipes/genrePipe";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SearchComponent,
    UserRegistrationComponent,
    MovieListComponent,
    LoginComponent,
    AlertComponent,
    SanitizeUrlPipe,
    GenrePipe,
    ListComponent,
    UserListComponent,
    ProfileComponent,
  ],
  exports: [
    SanitizeUrlPipe,
    GenrePipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SlickModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    GenreService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    // BackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
