
import {Component, OnInit} from "@angular/core";
import {MovieListService} from "../movie/movie-list-service/movie-list-service";
import {ActivatedRoute} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";
import {MovieList} from "../entities/movie-list";
import {Observable} from "rxjs/Observable";
import {User} from "../entities/user";

@Component({
  selector: 'app-user-list',
  templateUrl: './userlist.component.html',
  providers: [MovieListService],
})
export class UserListComponent implements OnInit {

  id: number;
  showUserDetails: boolean;
  selectedUserList: Observable<MovieList>;
  userLists: Set<MovieList>;
  responseText: String;
  ownerName: Observable<String>;
  ownerID: number;

  constructor(private movieListService: MovieListService, private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.route.params.subscribe(p => {
      this.id = p['id'];
      this.showUserDetails = p['showUserDetails'];
    });
    this.loadUserListNames();
    this.loadMovieList(this.id);
  }

  loadUserListNames(): void {
    this.movieListService.loadUserLists(1).subscribe(lists => this.userLists = lists);
  }
  loadMovieList(id: number) {
    this.selectedUserList = this.movieListService.getMovieListByID(id);
  }
}
