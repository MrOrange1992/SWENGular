import { Component, OnInit } from '@angular/core';
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

  constructor(private movieListService: MovieListService) { }


  ngOnInit() {
    this.loadList();
  }

  loadList(): void {
    this.movielist = this.movieListService.load('bestOf');
  }

}
