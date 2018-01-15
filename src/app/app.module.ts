import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {UserRegistrationComponent} from './user-registration/user-registration.component';
import {MovieListComponent} from "./movie/movie-list/movie-list.component";
import {HttpClientModule} from "@angular/common/http";
import {SlickModule} from "ngx-slick";
import { UserComponent } from './user/user.component';
import {FormsModule} from "@angular/forms";
import {HeaderComponent} from "./header/header.component";
import {HomeComponent} from "./home/home.component";
import {FooterComponent} from "./footer/footer.component";
import {RouterModule} from "@angular/router";
import {APP_ROUTES} from "./app.routes";
import {AddListComponent} from "./add-list/add-list.component";
import {SearchComponent} from "./search/search.component";

@NgModule({
  declarations: [
    AddListComponent,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SearchComponent,
    UserRegistrationComponent,
    MovieListComponent,
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
