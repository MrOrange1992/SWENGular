import {CommonModule} from "@angular/common";

import {NgModule} from "@angular/core";
import {SanitizeUrlPipe} from "./pipes/SanitizeUrlPipe";



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SanitizeUrlPipe,
  ],
  exports: [
    SanitizeUrlPipe,
  ],
  providers: [

  ]
})
export class SharedModule {}
