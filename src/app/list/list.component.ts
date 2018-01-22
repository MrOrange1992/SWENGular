
import {Component, OnInit} from "@angular/core";
import {MovieList} from "../entities/movie-list";
import {Observable} from "rxjs/Observable";
import {ActivatedRoute} from "@angular/router";
import {MovieListService} from "../movie/movie-list-service/movie-list-service";
import {UserService} from "../user/user-service/user-service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  providers: [MovieListService, UserService]
})
export class ListComponent implements OnInit {

  userLists: any = {};
  selectedList: string;
  user: any = {};
  userID: number;
  output: String;
  listToDelete: MovieList;
  constructor(
    private movieListService: MovieListService,
    private userService: UserService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.selectedList = "";
    /*
    this.user = JSON.parse(localStorage.getItem('activeUser'));
    this.userID = JSON.parse(localStorage.getItem('activeUser')).id;
    this.userLists = this.movieListService.loadUserLists(this.userID);
    if(this.userLists.filter(movieList => movieList.name.equal('Recommendation'))){
      console.log("ngOnInit (IF = TRUE)");
      //JSON.parse(localStorage.getItem('activeUser')).genreIDs
      this.movieListService.createRecommendedMovieList(JSON.parse(localStorage.getItem('activeUser')).genreIDs, this.userID).subscribe();
    } else console.log("ngOnInit (IF = FALSE)")

    ;
*/
    //this.movieListService.createRecommendedMovieList(this.user.genreIDs).subscribe();
    //console.log(this.userID);
    this.loadUserLists();
  }


  loadUserLists(): void {
    this.userLists = this.movieListService.loadUserLists(this.user.id);
  }

  deleteList(id: number): void{
    this.movieListService.getMovieListByID(id).subscribe(list => this.listToDelete = list);
    this.movieListService.deleteListFromUser(id).subscribe(output => this.output = output);
    this.loadUserLists();
    this.user = JSON.parse(localStorage.getItem('activeUser'));
    this.user.movieLists.pop(this.listToDelete);
    localStorage.setItem('activeUser', JSON.stringify(this.user));
  }

}
