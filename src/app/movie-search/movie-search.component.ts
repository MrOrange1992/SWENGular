import { Component, OnInit } from '@angular/core';
import {MovieListService} from './movie-list-service/movie-list-service';
import {MovieList} from '../entities/movie-list';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  providers: [MovieListService],
})
export class MovieSearchComponent implements OnInit {

  movieName: string;

  movieList: Observable<MovieList>;
  slideConfig = {"slidesToShow": 6, "slidesToScroll": 3, "infinite": true, "autoplay":true, "arrows":true, "speed":3000,"dots":true};


  constructor(private movieListService: MovieListService) { }

  ngOnInit() {
  }

  search(): void {
    this.movieList = this.movieListService.getMoviesByName(this.movieName);
  }

  getPosterStyles(path: string) {
    return {'background-image': 'url("https://image.tmdb.org/t/p/w300_and_h450_bestv2' + path};
  }

}
