import { Component, OnInit} from '@angular/core';
import {MovieList} from '../../entities/movie-list';
import {MovieListService} from '../movie-list-service/movie-list-service';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  providers: [MovieListService],
})
export class MovieListComponent implements OnInit {

  movielist: Observable<MovieList>;
  slideConfig = {"slidesToShow": 6, "slidesToScroll": 3, "infinite": true, "autoplay":true, "arrows":true, "speed":3000,"dots":true};

  constructor(private movieListService: MovieListService) { }

  ngOnInit() {
    this.loadList();
  }

  loadList(): void {
    this.movielist = this.movieListService.load('bestOf');
  }

  getPosterStyles(path: string) {
    let pStyles = {
      'background-image': 'url("https://image.tmdb.org/t/p/w300_and_h450_bestv2'+path,
    };
    return pStyles;
  }

}
