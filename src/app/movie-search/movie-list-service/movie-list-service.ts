import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {MovieList} from "../../entities/movie-list";
import {Movie} from "../../entities/movie";

@Injectable()
export class MovieListService {

  constructor(private http: HttpClient) {
  }
  load(listname:String): Observable<MovieList> {
    let url = 'http://localhost:8080/movielist/dummyList';
    let headers = new HttpHeaders().set('Accept','application/json');
    let params= new HttpParams().set('name','bestOf');
    let list = this.http.get<MovieList>(url, {headers,params});
    console.log("response");
    console.log(list);
    return list;
  }
}
