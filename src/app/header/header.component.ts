import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";
import {Router, RouterModule} from "@angular/router";
import {APP_ROUTES} from "../app.routes";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  providers: [RouterModule]
})
export class HeaderComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  searchName: String = "";
  ngOnInit() {
  }

  logout() {
    this.authenticationService.logout();
  }

  search(name: String){
    this.router.navigate(['/search',name]);
  }


}

