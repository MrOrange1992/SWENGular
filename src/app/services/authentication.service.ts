import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    // const params = new HttpParams().set('action', 'authenticateUser');

    return this.http.post<any>('http://localhost:8080/user/authenticate', { username: username, password: password }, /*{ params }*/)
      .map(user => {
        // login successful if there's a jwt token in the response
        if (user /*&& user.token*/) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('activeUser', JSON.stringify(user));
        }

        return user;
      });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('activeUser');
  }
}
