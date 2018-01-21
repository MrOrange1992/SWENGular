import { Component, OnInit } from '@angular/core';
import {MovieList} from '../entities/movie-list';
import {Observable} from "rxjs/Observable";
import {MovieListService} from "../movie/movie-list-service/movie-list-service";
import {User} from "../entities/user";
import {UserService} from "../user/user-service/user-service";
import {MovieListComponent} from "../movie/movie-list/movie-list.component";
import {Movie} from "../entities/movie";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  providers: [MovieListService, UserService],
})
export class SearchComponent implements OnInit {

  searchName: string;

  searchSelectValues: string[] = ["movie","user","list"];
  searchSelect = this.searchSelectValues[0];
  movieListComponent: MovieListComponent;

  movieList: Observable<MovieList> = null;
  userList: Array<User> = [];

  selectedMovie: Movie;
  selectedMovieID: number;
  safeTrailerUrl: SafeResourceUrl;

  slideConfig = {'slidesToShow': 6, 'slidesToScroll': 3, 'infinite': true, 'autoplay':true, 'arrows':true, 'speed':3000, 'dots':true,
    'responsive':[{'breakpoint': 1199, 'settings':{ 'slidesToShow':4, 'slidesToScroll':4}},
      {'breakpoint': 991, 'settings':{ 'slidesToShow':3, 'slidesToScroll':3}},
      {'breakpoint': 767, 'settings':{ 'slidesToShow':1, 'slidesToScroll':1}}] };

  constructor(private movieListService: MovieListService, private userService: UserService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    console.log(JSON.parse(localStorage.getItem('activeUser')));
  }

  search(): void {
    switch(this.searchSelect) {
      case "movie": {
        this.userList = [];
        this.movieList = this.movieListService.searchMoviesByName(this.searchName);
        break;
      }
      case "user": {
        this.movieList = null;
        this.userService
          .searchUsersByNameContaining(this.searchName)
          .subscribe(
            (userList) => { this.userList = userList; },
            (errResp) => { console.error('Error loading users', errResp); }
          );
        break;
      }
      case "list": {
        break;
      }
    }
  }


}
