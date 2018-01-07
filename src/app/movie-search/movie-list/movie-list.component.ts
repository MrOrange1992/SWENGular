import { Component, OnInit } from '@angular/core';
import {MovieList} from '../../entities/movie-list';
import {MovieListService} from '../movie-list-service/movie-list-service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  providers: [MovieListService],
})
export class MovieListComponent implements OnInit {

  movielist: MovieList;

  constructor(private movieListService: MovieListService) { }


  ngOnInit() {
    this.loadList();
  }

  loadList(): void {
    this.movieListService
      .load('bestOf')
      .subscribe( (movielist) => { this.movielist = movielist; },
                  (errResp) => { console.error('Error loading movies', errResp); }
      );
    console.log('Movielist: ' + this.movielist);
  }

}
