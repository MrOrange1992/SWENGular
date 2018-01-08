import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import {UserRegistrationComponent} from './user-registration/user-registration.component';
import {MovieListComponent} from "./movie-search/movie-list/movie-list.component";
import {HttpClientModule} from "@angular/common/http";
import {SlickModule} from "ngx-slick";
import { UserSearchComponent } from './user-search/user-search.component';
import { UserComponent } from './user-search/user/user.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    MovieSearchComponent,
    MovieListComponent,
    MovieListComponent,
    UserSearchComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SlickModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
