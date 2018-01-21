import { Component, OnInit } from '@angular/core';
import {MovieListService} from '../movie-list-service/movie-list-service';


@Component({
  selector: 'app-create-movie-list',
  templateUrl: './create-movie-list.component.html',
  providers: [
    MovieListService
  ]
})
export class CreateMovieListComponent implements OnInit {

  movieList: any = {};

  constructor(
    private movieListService: MovieListService,
  ) { }

  ngOnInit() { }

  create(): void {
    this.movieList.ownerID = JSON.parse(localStorage.getItem('activeUser')).id;
    this.movieListService.createMovieList(this.movieList);
  }

}
