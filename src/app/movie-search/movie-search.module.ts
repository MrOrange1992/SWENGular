import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MovieComponent} from './movie/movie.component';
import {MovieListComponent} from './movie-list/movie-list.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    MovieComponent,
    MovieListComponent
  ]
})
export class MovieSearchModule { }
