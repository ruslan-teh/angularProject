import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserDetailsComponent} from "../../components/user-components/user-details/user-details.component";
import {UserComponent} from "../../components/user-components/user/user.component";
import {UsersComponent} from "../../components/user-components/users/users.component";
import {UserRouterModule} from "./user-router.module";
import {HttpClientModule} from "@angular/common/http";
import {UserService} from "../../services/user.service";



@NgModule({
  declarations: [
    UserComponent,
    UsersComponent,
    UserDetailsComponent
  ],
  imports: [
    UserRouterModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [
    UserService
  ]
})
export class UserModule { }
