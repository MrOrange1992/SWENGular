import {Component, Input, OnInit} from '@angular/core';
import {MovieListService} from '../movie-list-service/movie-list-service';
import {Observable} from "rxjs/Observable";
import {ActivatedRoute} from "@angular/router";
import {MovieList} from "../../entities/movie-list";
import {Movie} from "../../entities/movie";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  providers: [MovieListService],
})
export class MovieListComponent implements OnInit {

  name: string;
  showUserDetails: boolean;
  userLists: Set<MovieList>;

  movielist: Observable<MovieList>;

  responseText: String;
  selectedList: string;
  selectedMovie: Movie
  selectedMovieID: number;

  slideConfig = {'slidesToShow': 6, 'slidesToScroll': 3, 'infinite': true, 'autoplay':true, 'arrows':true, 'speed':3000, 'dots':true,
    'responsive':[{'breakpoint': 1199, 'settings':{ 'slidesToShow':4, 'slidesToScroll':4}},
      {'breakpoint': 991, 'settings':{ 'slidesToShow':3, 'slidesToScroll':3}},
      {'breakpoint': 767, 'settings':{ 'slidesToShow':1, 'slidesToScroll':1}}] };
  constructor(private movieListService: MovieListService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.name = p['name'];
      this.showUserDetails = p['showUserDetails'];
    });
    this.responseText = "";
    this.selectedList = "";
    this.loadUserListNames();
    this.loadList();
  }

  loadList(): void {
    this.movielist = this.movieListService.load(name);
  }

  getPosterStyles(path: string) {
    let pStyles = {
      'background-image': 'url("https://image.tmdb.org/t/p/w300_and_h450_bestv2' + path,
    };
    return pStyles;
  }

  loadUserListNames(): void {
    this.movieListService.loadUserLists(1).subscribe(lists => this.userLists = lists);
  }

  addMovieToList(movieID: number): void{
   this.movieListService.addMovieToList(movieID, this.selectedList).subscribe(resp => this.responseText = resp);
  }
  onMovieClick(movie: Movie): void{

    this.selectedMovie = movie;
    this.selectedMovieID = movie.id;

  }

}

//TODO: Get username from userID
