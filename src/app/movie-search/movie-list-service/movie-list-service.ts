import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {MovieList} from '../../entities/movie-list';
import 'rxjs/Rx';

@Injectable()
export class MovieListService {

  constructor(private http: HttpClient) {}

  load(listname: String): Observable<MovieList> {
    const url = 'http://localhost:8080/movielist/dummyList';
    const headers = new HttpHeaders().set('Accept', 'application/json');
    const params = new HttpParams().set('name', 'bestOf');
    return this.http.get(url, {headers, params}).catch(this.handleError);
  }

  getMoviesByName(movieName: string): Observable<MovieList> {
    const url = 'http://localhost:8080/movielist/searchByName';
    const headers = new HttpHeaders().set('Accept', 'application/json');
    const params = new HttpParams().set('movieName', movieName);
    return this.http.get(url, {headers, params}).catch(this.handleError);
  }

  private handleError(error: any) {
      // In a real world app, we might use a remote logging infrastructure
      // We'd also dig deeper into the error to get a better message
      // console.debug("IN HANDLE ERROR!");
      const errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
      return Observable.throw(errMsg);
    }
}
