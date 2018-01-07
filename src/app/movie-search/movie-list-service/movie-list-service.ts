import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {MovieList} from '../../entities/movie-list';

@Injectable()
export class MovieListService {

  constructor(private http: HttpClient) {}

  load(listname: String): Observable<MovieList> {
    const url = 'http://localhost:8080/movielist/dummyList';
    const headers = new HttpHeaders().set('Accept', 'application/json');
    const params = new HttpParams().set('name', 'bestOf');
    const list = this.http.get<MovieList>(url, {headers, params});
    console.log('response');
    console.log(list);
    return list;
  }
}
