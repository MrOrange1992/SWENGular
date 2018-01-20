
import {Component, OnInit} from "@angular/core";
import {MovieList} from "../entities/movie-list";
import {Observable} from "rxjs/Observable";
import {ActivatedRoute} from "@angular/router";
import {MovieListService} from "../movie/movie-list-service/movie-list-service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  providers: [MovieListService],
})
export class ListComponent implements OnInit {

  userLists: Observable<Set<MovieList>>;
  selectedList: string;
  userID: number;
  output: String;
  constructor( private movieListService: MovieListService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.selectedList = "";
    //TODO: Replace with current user
    this.userID = 1;
    this.loadUserLists();
  }


  loadUserLists(): void {
    this.userLists = this.movieListService.loadUserLists(this.userID);
  }

  deleteList(id: number): void{
    this.movieListService.deleteListFromUser(id).subscribe(output => this.output = output);
    this.loadUserLists();
  }

}
