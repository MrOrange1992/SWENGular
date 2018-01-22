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

  baseURL = 'http://localhost:8080/';

  constructor(private http: HttpClient) {}

  getPopularMovies(): Observable<MovieList> {
    const url = 'http://localhost:8080/movielist/getPopularMovies';
    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http.get(url, {headers}).catch(this.handleError);
  }

  getMovieList(movieListID: number): Observable<MovieList> {
    const url = 'http://localhost:8080/viewmovielist/' + movieListID;
    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http.get(url, {headers}).catch(this.handleError);
  }
  getMovieListIDs(userID: number): Observable<Set<number>> {
    const url = 'http://localhost:8080/movielistids/' + userID;
    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http.get(url, {headers}).catch(this.handleError);
  }
  getOwnerName(ownerID:number): Observable<String> {
    const url = 'http://localhost:8080/listownername/' + ownerID;
    const headers = new HttpHeaders().set('Accept', 'application/text');
    return this.http.get(url, {headers}).catch(this.handleError);
  }

  searchMoviesByName(movieName: string): Observable<MovieList> {
    const url = 'http://localhost:8080/movielist/searchMoviesByName';
    const headers = new HttpHeaders().set('Accept', 'application/json');
    const params = new HttpParams().set('movieName', movieName);
    return this.http.get(url, {headers, params}).catch(this.handleError);
  }

  getMovieDetails(movieID: number): Observable<Movie> {
    const url = 'http://localhost:8080/movielist/getMovieDetails';
    const headers = new HttpHeaders().set('Accept', 'application/json');
    const params = new HttpParams().set('movieID', movieID.toString());
    return this.http.get(url, {headers, params}).catch(this.handleError);
  }

  loadUserLists(userid: number): Observable<Set<MovieList>> {
    const url = 'http://localhost:8080/movielist/';
    const headers = new HttpHeaders().set('Accept', 'application/json');
    const params = new HttpParams();
    return this.http.get(url, {headers, params}).catch(this.handleError);
  }

  addMovieToList(movieID: number, listID: string): Observable<String> {
    const url = 'http://localhost:8080/addmovietolist';
    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http.post(url, {'movieID':movieID.toString(),'listID':listID}).catch(this.handleError);
  }

  removeMovieFromList(movieID: number, listID: string): Observable<String> {
    const url = 'http://localhost:8080/removemoviefromlist';
    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http.post(url, {'movieID':movieID.toString(),'listID':listID}).catch(this.handleError);
  }
  /***
   * Posts given MovieList to DB
   * @param {MovieList} movieList
   * @returns {Promise<any>}
   */
  createMovieList(movieList: MovieList): Promise<any> {
    return this.http.post(this.baseURL + 'movielist', movieList)
      .toPromise().then(response => { return; });
  }

  deleteListFromUser(listID: number): Observable<String>{
    const url = 'http://localhost:8080/removelistfromuser';
    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http.post(url, {'listID':listID.toString()}).catch(this.handleError);
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
