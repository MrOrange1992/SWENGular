import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserService} from './user-service/user-service';
import {UserSearchComponent} from './user-search.component';
import {UserComponent} from './user/user.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    UserComponent,
    UserSearchComponent
  ],
  providers: [
    UserService,
  ]
})
export class UserSearchModule { }
