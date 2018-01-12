import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MovieComponent} from './movie/movie.component';
import {MovieListComponent} from './movie-list/movie-list.component';
import {MovieListService} from "./movie-list-service/movie-list-service";

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    MovieComponent,
    MovieListComponent,
  ],
  providers: [
    MovieListService,
  ],
})
export class MovieSearchModule { }

