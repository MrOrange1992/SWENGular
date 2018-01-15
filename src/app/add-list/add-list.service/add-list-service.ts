import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {MovieList} from '../../entities/movie-list';
import 'rxjs/Rx';

@Injectable()
export class AddListService {

  constructor(private http: HttpClient) {}

  create(listname: string): Promise<any> {
    const url = 'http://localhost:8080/movielist';
    const headers = new HttpHeaders().set('Accept', 'application/json');
    const params = new HttpParams().set('name', listname);
    return this.http.post(url, {headers, params})
      .toPromise()
      .then(response => { return response }, this.handleError);
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
