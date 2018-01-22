import { Injectable } from '@angular/core';
import {User} from '../../entities/user';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import * as shajs from 'sha.js';

@Injectable()
export class UserService {

  baseURL = 'http://localhost:8080/user/';

  users: any = [];

  constructor(private http: HttpClient) {
    const params = new HttpParams().set('action', 'getAllUsers');

    this.http.get(this.baseURL, { params })
      .subscribe(data => {
        Object.values(data).forEach(value => this.users.push(value));
      });
  }

  searchUsersByNameContaining(userName: string): Observable<User[]> {
    const url = this.baseURL + userName;
    const params = new HttpParams().set('action', 'search');
    return this.http.get<User[]>(url, { params }).catch(this.handleError);
  }

  getAll() {
    const params = new HttpParams().set('action', 'getAllUsers');
    return this.http.get<User[]>(this.baseURL + 'users');
  }


  getById(id: number) {
    return this.http.get('/api/users/' + id);
  }

  create(newUser: User): Observable<any> {

    // validation
    if (this.users.filter(user => {
      return user.username === newUser.username; }).length) {
      return Observable.throw('Username "' + newUser.username + '" is already taken');
    }

    newUser.password = shajs('sha256').update(newUser.password).digest('hex');
    const params = new HttpParams().set('action', 'createUser');

    return this.http.post(this.baseURL, newUser, { params });
  }

  update(user: User) {
    const url = this.baseURL + JSON.parse(localStorage.getItem('activeUser')).id;
    const params = new HttpParams().set('action', 'updateUser');

    return this.http.put(url, user, { params });
  }

  // TODO
  delete(id: number) {
    return this.http.delete('/api/users/' + id);
  }

  followUser(id: number): Observable<any> {
    const url = this.baseURL + JSON.parse(localStorage.getItem('activeUser')).id;
    const params = new HttpParams().set('action', 'follow');

    return this.http.put(url, id, { params });
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
