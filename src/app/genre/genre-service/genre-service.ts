import { Injectable } from '@angular/core';
import {User} from '../../entities/user';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Genre} from "../../entities/genre";

@Injectable()
export class GenreService {

  baseURL = 'http://localhost:8080/genre/';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Genre[]>(this.baseURL);
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}
