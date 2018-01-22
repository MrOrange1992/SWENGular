import { Component, OnInit } from '@angular/core';
import {UserService} from "../user/user-service/user-service";
import {MovieListService} from "../movie/movie-list-service/movie-list-service";


@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  providers: [MovieListService]
})
export class HomeComponent implements OnInit {

  movieList: any = {};

  constructor(private movieListService: MovieListService) { }

  ngOnInit() {
    this.movieList = this.movieListService.createRecommendationList(JSON.parse(localStorage.getItem('activeUser')).genreIDs);//.subscribe(data => this.recommendationList.push(data));
    console.log(this.movieList)
  }


}
