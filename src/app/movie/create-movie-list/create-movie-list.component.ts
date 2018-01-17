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

  // movieList: Observable<MovieList>;

  // movieListName: string;

  movieList: any = {};


  constructor(
    private movieListService: MovieListService,
  ) { }

  ngOnInit() { }

  create(): void {
    //TODO replace with currentUser
    this.movieList.ownerID = 1;
    this.movieListService.createMovieList(this.movieList);
  }

}
