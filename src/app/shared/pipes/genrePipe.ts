import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer, SafeHtml, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import {MovieListService} from "../../movie/movie-list-service/movie-list-service";
import {Genre} from "../../entities/genre";
import {Observable} from "rxjs/Observable";

@Pipe({name: 'genrePipe'})
export class GenrePipe implements PipeTransform {
  constructor(private movieListService: MovieListService) {
  }
  transform(v): Observable<Genre> {

    return this.movieListService.getGenre(v);
  }
}
