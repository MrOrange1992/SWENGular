import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MovieListComponent} from "../movie/movie-list/movie-list.component";
import {MovieListService} from "../movie/movie-list-service/movie-list-service";
import {UserService} from "../user/user-service/user-service";

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    MovieListComponent,
  ],
  providers: [
    MovieListService,
    UserService,
  ],
})
export class SearchModule { }

