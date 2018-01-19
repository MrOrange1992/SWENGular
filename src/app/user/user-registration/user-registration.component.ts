import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../user-service/user-service";
import {AlertService} from "../../services/alert.service";
import {User} from "../../entities/user";

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

  constructor(
    private router: Router,
    private userService: UserService,
    private alertService: AlertService) { }

  register() {
    this.loading = true;

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

}
