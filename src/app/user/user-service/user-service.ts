import { Injectable } from '@angular/core';
import {User} from '../../entities/user';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable()
export class UserService {

  baseURL = 'http://localhost:8080/';

  users: any = [];

  constructor(private http: HttpClient) {
    this.http.get(this.baseURL + 'users')
      .subscribe(data => {
        Object.values(data).forEach(value => this.users.push(value));
      });
  }

  searchUsersByNameContaining(userName: string): Observable<User[]> {
    const url = 'http://localhost:8080/user/search';
    const headers = new HttpHeaders().set('Accept', 'application/json');
    const params = new HttpParams().set('userName', userName);
    return this.http.get<User[]>(url, {headers, params}).catch(this.handleError);
  }

  getAll() {
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

    return this.http.post(this.baseURL + 'user', newUser);
  }

  update(user: User) {
    return this.http.put('/api/users/' + user.id, user);
  }

  delete(id: number) {
    return this.http.delete('/api/users/' + id);
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
