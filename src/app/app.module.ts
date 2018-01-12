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
import {HeaderComponent} from "./header/header.component";
import {HomeComponent} from "./home/home.component";
import {FooterComponent} from "./footer/footer.component";
import {RouterModule} from "@angular/router";
import {APP_ROUTES} from "./app.routes";
import {AddListComponent} from "./add-list/add-list.component";

@NgModule({
  declarations: [
    AddListComponent,
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
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
    FormsModule,
    RouterModule.forRoot(APP_ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
