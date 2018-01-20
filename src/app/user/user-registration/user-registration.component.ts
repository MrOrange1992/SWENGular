import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../user-service/user-service';
import {AlertService} from '../../services/alert.service';
import {User} from '../../entities/user';
import {Genre} from "../../entities/genre";
import {GenreService} from "../../genre/genre-service/genre-service";

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  providers: [
    UserService,
    AlertService
  ]
})
export class UserRegistrationComponent {

  user: any = {};
  loading = false;

  message: string ="";
  name: string;
  genres: Array<Genre> = [];
  //selectedGenreIDs: Set<number> = new Set<number>();

  constructor(
    private router: Router,
    private userService: UserService,
    private genreService: GenreService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.genreService
      .getAll()
      .subscribe(
        (genres) => {
          this.genres = genres;
        },
        (errResp) => {
          console.error('Error loading genres', errResp);
        }
      )
    //TODO order array by genre names
    //this.genres = this.genres.sort((n1,n2) => n1.name.charCodeAt(0) - n2.name.charCodeAt(0));

    //this.user.genreIDs = new Set<number>();

    this.user.genreIDs = "";
  }

  register() {
    this.loading = true;

    //this.user.genreIDs = this.selectedGenreIDs;

    this.userService.create(this.user)
      .subscribe(
        data => {
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/login']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }

  select(g: Genre): void {
    if(this.user.genreIDs.indexOf(g.id) < 0){
      this.user.genreIDs += (g.id+",");
      this.message = "Added: " + g.name;
    }
    else {
      this.user.genreIDs.replace((g.id+","),"");
      this.message = "Deleted: " + g.name;
    }
  }
}
