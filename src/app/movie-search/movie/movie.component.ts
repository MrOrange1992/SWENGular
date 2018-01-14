import { Component, OnInit } from '@angular/core';
import {Movie} from "../../entities/movie";
import {MovieListService} from "../movie-list-service/movie-list-service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html'
})
export class MovieComponent implements OnInit {

  movieID: number;

  movie: Observable<Movie>;

  constructor(private movieListService: MovieListService) { }

  ngOnInit() {
      this.movie = this.movieListService.getMovieDetails(this.movieID.toString());
  }

}
