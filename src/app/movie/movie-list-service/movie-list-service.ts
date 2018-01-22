import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {MovieList} from '../../entities/movie-list';
import 'rxjs/Rx';
import {Movie} from "../../entities/movie";
import {User} from "../../entities/user";
import {Genre} from "../../entities/genre";

@Injectable()
export class MovieListService {

  baseURL = 'http://localhost:8080/movielist/';

  constructor(private http: HttpClient) {}

  getPopularMovies(): Observable<MovieList> {
    const params = new HttpParams().set('action', 'getPopularMovies');
    return this.http.get(this.baseURL, { params }).catch(this.handleError);
  }

  getMovieListByID(movieListID: number): Observable<MovieList> {
    const url = this.baseURL + movieListID;
    const params = new HttpParams().set('action', 'getMovieListByID');

    return this.http.get(url, { params }).catch(this.handleError);
  }

  getMovieListIDsOfOwner(userID: number): Observable<Set<number>> {
    const url = this.baseURL + userID;
    const params = new HttpParams().set('action', 'getMovieListIDsOfOwner');

    return this.http.get(url, { params }).catch(this.handleError);
  }
  getOwnerName(ownerID: number): Observable<String> {
    const url = this.baseURL + ownerID;
    const params = new HttpParams().set('action', 'getOwnerName');

    return this.http.get(url, { params }).catch(this.handleError);
  }

  searchMoviesByName(movieName: string): Observable<MovieList> {
    const url = this.baseURL + movieName;
    const params = new HttpParams().set('action', 'searchByName');

    return this.http.get(url, { params }).catch(this.handleError);
  }

  getMovieDetails(movieID: number): Observable<Movie> {
    const url = this.baseURL + movieID;
    const params = new HttpParams().set('action', 'getMovieDetails');
    return this.http.get(url, { params }).catch(this.handleError);
  }

  loadUserLists(userID: number): Observable<Set<MovieList>> {
    const url = this.baseURL + userID;
    const params = new HttpParams().set('action', 'getMovieListsOfUser');

    return this.http.get(url, { params }).catch(this.handleError);
  }

  addMovieToList(movieID: number, listID: number): Observable<String> {
    const url = this.baseURL + listID;
    const params = new HttpParams().set('action', 'addMovieToList');
    return this.http.put(url, movieID, { params }).catch(this.handleError);
  }

  removeMovieFromList(movieID: number, listID: number): Observable<String> {
    const url = this.baseURL + listID;
    const params = new HttpParams().set('action', 'deleteMovieFromList');

    return this.http.put(url, movieID, { params }).catch(this.handleError);
  }

  createMovieList(movieList: MovieList): Observable<MovieList> {
    const params = new HttpParams().set('action', 'createMovieList');
    return this.http.post(this.baseURL, movieList, { params }).catch(this.handleError);
  }

  deleteListFromUser(listID: number): Observable<String> {
    const url = this.baseURL + listID;
    const params = new HttpParams().set('action', 'deleteMovieList');
    return this.http.delete(url, { params }).catch(this.handleError);
  }

  getGenre(genreID:number): Observable<Genre>{
    const url = 'http://localhost:8080/genre/' + genreID;
    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http.get(url, {headers}).catch(this.handleError);
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
