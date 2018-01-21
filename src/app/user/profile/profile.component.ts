import { Component, OnInit } from '@angular/core';
import {GenreService} from "../../genre/genre-service/genre-service";
import {UserService} from "../user-service/user-service";
import {Router} from "@angular/router";
import {AlertService} from "../../services/alert.service";
import {Genre} from "../../entities/genre";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  providers: [
    UserService,
    AlertService
  ]
})
export class ProfileComponent implements OnInit {

  user: any = {};
  loading = false;

  genres: Genre[] = [];


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
          this.genres = genres.sort((n1, n2) => n1.name.charCodeAt(0) - n2.name.charCodeAt(0));
        },
        (errResp) => {
          console.error('Error loading genres', errResp);
        });
    this.user.genreIDs = [];
  }

  update() {
    this.loading = true;

    this.userService.update(this.user)
      .subscribe(
        data => {
          let userUpdate = JSON.parse(localStorage.getItem('activeUser'));

          userUpdate.username = this.user.username;
          userUpdate.password = this.user.password;
          userUpdate.genreIDs = this.user.genreIDs;
          userUpdate.favouriteActorIDs = this.user.favouriteActorIDs;
          localStorage.setItem('activeUser', JSON.stringify(userUpdate));

          this.alertService.success('Update successful', true);
          this.router.navigate(['/']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }

  onChange(id: number, isChecked: boolean): void {
    if (isChecked) { this.user.genreIDs.push(id); }
    else { this.user.genreIDs.pop(id); }

  }

}
