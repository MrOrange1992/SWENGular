import {
  HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest,
  HttpResponse
} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {UserService} from "../user/user-service/user-service";
import {User} from "../entities/user";

@Injectable()
export class BackendInterceptor implements HttpInterceptor {

  baseURL = 'http://localhost:8080/';


  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // array in local storage for registered users
    const users: any[] = JSON.parse(localStorage.getItem('users')) || [];

    // const users: User[] = this.userService.getAll().toPromise().then(response => { return; });

    /*
    // authenticate
    if (request.url.endsWith( this.baseURL + 'user/authenticate') && request.method === 'POST') {
      // find if any user matches login credentials
      const filteredUsers = users.filter(user => {
        return user.userName === request.body.userName && user.password === request.body.password;
      });

      if (filteredUsers.length) {
        // if login details are valid return 200 OK with user details and fake jwt token
        const user = filteredUsers[0];
        const body = {
          id: user.id,
          userName: user.userName,
          token: 'fake-jwt-token'
        };

        return Observable.of(new HttpResponse({status: 200, body: body}));
      } else {
        // else return 400 bad request
        return Observable.throw('Username or password is incorrect');
      }
    }
    */

    /*
    // get users
    if (request.url.endsWith('/api/users') && request.method === 'GET') {
      // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
      if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
        return Observable.of(new HttpResponse({status: 200, body: users}));
      } else {
        // return 401 not authorised if token is null or invalid
        return Observable.throw('Unauthorised');
      }
    }

    // get user by id
    if (request.url.match(/\/api\/users\/\d+$/) && request.method === 'GET') {
      // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
      if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
        // find user by id in users array
        let urlParts = request.url.split('/');
        let id = parseInt(urlParts[urlParts.length - 1]);
        let matchedUsers = users.filter(user => {
          return user.id === id;
        });
        let user = matchedUsers.length ? matchedUsers[0] : null;

        return Observable.of(new HttpResponse({status: 200, body: user}));
      } else {
        // return 401 not authorised if token is null or invalid
        return Observable.throw('Unauthorised');
      }
    }
    */

    /*
    // create user
    if (request.url.endsWith(this.baseURL + 'user') && request.method === 'POST') {
      // get new user object from post body
      const newUser = request.body;

      // validation
      const duplicateUser = users.filter(user => {
        return user.userName === newUser.userName;
      }).length;
      if (duplicateUser) {
        return Observable.throw('Username "' + newUser.userName + '" is already taken');
      }

      // save new user
      newUser.id = users.length + 1;
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));

      // respond 200 OK
      return Observable.of(new HttpResponse({status: 200}));
    }
    */

    /*
    // delete user
    if (request.url.match(/\/api\/users\/\d+$/) && request.method === 'DELETE') {
      // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
      if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
        // find user by id in users array
        let urlParts = request.url.split('/');
        let id = parseInt(urlParts[urlParts.length - 1]);
        for (let i = 0; i < users.length; i++) {
          let user = users[i];
          if (user.id === id) {
            // delete user
            users.splice(i, 1);
            localStorage.setItem('users', JSON.stringify(users));
            break;
          }
        }

        // respond 200 OK
        return Observable.of(new HttpResponse({status: 200}));
      } else {
        // return 401 not authorised if token is null or invalid
        return Observable.throw('Unauthorised');
      }
    }
    */

    // pass through any requests not handled above
    return next.handle(request);

  }
}

export let fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: BackendInterceptor,
  multi: true
};

