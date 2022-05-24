import {Component, Input, OnInit} from '@angular/core';
import {IUser} from "../../../models";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  @Input()
  user: IUser;

  constructor(private activateRoute: ActivatedRoute, private router: Router, private userService: UserService) {
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(value => {
      // const state = this.router.getCurrentNavigation().;
      //
      // if (state) {
      //   this.user = state;
      // } else {
      //   this.userService.getUserById(id).subscribe(value => this.user = value);
      // }

      const {state: {data}} = history;
      this.user = data as IUser;

    })


  }

}
