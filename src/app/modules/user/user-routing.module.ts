import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from "../../components/user-component/users/users.component";
import {UserDetailsComponent} from "../../components/user-component/user-details/user-details.component";
import {UserResolver} from "../../services/resolvers/user.resolver";

const routes: Routes = [
  {
    path: '', component: UsersComponent, children: [
      {path: ':id', component: UserDetailsComponent, resolve: {data: UserResolver}}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
