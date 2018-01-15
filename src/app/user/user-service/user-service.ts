import { Injectable } from '@angular/core';
import {User} from '../../entities/user';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {}

  load(userName: string): Observable<User[]> {
    const url = 'http://localhost:8080/user/search';
    const headers = new HttpHeaders().set('Accept', 'application/json');
    const params = new HttpParams().set('userName', userName);
    return this.http.get<User[]>(url, {headers, params}).catch(this.handleError);
  }
  /*
  updateUser(user: User): void {
    const url = 'http://localhost:8080/user/follow';
    const headers = new HttpHeaders().set('Accept', 'application/json');
    const params = new HttpParams().set('METHOD', 'updateUser');
    this.http.post(url, {headers, params, user}).catch(this.handleError);
  }
  */

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}
