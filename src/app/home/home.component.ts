import { Component, OnInit } from '@angular/core';
import {UserService} from "../user/user-service/user-service";
import {MovieListService} from "../movie/movie-list-service/movie-list-service";
import {MovieList} from "../entities/movie-list";


@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  providers: [MovieListService]
})
export class HomeComponent implements OnInit {

  movieList: any = {};
  message: string;
  userLists: Set<MovieList>;

  constructor(private movieListService: MovieListService) { }

  ngOnInit() {
    this.movieList = this.movieListService.createRecommendationList(JSON.parse(localStorage.getItem('activeUser')).genreIDs);//.subscribe(data => this.recommendationList.push(data));
    this.message = "Welcome to SWENGular " + JSON.parse(localStorage.getItem('activeUser')).username + "!";
    this.loadUserListNames();
  }

  loadUserListNames(): void {
    this.movieListService.loadUserLists(1).subscribe(lists => this.userLists = lists);
  }


}
