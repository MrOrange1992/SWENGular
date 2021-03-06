import {Component, OnInit} from '@angular/core';
import {MovieListService} from '../movie-list-service/movie-list-service';
import {Observable} from "rxjs/Observable";
import {ActivatedRoute} from "@angular/router";
import {MovieList} from "../../entities/movie-list";
import {Movie} from "../../entities/movie";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  providers: [MovieListService],
  inputs: ['movielist', 'userLists'],
})
export class MovieListComponent implements OnInit {

  id: number;
  showUserDetails: boolean;
  public userLists: Set<MovieList>;
  public movielist: Observable<MovieList>;
  responseMessage: String;
  selectedList: string;
  selectedMovie: Movie;
  selectedMovieID: number;
  stars: Array<number>;
  safeTrailerUrl: SafeResourceUrl;

  slideConfig = {'slidesToShow': 6, 'slidesToScroll': 3, 'infinite': true, 'autoplay':true, 'arrows':true, 'speed':3000, 'dots':true,
    'responsive':[{'breakpoint': 1199, 'settings':{ 'slidesToShow':4, 'slidesToScroll':4}},
      {'breakpoint': 991, 'settings':{ 'slidesToShow':3, 'slidesToScroll':3}},
      {'breakpoint': 767, 'settings':{ 'slidesToShow':1, 'slidesToScroll':1}}] };
  constructor(private movieListService: MovieListService, private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.selectedList = "";
    this.stars = [];
  }

  loadMovieDetail(id: number): Observable<Movie>{
    return this.movieListService.getMovieDetails(id);
  }

  getPosterStyles(path: string) {
    let pStyles = {
      'background-image': 'url("https://image.tmdb.org/t/p/w300_and_h450_bestv2' + path,
    };
    return pStyles;
  }

  addMovieToList(movieID: number): void{
   this.movieListService.addMovieToList(movieID, Number(this.selectedList)).subscribe(resp => this.responseMessage = "Added Movie to List!");
  }
  removeMovieFromList(movieID:number): void{
    this.movieListService.removeMovieFromList(movieID, Number(this.selectedList)).subscribe(resp => this.responseMessage = "Removed Movie from List!");
  }

  onMovieClick(movie: Movie): void{

    this.selectedMovieID = movie.id;
    this.loadMovieDetail(movie.id).subscribe(movie => (this.selectedMovie = movie, this.stars = Array(Math.floor(this.selectedMovie.voteAverage)).fill(1)));
  }
  sanitizeTrailer(url: string): SafeResourceUrl{
    return this.sanitizer.bypassSecurityTrustResourceUrl(url.replace("https://youtu.be/","https://www.youtube.com/embed/"));
  }

}
