import { Component, OnInit } from '@angular/core';
import {MovieListService} from '../movie-list-service/movie-list-service';
import {User} from "../../entities/user";


@Component({
  selector: 'app-create-movie-list',
  templateUrl: './create-movie-list.component.html',
  providers: [
    MovieListService
  ]
})
export class CreateMovieListComponent implements OnInit {

  movieList: any = {};
  user: any = {};

  constructor(
    private movieListService: MovieListService,
  ) { }

  ngOnInit() { }

  create(): void {
    this.movieList.ownerID = JSON.parse(localStorage.getItem('activeUser')).id;
    this.movieListService.createMovieList(this.movieList).subscribe();
    this.user = JSON.parse(localStorage.getItem('activeUser'));
    this.user.movieLists.push(this.movieList);
    localStorage.setItem('activeUser', JSON.stringify(this.user));
  }

}
