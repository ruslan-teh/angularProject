import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import {UserComponent} from "../../components/user-component/user/user.component";
import {UsersComponent} from "../../components/user-component/users/users.component";
import {UserDetailsComponent} from "../../components/user-component/user-details/user-details.component";
import {UserService} from "../../services/user.service";
import {UserResolver} from "../../services/resolvers/user.resolver";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    UserComponent,
    UsersComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule
  ],
  providers: [
    UserResolver,
    UserService
  ]
})
export class UserModule { }
